import React, { Component } from 'react'
import "./editor.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinimize } from '@fortawesome/free-solid-svg-icons'; 



export default class EditorBig extends Component {

  constructor(props){
    super(props)

    this.state = {
      minEditor: "" 
    }
this.minEditor = this.minEditor.bind(this)
  }

  minEditor(){
    this.setState({
      minEditor: "none"
    })
  }
    
  render() {
    
    return (
      <div>
        <div >
        <div id="ed-toolbar-mx">
          <h1>Editor</h1>
          <button onClick={this.props.onClick} ><FontAwesomeIcon icon={faMinimize} id="max-icon"  ></FontAwesomeIcon></button>
        </div>
        <textarea value={this.props.data} className='ed-maximize'></textarea>
      </div>
      </div>
    )
  }
}
