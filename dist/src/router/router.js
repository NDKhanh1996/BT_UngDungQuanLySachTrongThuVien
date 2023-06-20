"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const controller_1 = require("../controllers/controller");
const express_1 = require("express");
exports.router = (0, express_1.Router)();
exports.router.get('/', controller_1.Controller.getBookList);
exports.router.get('/addBook', controller_1.Controller.showAddBookPage);
exports.router.post('/addBook', controller_1.Controller.addBook);
exports.router.get('/search', controller_1.Controller.searchBook);
//# sourceMappingURL=router.js.map