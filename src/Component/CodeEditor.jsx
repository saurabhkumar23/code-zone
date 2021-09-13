import React,{useState} from 'react'
import Editor from './Editor'

const CodeEditor = () => {

    const [html,setHtml] = useState('')
    const [css,setCss] = useState('')
    const [js,setJs] = useState('')

    return (
        <div className='code-editor-container'>
            <Editor
                language='xml'
                displayName='HTML'
                value={html}
                onChange={setHtml}
            />
            <Editor
                language='css'
                displayName='Css'
                value={css}
                onChange={setCss}
            />
            <Editor
                language='javascript'
                displayName='JavaScript'
                value={js}
                onChange={setJs}
            />
        </div>
    )
}

export default CodeEditor
