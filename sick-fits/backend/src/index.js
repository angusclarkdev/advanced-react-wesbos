require('dotenv').config({ path: 'variables.env'})
const createServer = require('./createServer')
const db = require('./db')

const server = createServer()

// TODO Use express to handle cookies (JWT)
// TODO Use express to populate current users

server.start({
  cors: {
    credentials: true,
    origin: process.env.FRONTEND_URLS
  },
}, deets => {
  console.info(`Server is now running on port http://localhost:${deets.port}`)
})