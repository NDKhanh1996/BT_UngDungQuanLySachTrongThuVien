"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
const book_schema_1 = require("../schemas/book.schema");
const publisher_schema_1 = require("../schemas/publisher.schema");
class Controller {
    static async getBookList(req, res) {
        try {
            const books = await book_schema_1.Book.find().populate('publisher');
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
            const { bookCatalog, bookName, bookAuthor, bookKeyword, bookPublisher } = req.body;
            const newPublisher = new publisher_schema_1.Publishers({
                name: bookPublisher
            });
            const newBook = new book_schema_1.Book({
                catalog: bookCatalog,
                name: bookName,
                author: bookAuthor,
                keywords: [],
                publisher: newPublisher
            });
            newBook.keywords.push({ keyword: bookKeyword });
            await newBook.save();
            await newPublisher.save();
            res.redirect('/');
        }
        catch (error) {
            res.render(error.message);
        }
    }
    static async searchBook(req, res) {
        try {
            const searchInput = req.query.search;
            const booksFound = await book_schema_1.Book.find({
                $or: [
                    { 'keywords.keyword': searchInput },
                    { 'publisher': { $in: await publisher_schema_1.Publishers.find({ 'name': searchInput }, '_id') } }
                ]
            }).populate('publisher').exec();
            res.render('listBook', { books: booksFound });
        }
        catch (error) {
            res.render(error.message);
        }
    }
}
exports.Controller = Controller;
//# sourceMappingURL=controller.js.map