

const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const verifyJWT = require('./verifyJWT');
const cookieParser=require('cookie-parser');
app.use(bodyParser.json());
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:false}))
app.use('/register', require('./register'))


app.use('/auth', require('./auth'));
app.use('/refresh', require('./refresh'));
app.use('/logOut', require('./logOut'));




app.use(verifyJWT);
app.use('/employees', require('./employees'));


const port=3500;




















app.listen(port, ()=>{

    console.log(`server running on port ${port}`)

})


