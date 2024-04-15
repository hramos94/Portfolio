import mongoose from "mongoose";
import { authorSchema } from "./author.js"

const bookSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, require: true },
    publisher: { type: String },
    price: { type: Number },
    pages: { type: Number },
    author: authorSchema
}, { versionKey: false });

const book = mongoose.model("livros", bookSchema); // name of the db is "livros" = book (english)

export default book;