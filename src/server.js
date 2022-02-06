const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')

app.use('/static', express.static(__dirname, '../dist'))

app.get('/', (req, res) => {
    const pathToHtmlFile = path.resolve(__dirname, '../dist/cat.html')
    const contentFromHtnlFile = fs.readFileSync(pathToHtmlFile, 'utf-8')
    res.send(contentFromHtnlFile)
})

app.listen(3000, () => {
    console.log('Application is running at the port 3000')
})