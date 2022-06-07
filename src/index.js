 const express = require('express')
 const app = express()
 const {
     PORT
 } = require('./constants')
 const api = require('./routes')
 var bodyParser = require('body-parser');


    app.use(bodyParser.urlencoded({extended:true}))
    app.use(bodyParser.json());
    app.use(express.json());
    app.use('/', api)

 //app start
 const appStart = () => {
     try {
         app.listen(PORT, () => {
             console.log(`The app is running at http://localhost:${PORT}`)
         })
     } catch (error) {
         console.log(`Error: ${error.message}`)
     }
 }
 appStart()