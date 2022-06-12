//# 1 - inciando projeto 
//console.log("Express + Typescript!!!");

//* 2 - init express

import express from "express";

const app = express()
app.get("/",(req, res)=>{
	return res.send("Hello Express!")
})
app.listen(3000, ()=> {
	console.log("Aplicação de Typescript + Express funcionado");
	console.log("http://localhost:3000/");
	
	
})