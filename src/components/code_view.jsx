import c from 'classnames'
import map from 'dom101/map'
import React from 'react'
import { connectToStores } from 'uflux'

import codePresenter from '../presenters/code_presenter'
import Language from '../stores/language_store'

const CodeView = connectToStores(React.createClass({
  propTypes: {
    data: React.PropTypes.object,
    selected: React.PropTypes.arrayOf(React.PropTypes.string)
  },

  statics: {
    getStores: () => [ Language ],
    getPropsFromStores: () => { return { selected: Language.getState() } }
  },

  getDefaultProps () {
    return { data: window.Data }
  },

  getInitialState () {
    return { }
  },

  render () {
    var data = codePresenter(this.props.data, this.props.selected)
    return (<div>
      {map(data.sections, (section, i) => {
        return this.renderSection(section, i)
      })}
    </div>)
  },

  renderSection (section, i) {
    return (<section key={i}
      className={c('section', 'with-' + this.props.selected.length)}
    >
      <h2 className='title'>{section.title}</h2>

      {map(section.subsections, (sub, j) => {
        return (<div className='article' key={j}>
          <h3 className='article-head'>{sub.title}</h3>
          {this.renderArticleCode(sub)}
        </div>)
      })}
    </section>)
  },

  renderArticleCode (sub) {
    return (<div
      className={c('article-code', { '-with-text': sub.hasText })}
    >
      <table>
        <tr>
          {map(sub.languages, (lang) => {
            if (lang.code) {
              return (<td>
                <pre
                  className={`hljs lang-${lang.language}`}
                  dangerouslySetInnerHTML={{ __html: lang.code }} />
              </td>)
            } else {
              return (<td className='empty'>
                <span className='nil'></span>
              </td>)
            }
          })}
        </tr>
      </table>
    </div>)
  }
}))

export default CodeView
