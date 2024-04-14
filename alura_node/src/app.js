import express from 'express';
import conectaNaDatabase from './config/dbConnect.js';
import livro from './models/livro.js';

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("erro de conexao", erro);
});

conexao.once("open", ()=>{
    console.log("conexao com o banco feita com sucesso");
});

const app = express();
app.use(express.json()); // middleware, parses strings (from body), to json

app.get("/", (req, res) => {
    res.status(200).send("curso de node.js"); // o metodo send é para dados mais simples, nao objetos tipo livros
});

app.get("/livros", async (req, res) => {
    const listaLivros = await livro.find({});
    res.status(200).json(listaLivros); // metodo json para objetos mais complexos
});

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

