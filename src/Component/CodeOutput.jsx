import React,{useEffect} from 'react'

const CodeOutput = (props) => {

    const {html,css,js,srcDoc,setSrcDoc} = props

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrcDoc(`
            <html>
                <body>${html}</body>
                <style>${css}</style>
                <script>${js}</script>
            </html>
            `)
        },400)
        return () => clearTimeout(timeout)
    },[html,css,js])

    return (
        <div className='code-output-container'>
            <iframe
                srcDoc={srcDoc}
                title='output'
                sandbox='allow-scripts'
                frameBorder='20'
                width='100%'
                height='100%'
            />
        </div>
    )
}

export default CodeOutput
