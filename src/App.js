import React,{useState} from 'react'
import "./App.css"
import CodeEditor from './Component/CodeEditor'
import CodeOutput from './Component/CodeOutput'

function App() {

    const [html,setHtml] = useState('')
    const [css,setCss] = useState('')
    const [js,setJs] = useState('')
    const [srcDoc,setSrcDoc] = useState('')

	return (
		<div>
			<CodeEditor html={html} setHtml={setHtml} css={css} setCss={setCss} js={js} setJs={setJs}/>
            <CodeOutput html={html} css={css} js={js} srcDoc={srcDoc} setSrcDoc={setSrcDoc}/>
		</div>
	);
}

export default App
