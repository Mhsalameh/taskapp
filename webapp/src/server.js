"use strict";

const express = require("express");
const app = express();
const pg = require('pg')
const Pool = pg.Pool;
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config(0)
console.log(process.env.POSTGRES_PASSWORD)
console.log
const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: 'db',
    database: 'postgres',
    password: process.env.POSTGRES_PASSWORD,
    port: 5432,
  })

app.use(express.json())
app.use(cors())

app.get('/', async (req,res)=>{
    let sql = `INSERT INTO users(name, role) VALUES($1, $2) RETURNING *;`;
    let values = ['ahmad', 'devops'];
    try {
        await pool.query(`
        CREATE TABLE IF NOT EXISTS "users" (
            "id" SERIAL,
            "name" VARCHAR(100) NOT NULL,
            "role" VARCHAR(15) NOT NULL,
            PRIMARY KEY ("id")
        );`);
        console.log('here?')
        await pool.query(sql,values)
        let data = await pool.query('SELECT * FROM users;')
        
        console.log(data);
        res.json(data);
    } catch (error) {
        console.log(error)
        res.json('nothing')
    }
})



// client.connect().then(() => {
    app.listen(3000, () => {
        console.log(`Listen to port 3000`);
    });
// });
