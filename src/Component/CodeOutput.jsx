import React,{useEffect} from 'react'

const CodeOutput = (props) => {

    const {html,css,js,srcDoc,setSrcDoc,setHtml,setCss,setJs} = props

    useEffect(() => {
        if(JSON.parse(localStorage.getItem('codeData')) != null){
            let codeData = JSON.parse(localStorage.getItem('codeData'))
            setHtml(codeData.html)
            setCss(codeData.css)
            setJs(codeData.js)
        }
    },[])

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrcDoc(`
            <html>
                <body>${html}</body>
                <style>${css}</style>
                <script>${js}</script>
            </html>
            `)
            let codeData = {
                'html' : html,
                'css' : css,
                'js' : js
            }
            localStorage.setItem('codeData',JSON.stringify(codeData))
        },400)
        return () => clearTimeout(timeout)
    },[html,css,js])

    return (
        <div className='code-output-container'>
            <iframe
                srcDoc={srcDoc}
                title='output'
                sandbox='allow-scripts'
                frameBorder='0'
                width='100%'
                height='100%'
            />
        </div>
    )
}

export default CodeOutput
