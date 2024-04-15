import express from 'express';
import connectDatabase from './config/dbConnect.js';
import routes from './routes/index.js';

const connection = await connectDatabase();

connection.on("error", (erro) => {
    console.error("erro de connection", erro);
});

connection.once("open", ()=>{
    console.log("connection with db success");
});

const app = express();
routes(app);

app.get("/livros/:id", (req, res) => { //:id é como avisar pro express que é uma variavel
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
});

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("livro cadastrado com sucesso");
});

app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(201).json(livros);
});

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("livro removido!");
});

export default app;

