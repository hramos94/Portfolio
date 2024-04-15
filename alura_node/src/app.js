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

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("livro removido!");
});

export default app;

