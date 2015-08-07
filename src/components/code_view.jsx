import c from 'classnames'
import map from 'dom101/map'
import React from 'react'
import { connectToStores } from 'uflux'

import SettingsStore from '../stores/settings_store'
import LanguageStore from '../stores/language_store'
import DocStore from '../stores/doc_store'

let CodeView = React.createClass({
  propTypes: {
    docs: React.PropTypes.object,
    settings: React.PropTypes.object
  },

  statics: {
    getStores: () => [ SettingsStore, DocStore, LanguageStore ],
    getPropsFromStores: () => {
      return {
        settings: SettingsStore.getState(),
        docs: DocStore.getState(),
        selected: LanguageStore.getState()
      }
    }
  },

  render () {
    let { settings, docs } = this.props

    return (
      <div
        className={c('code-panel', `-layout-${settings.layout}`)}
      >
        {docs.sections ? map(docs.sections, this.renderSection) : null}
      </div>
    )
  },

  renderSection (section, i) {
    return (
      <section key={i}
        className={c('section', 'with-' + this.props.selected.length)}
      >
        <h2 className='title'>{section.title}</h2>

        { this.props.settings.layout === 'compact' ? (
          <div className='article language-header'>
            <div className='left'></div>
            <div className='right'>
              {map(this.props.docs.languages, (lang) => {
                return (
                  <div className='lang' key={lang.id}>
                    {lang.title}
                  </div>
                )
              })}
            </div>
          </div>
        ) : null }

        {map(section.subsections, (sub, j) => {
          return (
            <div className='article' key={j}>
              <h3 className='article-head'>{sub.title}</h3>
              {this.renderArticleCode(sub)}
              {this.renderArticleText(sub)}
            </div>
          )
        })}
      </section>
    )
  },

  renderArticleCode (sub) {
    return (
      <div
        className={c('article-code', sub.hasText && '-with-text')}
      >
        <table>
          <tr>
            {map(sub.languages, (lang) => {
              if (lang.code) {
                return (<td key={lang.language}>
                  <pre
                    className={c('hljs', `lang-${lang.language}`)}
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

    return (<div className='article-text'>
      <table>
        <tr>
          {map(sub.languages, (lang) => {
            return (<td
              key={lang.language}
              dangerouslySetInnerHTML={{__html: lang.text}} />)
          })}
        </tr>
      </table>
    </div>)
  }
})

CodeView = connectToStores(CodeView)
export default CodeView
