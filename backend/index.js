const express = require('express')
const {generateFile} = require('./generateFile')
const {executeCpp} = require('./executeCpp')
const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// get code and language
// default language will be considered 'cpp' but empty code is an error
app.post('/run',async function(req,res){
    const {language = 'cpp',code} = req.body
    if(code  === undefined){
        return res.status(400).json({success: false, error: 'Empty code body!'})
    }
    try{
        const filePath = await generateFile(language,code)
        const output = await executeCpp(filePath)
        return res.json({filePath,output})
    }
    catch(error){
        return res.status(500).json({error})
    }
})

// need to generate a cpp file with content from the request
// we need to run the file and send the response

app.listen('3011',() => console.log('server started on port 3011'))