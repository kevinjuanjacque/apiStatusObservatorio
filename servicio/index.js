const express=require('express');
const morgan= require('morgan');
const router = require('./router/router');
const app=express();


app.set('port',process.env.PORT || 4000);


app.use(morgan('dev'));

app.use(express.json());

app.use(router);

app.listen(app.get('port'),()=>{
    console.log('server on port ', app.get('port'));
});