import React from 'react'
import { connectToStores } from 'uflux'
import map from 'dom101/map'

import DocStore from '../stores/doc_store'

let TocView = React.createClass({
  propTypes: {
    docs: React.PropTypes.shape({
      sections: React.PropTypes.array
    })
  },

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
        {this.props.docs.sections ?
          map(this.props.docs.sections, this.renderSection)
          : null}
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
