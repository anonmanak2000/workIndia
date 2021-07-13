var express = require('express')

var cors = require('cors')
const app = express();

const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

var db = require('./connection')

app.get('/' , (req , res) => {
var sql = 'Select * from user';
db.query(sql,function(err,rows,fields){
if(err) res.send("Error")
else {
//res.send("Got")
}
})
res.status(200).send("Main HeadStream for Auth Service");
});

/*app.post('/register' , (req , res) => {
    const signup = req.body;

    register.create(signup , (err , data) => {
     if(err) {
         console.log(`OOPS we got an error : ${err}`);
         res.status(500).send(err);
     }
     else{
         res.status(201).send(data);
         //location.reload();
     }
    });

 });



 app.get('/register/details' , (req , res) => {
    //Location.reload(true);
    register.find((err , data) => {
     if(err) {
         console.log(`OOPS we got an error : ${err}`);
         res.status(500).send(err);
     }
     else{
         res.status(201).send(data);
        // window.location.reload();
     }
    });
 });*/

app.listen(port , () => {
    console.log(`Listening on port : ${port}`);
});