import { Schema, model } from "mongoose";

interface IBook {
    catalog: string;
    name: string;
    author: string;
    keywords: object[];
    publisher: object[]; 
}

const keywordSchema = new Schema({
    keyword: String,
});

const bookSchema = new Schema<IBook>({
    catalog: String,
    name: String,
    author: String,
    keywords: [keywordSchema],
    publisher: [{ type: Schema.Types.ObjectId, ref: 'Publisher' }]
});

export const Book = model<IBook>('Book', bookSchema, 'books');