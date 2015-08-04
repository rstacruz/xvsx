import c from 'classnames'
import map from 'dom101/map'
import React from 'react'
import { connectToStores } from 'uflux'

import SettingsStore from '../stores/settings_store'
import DocStore from '../stores/doc_store'

let CodeView = React.createClass({
  propTypes: {
    docs: React.PropTypes.object,
    settings: React.PropTypes.object,
  },

  statics: {
    getStores: () => [ SettingsStore, DocStore ],
    getPropsFromStores: () => {
      return {
        settings: SettingsStore.getState(),
        docs: DocStore.getState()
      }
    }
  },

  getComputedProps (props) {
    let selected = [ props.params.left, props.params.right ]
    return { selected }
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
        className={`code-panel -layout-${this.props.settings.layout}`}
      >
        {map(this.props.docs.sections, (section, i) => {
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
            {this.renderArticleText(sub)}
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
                return (<td key={lang.language}>
                  <pre
                    className={`hljs lang-${lang.language}`}
                    dangerouslySetInnerHTML={{ __html: lang.code }} />
                </td>)
              } else {
                return (<td key={lang.language} className='empty'>
                  <span className='nil'></span>
                </td>)
              }
            })}
          </tr>
        </table>
      </div>
    )
  },

  renderArticleText (sub) {
    if (!sub.hasText) return

    return (
      <div className='article-text'>
        <table>
          <tr>
            {map(sub.languages, (lang) => {
              return <td
                key={lang.language}
                dangerouslySetInnerHTML={{__html: lang.text}} />
            })}
          </tr>
        </table>
      </div>
    )
  }
})

CodeView = connectToStores(CodeView)
export default CodeView
