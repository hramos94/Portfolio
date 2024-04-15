import express from "express";
import books from "./bookRoutes.js";

const routes = (app) => {
    app.route("/").get((req,res)=>res.status(200).send("Node.js"));

    app.use(express.json(), books); // middleware, parses strings (from body), to json
};

export default routes;