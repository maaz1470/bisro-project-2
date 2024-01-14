const express = require('express')
const cors = require('cors')
const app = express();
require('dotenv').config()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello Something')
})

app.listen(port, () => {
    console.log(`Server is Running on ${port}`)
})