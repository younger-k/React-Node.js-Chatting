const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors());

const dbconfig = require('./config/dbconfig')
const conn = dbconfig.init();
dbconfig.connect(conn);

app.get('/chat/list', (req, res) => {
  const sql = 'select * from chatroom';
  conn.query(sql, (err, rows) => {
    if(err) return console.log(err);
    res.send(rows);
  })
})

app.listen(4002);