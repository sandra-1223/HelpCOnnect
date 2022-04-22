//const e =require('express');
const express=require('express');

const mysql = require('mysql2');
const bodyParser = require('body-parser');


var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Freakin@104',
    database:'helpconnect'
});
connection.connect((err)=>{
    if(!err)
    console.log('DB Connected')
    else
    console.log('DB not connected')
    //console.log(err)
    //throw err;
});

var app = express();
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: false }));
app.listen(8000,()=>{
    console.log('server started');
});

app.get('/', (req, res) => {
  res.sendFile('register.html', { root: __dirname})
})

app.post('/submit',(req,res)=>{
    var mail=req.body.email;
    console.log(mail)
    var mail1=mail.slice(-10,)
      if(req.body.ngo_name=="" || req.body.email=="" || req.body.founder=="" || req.body.start_date=="" || req.body.phone=="" || req.body.address=="" || req.body.poc_name=="" || req.body.poc_no || req.body.password1){
        const respond="Please enter all the details";
        res.render('one',{respond})
      }
      else if(mail1!="@gmail.com"){
        const respond="Enter email adress of the format example@gmail.com";
        res.render('one',{respond})
      }
      else if(req.body.founder==""){
        const respond="Please fill the fouders name";
        res.render('one',{respond})
      }
      else if(req.body.start_date==""){
        const respond="Enter the foundation date";
        res.render('one',{respond})
      }
      else if(req.body.phone.length!=10){
        const respond="Enter a valid 10 digit contact number";
        res.render('one',{respond})
      }
      else if(req.body.address==""){
        const respond="Enter your address";
        res.render('one',{respond})
      }
      else if(req.body.poc_name==""){
        const respond="Enter point of contact name";
        res.render('one',{respond})
      }
      else if(req.body.poc_no.length!=10){
        const respond="Enter a valid 10 digit contact number";
        res.render('one',{respond})
      }
      else if(req.body.password1==""){
        const respond="Enter a valid password";
        res.render('one',{respond})
      }
      else if(!req.body.check){
        const respond="please tick the check box";
        res.render('one',{respond})
      }
      else{
        var sql = "insert into ngo(ngo_name,email,founder_name,ngo_start_date,phone_no,address,poc_name,poc_number,password) values('', '"+ req.body.ngo_name+"','"+ req.body.email+"','"+ req.body.founder+"','"+ req.body.start_date+"','"+ req.body.phone+"','"+ req.body.address+"','"+ req.body.poc_name+"','"+ req.body.poc_no+"','"+req.body.password1+"')";
        connection.query(sql, function (err) {
        if (err) throw err
        res.render('two', { root: __dirname})
      })
      }
  })