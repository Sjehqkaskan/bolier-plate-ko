const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Alt:Ehdgus1247%40@cluster0.swc0jnh.mongodb.net/?retryWrites=true&w=majority').then(() => console.log('MongoDB Connect...')).catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})