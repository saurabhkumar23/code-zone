import React,{useState,useEffect} from 'react'
import "./App.css"
import CodeEditor from './Component/CodeEditor'
import CodeOutput from './Component/CodeOutput'

function App() {

    const [html,setHtml] = useState('')
    const [css,setCss] = useState('')
    const [js,setJs] = useState('')
    const [srcDoc,setSrcDoc] = useState('')

    useEffect(() => {
        console.log('app useffect')
        if(localStorage.getItem('codeData') != null){
            let codeData = JSON.parse(localStorage.getItem('codeData'))
            console.log(codeData)
        }
        
        // setHtml(codeData.html)
    },[])

	return (
		<div>
			<CodeEditor html={html} setHtml={setHtml} css={css} setCss={setCss} js={js} setJs={setJs}/>
            <CodeOutput html={html} setHtml={setHtml} css={css} setCss={setCss} js={js} setJs={setJs} srcDoc={srcDoc} setSrcDoc={setSrcDoc}/>
		</div>
	);
}

export default App
