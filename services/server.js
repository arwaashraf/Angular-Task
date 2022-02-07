const express= require('express');
const bodyParser=require('body-parser');
const cors=require('cors');

const PORT=4000;

const app =express();

app.use(bodyParser.json());
app.use(cors());

//test get method

app.get('/',function(req,res){
    res.send("Hello from node server");
});

app.listen(PORT,function(){
    console.log("Server Running on port",PORT);
})

app.post('/register',function(req,res){
  res.status(200).send(req.body);
})
