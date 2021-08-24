import express from 'express'
import cors from 'cors'
import services from './services/index.js'
import createDefaultTable from './scripts/create-tables.js'

const server = express()


server.use(express.json())
server.use(cors())

const {PORT} = process.env

server.use("/", services)

server.listen(PORT, async () => {
    await createDefaultTable()
    console.log(`Server is running on port: ${PORT}`)
})
server.on("error", (error) => console.log(`Server is failed to start: ${error}`))