import { publisher } from '../schemas/publisher.schema';
import { book } from '../schemas/book.schema';
import { Request, Response } from 'express';

export class Controller {
    static async getBookList(req: Request, res: Response): Promise<any> {
        try {
            const books = await book.find({}).populate('publishers');
            res.render('listBook', { books: books });
        } catch (error) {
            res.render(error.message);
        }
    }
    static async showAddBookPage(req: Request, res: Response): Promise<any> {
        try {
            let authors = await publisher.find({})
            res.render('createBook', { authors});
        } catch (error) {
            res.render(error.message);
        }
    }
    static async addBook(req: Request, res: Response): Promise<any> {
        try {
            const { catalog, name, author, keyword, publisher_id } = req.body;
            const publisherChose = await publisher.findOne({_id: publisher_id})
            const newBook = new book({
                catalog: catalog,
                name: name,
                author: author,
                publishers: []
            });
            newBook.keywords.push({ keyword });
            newBook.publishers.push(publisherChose);
            await newBook.save();
            res.redirect('/')
        } catch (error) {
            res.render(error.message);
        }
    }
}