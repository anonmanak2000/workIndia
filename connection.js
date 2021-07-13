var mysql = require('mysql')

var connection = mysql.createConnection({
host:'localhost',
user:'root',
password:'',
database:'notesapp'
});

connection.connect(function(err){
if(err) console.log("Some Error!!")
else console.log('connected')
});

module.exports = connection