import React,{useState} from 'react'
import Editor from './Editor'

const CodeEditor = () => {

    const [html,setHtml] = useState('')

    return (
        <div className='code-editor-container'>
            <Editor
                language='xml'
                displayName='HTML'
                value={html}
                onChange={setHtml}
            />
            <Editor

            />
            <Editor

            />
        </div>
    )
}

export default CodeEditor
