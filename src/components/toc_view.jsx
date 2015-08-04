import React from 'react'
import { connectToStores } from 'uflux'
import map from 'dom101/map'

import DocStore from '../stores/doc_store'

let TocView = React.createClass({
  statics: {
    getStores: () => [ DocStore ],
    getPropsFromStores: () => {
      return { 
        docs: DocStore.getState()
      }
    }
  },

  render () {
    return (
      <div className='toc-panel'>
        {map(this.props.docs.sections, (section, idx) => {
          return this.renderSection(section, idx)
        })}
      </div>
    )
  },

  renderSection (section, idx) {
    return (
      <div className='toc-section' key={idx}>
        <a className='item' href=''>{section.title}</a>
      </div>
    )
  }
})

TocView = connectToStores(TocView)
export default TocView
