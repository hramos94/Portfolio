import express from "express";
import BookController from "../controllers/bookController.js";

const routes = express.Router();

routes.get("/livros", BookController.listBooks); // the name of db route livraria (lib) -> livros (books)
routes.get("/livros/busca", BookController.searchBookByPublisher)
routes.get("/livros/:id", BookController.listBookById);
routes.post("/livros/", BookController.registerBook);
routes.put("/livros/:id", BookController.updateBook);
routes.delete("/livros/:id", BookController.deleteBook);

export default routes;