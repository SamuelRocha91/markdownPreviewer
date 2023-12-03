import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('')

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
        <div>
          <p id="preview">{ text }</p>
        </div>  
    </div>
    </>
  )
}

export default App
