const express = require('express');
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())



const db = mysql.createConnection({
    host: "localhost",
    user: 'yakub',
    password: '12345',
    database: 'crud',
    port:3307
})

db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err);
    } else {
        console.log('Database connected to mySQL server succeeded.');
    }
});




    


app.get('/', (re, res)=> {
    return res.json("From Backend side")
})

app.get('/users', (req, res)=> {
    const sql = "SELECT * FROM users";
    db.query(sql, (err, data)=> {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(6062, ()=> {
    console.log("listening");
})


