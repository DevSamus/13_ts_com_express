//# 1 - inciando projeto
//console.log("Express + Typescript!!!");

/* 
* 2 - init express 
  #import express from "express";
*/

//# 5 - interfaces do express
import express, { Request, Response } from "express";
const app = express();

//# 3 - Rota com POST
app.use(express.json()); //* ativando um middleware

app.get("/", (req, res) => {
  return res.send("Hello Express!");
});

app.post("/api/product", (req, res) => {
  console.log(req.body);

  return res.send("Produto Adicionado!");
});

//* 4 - Rota para todos os verbos
app.all("/api/product/check", (req, res) => {
  if (req.method === "POST") {
    console.log(req.body);

    return res.send("Inseriu algum registro!!!");
  }
  if (req.method === "GET") {
    return res.send("leu algum registro!!!");
  }

  return res.send("Não podemos realizar essa operação ");
});

//# 5 - interfaces do express
app.get("/api/interfaces", (req: Request, res: Response) => {
  res.send("Usando interfaces!");
});

//* 6 - enviando Json

app.get("/api/json", (req: Request, res: Response) => {
  return res.json({
    name: "Shirt",
    price: 30.23,
    color: "Blue",
    sizes: ["P", "M", "M"],
  });
});

app.listen(3000, () => {
  console.log("Aplicação de Typescript + Express funcionado");
  console.log("http://localhost:3000/");
  console.log("http://localhost:3000/api/product");
  console.log("http://localhost:3000/api/product/check");
  console.log("http://localhost:3000/api/interfaces");
  console.log("http://localhost:3000/api/json");
});
