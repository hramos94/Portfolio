import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, require: true },
    publisher: { type: String, require: true },
    price: { type: Number },
    pages: { type: Number }
}, { versionKey: false });

const book = mongoose.model("livros", bookSchema); // name of the db is "livros" = book (english)

export default book;