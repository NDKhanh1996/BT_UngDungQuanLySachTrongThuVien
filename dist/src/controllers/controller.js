"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
const publisher_schema_1 = require("../schemas/publisher.schema");
const book_schema_1 = require("../schemas/book.schema");
class Controller {
    static async getBookList(req, res) {
        try {
            const books = await book_schema_1.book.find({}).populate('publishers');
            console.log(books[1].publishers);
            res.render('listBook', { books: books });
        }
        catch (error) {
            res.render(error.message);
        }
    }
    static async showAddBookPage(req, res) {
        try {
            let authors = await publisher_schema_1.publisher.find({});
            res.render('createBook', { authors });
        }
        catch (error) {
            res.render(error.message);
        }
    }
    static async addBook(req, res) {
        try {
            const { catalog, name, author, keyword, publisher_id } = req.body;
            const publisherChose = await publisher_schema_1.publisher.findOne({ _id: publisher_id });
            const newBook = new book_schema_1.book({
                catalog: catalog,
                name: name,
                author: author,
                publishers: []
            });
            newBook.keywords.push({ keyword });
            newBook.publishers.push(publisherChose);
            await newBook.save();
            res.redirect('/');
        }
        catch (error) {
            res.render(error.message);
        }
    }
}
exports.Controller = Controller;
//# sourceMappingURL=controller.js.map