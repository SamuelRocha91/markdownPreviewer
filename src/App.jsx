import { useState } from 'react'
import './App.css'
import { data } from './utils/data'
import { marked } from 'marked';



function App() {
  const [text, setText] = useState(data)
  const options = { breaks: true};
  const html = marked(text, options)


  return (
    <>
    <div>
        <textarea
          name="textToMark"
          id="editor"
          cols="30"
          rows="10"
          value={text}
          onChange={(event) => setText(event.target.value)}
        >
        </textarea>
        <div id="preview"  dangerouslySetInnerHTML={{ __html: html }}>
        </div>  
    </div>
    </>
  )
}

export default App
