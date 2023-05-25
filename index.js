const express = require('express')
const app = express()
const port = 4551

app.use(express.static('dist'))

app.listen(port, () => {
    console.log('express server started')
})