import book from "../models/book.js";

class BookController {

    // get books - GET
    static async listBooks(req, res) {
        try {
            const listBook = await book.find({}); // get for mongoose
            res.status(200).json(listBook); // method json to parse moire complex objects
        } catch (error) {
            res.status(500).json({ message: `${error.message} - fail to request` });
        }
    };
    //find book by id
    static async listBookById(req, res) {
        try {
            const id = req.params.id;
            const foundBook = await book.findById(id); // get for mongoose
            res.status(200).json(foundBook); // method json to parse moire complex objects
        } catch (error) {
            res.status(500).json({ message: `${error.message} - fail to request the book` });
        }
    };
    // register a book - POST
    static async registerBook(req, res) {
        try {
            const newBook = await book.create(req.body); // post for mongoose
            res.status(201).json({ message: "created successfully", book: newBook });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failed to register book` })
        }
    };

    static async updateBook(req, res) {
        try {
            const id = req.params.id;
            await book.findByIdAndUpdate(id, req.body); // get for mongoose
            res.status(200).json({ message: "book updated!" }); // method json to parse moire complex objects
        } catch (error) {
            res.status(500).json({ message: `${error.message} - fail to update the book` });
        }
    };
    static async deleteBook(req, res) {
        try {
            const id = req.params.id;
            await book.findByIdAndDelete(id); // get for mongoose
            res.status(200).json({ message: "book deleted!" }); // method json to parse moire complex objects
        } catch (error) {
            res.status(500).json({ message: `${error.message} - fail to delete the book` });
        }
    };
};

export default BookController;