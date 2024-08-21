import mysql from 'mysql2/promise'
import {config} from 'dotenv'

config()

const pool = mysql.createPool({
host: process.env.host,
user: process.env.user,
password: process.env.password,
database: process.env.database
})

export {pool}