import c from 'classnames'
import map from 'dom101/map'
import React from 'react'
import { connectToStores } from 'uflux'

import codePresenter from '../presenters/code_presenter'
import SettingsStore from '../stores/settings_store'

const CodeView = connectToStores(React.createClass({
  propTypes: {
    data: React.PropTypes.object,
    settings: React.PropTypes.object,
  },

  statics: {
    getStores: () => [ SettingsStore ],
    getPropsFromStores: () => {
      return {
        settings: SettingsStore.getState()
      }
    }
  },

  getComputedProps (props) {
    let selected = [ props.params.left, props.params.right ]
    return {
      selected,
      data: codePresenter(this.props.data, selected)
    }
  },

  getInitialState () {
    return { ...this.getComputedProps(this.props) }
  },

  componentWillReceiveProps (props) {
    this.setState(this.getComputedProps(props))
  },

  render () {
    return (
      <div
        className={`-layout-${this.props.settings.layout}`}
      >
        {map(this.state.data.sections, (section, i) => {
          return this.renderSection(section, i)
        })}
      </div>
    )
  },

  renderSection (section, i) {
    return (
      <section key={i}
        className={c('section', 'with-' + this.state.selected.length)}
      >
        <h2 className='title'>{section.title}</h2>

        {map(section.subsections, (sub, j) => {
          return (<div className='article' key={j}>
            <h3 className='article-head'>{sub.title}</h3>
            {this.renderArticleCode(sub)}
          </div>)
        })}
      </section>
    )
  },

  renderArticleCode (sub) {
    return (
      <div
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
      </div>
    )
  }
}))

export default CodeView
