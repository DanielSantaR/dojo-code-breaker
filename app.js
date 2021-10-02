var express = require ('express');
var cors = require('cors')
const logger = require("morgan");

const CodeBreaker = require("./code-breaker");

var port = process.env.PORT || 3000;

const codeBreaker= new CodeBreaker()
var app = express();
app.use(cors())
app.use(logger("dev"));

// app.user(express.json())
app.get('/', (req, res)=>{
    tryNumber =req.query.guess
    if(!tryNumber) {
        res.status(400).send("Please send guess param");
    }else{
        result=codeBreaker.guess(tryNumber)
        res.send({result: result});
    }

});

app.patch('/ultrasecret', function (req, res){
    codeBreaker.setDefaultSecret()
    res.status(204).send()
});

app.get('/ultrasecret/admin', function (req, res){
    res.status(200).send(codeBreaker.defaultSecret)
});

app.listen(port, ()=>{
    console.log('Server listen on port ',port);
  });