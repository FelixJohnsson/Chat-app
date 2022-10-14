import express from 'express'
import bodyParser from 'body-parser'
import 'dotenv/config'
import axios from 'axios'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'

import print from './print'
import { ResSendObject } from './serverTypes'

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

// ### 404 - FALLBACK ###
app.get('*', function (req, res) {
	const info: ResSendObject = {
		message: 'Not found - Fallback',
		status: 404,
	}
	print.warning(info.message)
	res.sendStatus(info.status).send(info)
})

app.listen(port, () => print.success(`Example app listening on port ${port}`))