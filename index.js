import express from 'express'
// node --version ^v23.1 required for node:sqlite
import { DatabaseSync } from 'node:sqlite'
import { v4 as uuidv4 } from 'uuid'

const app = express()
const database = new DatabaseSync(':memory:')

const port = process.env.PORT || 3300
app.listen(port, () => console.log(`listening on port ${port}`))

// initial route to verify server started
app.get("/", (req, res) => {res.send("<h2>Hello World!!</h2>")})

