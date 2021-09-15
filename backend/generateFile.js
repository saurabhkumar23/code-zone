const fs = require('fs')
const path = require('path')
const {v4: uuid} = require('uuid')

// codes directory made once
const dirCodes = path.join(__dirname,'codes')
if(!fs.existsSync(dirCodes)){
    fs.mkdirSync(dirCodes,{recursive:true})
}

// generate file
const generateFile = (format,code) => {
    // create file as jfj12h4u12guhhin57.cpp and store in on dirCodes folder
    const jobId = uuid()
    const filename = `${jobId}${format}`
    const filePath = path.join(dirCodes,filename)
    await fs.writeFileSync(filePath,content)
    return filePath
}

module.exports = {generateFile}
