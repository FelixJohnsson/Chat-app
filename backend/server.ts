import express from 'express'
import bodyParser from 'body-parser'
import 'dotenv/config'
import axios from 'axios'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'

import print from './print'

const app = express()
express.Router()

app.use(express.static('public'))
	.use(cors())
	.use(cookieParser())
	.use(bodyParser.urlencoded({
		extended: true
	}))
	.use(bodyParser.json())

const port = process.env.PORT

app.listen(port, () => print.success(`Example app listening on port ${port}`))