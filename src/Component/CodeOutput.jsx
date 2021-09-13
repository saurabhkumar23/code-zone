import React from 'react'

const CodeOutput = () => {

    return (
        <div className='code-output-container'>
            <iframe
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
