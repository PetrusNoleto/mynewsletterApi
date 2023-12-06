import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { routeNewEmail } from './routes/postEmail'


const $api = express()
$api.use(bodyParser.json())
$api.use(cors())
$api.use(routeNewEmail)


const PORT = 80;
$api.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});