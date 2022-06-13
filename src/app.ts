//# 1 - inciando projeto
//console.log("Express + Typescript!!!");

/* 
* 2 - init express 
  #import express from "express";
*/

//# 5 - interfaces do express
import express, { Request, Response, NextFunction } from "express";

const app = express();

//# 3 - Rota com POST
app.use(express.json()); //* ativando um middleware

//* 11 - Middleware para todas as rotas

function showPath(req: Request, res: Response, next: NextFunction) {
  console.log("Path", req.path);
  next();
}
app.use(showPath);

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

//# 7 - router parameters

app.get("/api/product/:id", (req: Request, res: Response) => {
  console.log(req.params);
  const id = req.params.id;
  if (id === "1") {
    const product = {
      id: 1,
      name: "Boné",
      price: 10.99,
    };
    return res.json(product);
  }

  return res.send("Produto não encontrado!!");
});

//* 8 - Rotas Complexas

app.get("/api/product/:id/review/:reviewId", (req: Request, res: Response) => {
  console.log(req.params);
  const productId = req.params.id;
  const reviewId = req.params.reviewId;
  return res.send(`Acessando a review ${reviewId} do produto ${productId}`);
});

//# 9 - router handler

function getUser(req: Request, res: Response) {
  console.log(`Usuário ID: ${req.params.id}`);
  return res.send("Usuário encontrado!!");
}

app.get("/api/user/:id", getUser);

//* 10 - middleware

function checkUser(req: Request, res: Response, next: NextFunction) {
  if (req.params.id === "1") {
    console.log("Pode seguir!!");
    next();
    return;
  }
  console.log("Acesso restrito");
  return res.json({ err: "Acesso restrito" });
}

app.get("/api/user/:id/access", checkUser, (req: Request, res: Response) => {
  return res.json({ msg: "Bem-vindo a área administrativa!" });
});

//# 12 - req e res com generics

app.get("/api/user/:id/details/:name",
  (
    req: Request<{ id: string; name: string }>,
    res: Response<{ status: boolean }>
  ) => {
		console.log(`Id: ${req.params.id}`);
		console.log(`Name: ${req.params.name}`);

		return res.json({status:true})
	}
);

app.listen(3000, () => {
  console.log("Aplicação de Typescript + Express funcionado");
  console.log("http://localhost:3000/");
  console.log("http://localhost:3000/api/product");
  console.log("http://localhost:3000/api/product/check");
  console.log("http://localhost:3000/api/interfaces");
  console.log("http://localhost:3000/api/json");
  console.log("http://localhost:3000/api/product/:id");
  console.log("http://localhost:3000/api/product/:id/review/:reviewId");
  console.log("http://localhost:3000/api/user/:id");
  console.log("http://localhost:3000/api/user/:id/access");
  console.log("http://localhost:3000/api/user/12/details/James");
});
