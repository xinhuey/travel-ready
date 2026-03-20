import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import travelRouter from './routes/travel.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors({origin: "http://localhost:5173"}))
app.use(express.json)

app.use('/api', travelRouter)

app.listen(PORT, () =>{
    console.log('Server running on http://localhost:${PORT}')
})