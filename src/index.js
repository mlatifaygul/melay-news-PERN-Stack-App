 const express = require('express')
 const app = express()
 const {
     PORT
 } = require('./constants')
 const api = require('./routes')

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