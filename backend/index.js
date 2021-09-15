const express = require('express')
const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// get code and language
// default language will be considered 'cpp' but empty code is an error
app.post('/run',(req,res) => {
    const {language = 'cpp',code} = req.body
    if(code  === undefined){
        return res.status(400).json({success: false, error: 'Empty code body!'})
    }
    return res.json({success: true, message: 'data received successfully!'})
})

// need to generate a cpp file with content from the request
// we need to run the file and send the response

app.listen('3011',() => console.log('server started on port 3011'))