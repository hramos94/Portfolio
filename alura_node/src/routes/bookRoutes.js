import express from "express";
import BookController from "../controllers/livroController.js";

const routes = express.Router();

routes.get("/livros", BookController.listBooks); // the name of db route livraria (lib) -> livros (books)

export default routes;