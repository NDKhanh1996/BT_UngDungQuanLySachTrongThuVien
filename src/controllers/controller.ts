import { book } from '../schemas/book.schema';
import { publisher } from '../schemas/publisher.schema';
import { Request, Response } from 'express';

export class Controller {
    static async getBookList(req: Request, res: Response): Promise<any> {
        try {
            const books = await book.find().populate('publisher');
            
            console.log(publisher);
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
            const { catalog, name, author, keyword, publisher } = req.body;
            const newPublisher = new publisher({
                publisherName: publisher
            });
            const newBook = new book({
                catalog: catalog,
                name: name,
                author: author,
                publisher: newPublisher
            });
            newBook.keywords.push({ keyword });
            await newBook.save();
            await newPublisher.save();
            res.redirect('/')
        } catch (error) {
            res.render(error.message);
        }
    }
}