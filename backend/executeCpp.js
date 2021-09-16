const path = require('path')
const fs = require('fs')
const {exec} = require('child_process')
const { stdout } = require('process')

// output directory made once
const dirOutputs = path.join(__dirname,'outputs')
if(!fs.existsSync(dirOutputs)){
    fs.mkdirSync(dirOutputs,{recursive:true})
}

const executeCpp = (filepath) => {
    // c/documents/app/project/backend.312-3fs-fb1vds-76s0t.cpp
    const jobId = path.basename(filepath).split('.')[0]
    const outputPath = path.join(dirOutputs,`${jobId}`)
    return new Promise((resolve,reject) => {
        exec(`g++ ${filepath} -o ${outputPath} && ${outputPath}.exe`,(error,stdout,stderr) => {
            error && reject({error,stderr})
            stderr && reject(stderr)
            resolve(stdout)
        })
    })
}

module.exports = {executeCpp}