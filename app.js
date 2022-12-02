const express = require('express');
const path = require('path')
const bodyParser = require('body-parser')
const router = require('./routes')
const cors = require('cors')


const app = express()
const port = 3000;

const corsOptions = { origin: "https://tdbookings-4dc04.web.app" }

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'public')))


app.use(router)


app.listen(port, () => console.log(`Server is running on port ${port}`))