import express from "express";
import books from "./booksRoutes.js";
import author from "./authorRoutes.js"

const routes = (app) => {
    app.route("/").get((req,res)=>res.status(200).send("Node.js"));

    app.use(express.json(), books, author); // middleware, parses strings (from body), to json
};

export default routes;