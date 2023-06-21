"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.book = void 0;
const mongoose_1 = require("mongoose");
const keywordSchema = new mongoose_1.Schema({
    keyword: String,
});
const bookSchema = new mongoose_1.Schema({
    catalog: String,
    name: String,
    author: String,
    keywords: [keywordSchema],
    publishers: [
        { type: mongoose_1.Schema.Types.ObjectId, ref: 'Publisher' }
    ]
});
exports.book = (0, mongoose_1.model)('Book', bookSchema, 'books');
//# sourceMappingURL=book.schema.js.map