const mysql = require('mysql');
const db_info = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'renebaebae',
  database: 'mychat'
}

module.exports = {
  init: function() {
    return mysql.createConnection(db_info);
  },
  
  connect: function(conn) {
    conn.connect(err => {
      if(err) return console.log("mysql connection fail : " + err);
      console.log('mysql connection success');
    })
  }
}
