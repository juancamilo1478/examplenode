import express, { response } from "express"
import { pool } from "./db.js"
import { PORT } from "./config.js"
const app=express()

app.get('/',(req,res)=>{
    res.json("p")
})
app.get('/ping',async(req,res)=>{
  const results= await pool.query(`SELECT "HELLO WORD" as RESULT`);
  console.log(results)
    res.json(results[0])
})

app.get('/create',async(req,res)=>{
 const [rows] =  await pool.query('INSERT INTO users(name) VALUES("camilo")')
 res.json(rows)
})
app.get('/user',async(req,res)=>{
    const response= await pool.query('SELECT * FROM users')
    res.json(response)
})


app.listen(PORT)
console.log('listen on port ',PORT)