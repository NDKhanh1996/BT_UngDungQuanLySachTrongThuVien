
import {Controller} from '../controllers/controller';
import { Router } from "express";
export const router = Router();

router.get('/', Controller.getBookList);
router.get('/addBook', Controller.showAddBookPage);
router.post('/addBook', Controller.addBook);
router.get('/search', Controller.searchBook);