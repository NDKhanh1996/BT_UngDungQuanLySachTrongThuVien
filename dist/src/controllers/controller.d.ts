import { Request, Response } from 'express';
export declare class Controller {
    static getBookList(req: Request, res: Response): Promise<any>;
    static showAddBookPage(req: Request, res: Response): Promise<any>;
    static addBook(req: Request, res: Response): Promise<any>;
    static searchBook(req: Request, res: Response): Promise<any>;
}
