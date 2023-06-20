import { Book } from '../schemas/book.schema';
import { Publishers } from '../schemas/publisher.schema';
import { Request, Response } from 'express';

export class Controller {
    static async getBookList(req: Request, res: Response): Promise<any> {
        try {
            const books = await Book.find().populate('publisher');
            res.render('listBook', { books: books });
        } catch (error) {
            res.render(error.message);
        }
    }

    static async showAddBookPage(req: Request, res: Response): Promise<any> {
        try {
            res.render('createBook');
        } catch (error) {
            res.render(error.message);
        }
    }

    static async addBook(req: Request, res: Response): Promise<any> {
        try {
            const { bookCatalog, bookName, bookAuthor, bookKeyword, bookPublisher } = req.body;
            const newPublisher = new Publishers({
                name: bookPublisher
            });
            const newBook = new Book({
                catalog: bookCatalog,
                name: bookName,
                author: bookAuthor,
                keywords: [],
                publisher: newPublisher
            });
            newBook.keywords.push({ keyword: bookKeyword });
            await newBook.save();
            await newPublisher.save();
            res.redirect('/')
        } catch (error) {
            res.render(error.message);
        }
    }

    static async searchBook(req: Request, res: Response): Promise<any> {
        try {
            const searchInput = req.query.search;
            const booksFound = await Book.find({
                $or: [
                    { 'keywords.keyword': searchInput },
                    { 'publisher': { $in: await Publishers.find({ 'name': searchInput }, '_id') } }
                ]
            }).populate('publisher').exec();
            res.render('listBook', { books: booksFound });
        } catch (error) {
            res.render(error.message);
        }
    }
}