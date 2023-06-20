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
            const searchInput = req.query;
            const books = await Book.find().populate('publisher');
            let booksFound = [];
            books.forEach((book) => {
                book.keywords.forEach((keyword) => {
                    //@ts-ignore
                    if (keyword.keyword == searchInput.search) booksFound.push(book);
                })

                book.publisher.forEach((publisher) => {
                    //@ts-ignore
                    if (publisher.name == searchInput.search) booksFound.push(book);
                })
            });
            res.render('listBook', { books: booksFound });
        } catch (error) {
            res.render(error.message);
        }
    }
}