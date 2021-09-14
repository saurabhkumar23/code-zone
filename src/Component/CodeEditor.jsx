import React from 'react'
import Editor from './Editor'

const CodeEditor = (props) => {

    const {html,setHtml,css,setCss,js,setJs} = props

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
                displayName='CSS'
                value={css}
                onChange={setCss}
            />
            <Editor
                language='javascript'
                displayName='JSS'
                value={js}
                onChange={setJs}
            />
        </div>
    )
}

export default CodeEditor
