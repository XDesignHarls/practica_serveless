const express=require('express');
const app=express();

app.get('*',(req,res)=>{
	console.log('Hola mundo usando serveless');
	res.send({mensaje:'Prueba serveless y express'});

});

module.exports=app;