import React, { useState } from 'react';
import { marked } from 'marked';
import "./main.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMaximize } from '@fortawesome/free-solid-svg-icons'; 
import EditorBig from './Editor';
import Preview from './Preview';



function MarkdownPreviewer() {
  const [markdown, setMarkdown] = useState('');
  const [preview, displayPreview] = useState(false);
  const [editor, displayEditor] = useState(false);
  const [main1, displayMain] = useState(true);
  const [main2, displayMain2] = useState(true)
 
  


  const handleMarkdownChange = (e) => {
    setMarkdown(e.target.value);
  };

  const setDisplayPreview = () => {
    displayPreview(!preview) 
    displayMain2(!main2)
    
  }

  const setDisplayEditor = () => {
    displayEditor(!editor) ;
    displayMain(!main1)
  }

  

  
  const renderMarkdown = () => {
    return { __html: marked(markdown) };
  };

  if(main1&&main2)
    {return (
    <div>
      
        <div id="ed-toolbar">
          <h1>Editor</h1>
          <button onClick={setDisplayEditor} ><FontAwesomeIcon icon={faMaximize} id="max-icon"  ></FontAwesomeIcon></button>
        </div>
      <textarea id="editor"
        value={markdown}
        onChange={handleMarkdownChange}
        placeholder="Enter Markdown text"
      />
      
      <div id="pr-toolbar">
          <h1>Previewer</h1>
          <button onClick={setDisplayPreview}><FontAwesomeIcon icon={faMaximize} id="max-icon"  ></FontAwesomeIcon></button>
        </div>
      <div id="preview"
        dangerouslySetInnerHTML={renderMarkdown() }
        
      ></div>
      </div>
    
  )};

  if(editor){
    return(
      <div>
        <EditorBig onClick={setDisplayEditor} data={markdown}/>
      </div>
    )
  };
  
  if(preview){
    return(
      <div>
        <Preview onClick={setDisplayPreview} data={renderMarkdown}/>
      </div>
    )
  };
}

export default MarkdownPreviewer;
