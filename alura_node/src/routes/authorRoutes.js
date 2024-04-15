import express from "express";
import AuthorController from "../controllers/authorController.js";

const routes = express.Router();

routes.get("/author", AuthorController.listAuthors); // the name of db route livraria (lib) -> autores (author)
routes.get("/author/:id", AuthorController.listAuthorById);
routes.post("/author/", AuthorController.registerAuthor);
routes.put("/author/:id", AuthorController.updateAuthor);
routes.delete("/author/:id", AuthorController.deleteAuthor);

export default routes;