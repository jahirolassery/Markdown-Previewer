import React, { Component } from 'react'
import "./preview.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinimize } from '@fortawesome/free-solid-svg-icons'; 

export default class Preview extends Component {
  constructor(props){
    super(props)

  }
  render() {
    return (
      <div>
        <div id="pr-toolbar-mx">
          <h1>Previwer</h1>
          <button onClick={this.props.onClick}><FontAwesomeIcon icon={faMinimize} id="max-icon"  ></FontAwesomeIcon></button>
        </div>
        <div className='pr-maximize' dangerouslySetInnerHTML = {this.props.data()}></div>
      </div>
    )
  }
}
