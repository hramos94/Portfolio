import book from "../models/book.js";

class BookController {

    static async listBooks(req, res) {
        const listBook = await book.find({}); // get for mongoose
        res.status(200).json(listBook); // method json to parse moire complex objects 
    };

    static async registerBook(req, res) {
        try {
            const newBook = await book.create(req.body); // post for mongoose
            res.status(201).json({ message: "created successfully", book: newBook });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failed to register book` })
        }
    };
};

export default BookController;