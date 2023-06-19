"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
const book_schema_1 = require("../schemas/book.schema");
const publisher_schema_1 = require("../schemas/publisher.schema");
class Controller {
    static async getBookList(req, res) {
        try {
            const books = await book_schema_1.book.find();
            res.render('listBook', { books: books });
        }
        catch (error) {
            res.render(error.message);
        }
    }
    static async showAddBookPage(req, res) {
        try {
            res.render('createBook');
        }
        catch (error) {
            res.render(error.message);
        }
    }
    static async addBook(req, res) {
        try {
            const { catalog, name, author, keyword, publisher } = req.body;
            const newPublisher = new publisher_schema_1.publishers({
                publisherName: publisher
            });
            const newBook = new book_schema_1.book({
                catalog: catalog,
                name: name,
                author: author,
                publisher: newPublisher
            });
            newBook.keywords.push({ keyword });
            await newBook.save();
            await newPublisher.save();
            console.log(publisher);
            console.log(newPublisher);
            console.log(newBook.publisher);
            res.redirect('/');
        }
        catch (error) {
            res.render(error.message);
        }
    }
}
exports.Controller = Controller;
//# sourceMappingURL=controller.js.map