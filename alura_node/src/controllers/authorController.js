import { author } from "../models/author.js";

class AuthorController {

    // get authors - GET
    static async listAuthors(req, res) {
        try {
            const listBook = await author.find({}); // get for mongoose
            res.status(200).json(listBook); // method json to parse moire complex objects
        } catch (error) {
            res.status(500).json({ message: `${error.message} - fail to request` });
        }
    };
    //find author by id
    static async listAuthorById(req, res) {
        try {
            const id = req.params.id;
            const foundBook = await author.findById(id); // get for mongoose
            res.status(200).json(foundBook); // method json to parse moire complex objects
        } catch (error) {
            res.status(500).json({ message: `${error.message} - fail to request the author` });
        }
    };
    // register an author - POST
    static async registerAuthor(req, res) {
        try {
            const newBook = await author.create(req.body); // post for mongoose
            res.status(201).json({ message: "created successfully", author: newBook });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failed to register author` })
        }
    };
    // update an author - PUT
    static async updateAuthor(req, res) {
        try {
            const id = req.params.id;
            await author.findByIdAndUpdate(id, req.body); // get for mongoose
            res.status(200).json({ message: "author updated!" }); // method json to parse moire complex objects
        } catch (error) {
            res.status(500).json({ message: `${error.message} - fail to update the author` });
        }
    };
    // delete an author - DELETE
    static async deleteAuthor(req, res) {
        try {
            const id = req.params.id;
            await author.findByIdAndDelete(id); // get for mongoose
            res.status(200).json({ message: "author deleted!" }); // method json to parse moire complex objects
        } catch (error) {
            res.status(500).json({ message: `${error.message} - fail to delete the author` });
        }
    };
};

export default AuthorController;