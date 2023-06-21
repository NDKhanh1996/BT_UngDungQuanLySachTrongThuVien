import { Schema, model } from "mongoose";

interface IBook {
    catalog: string;
    name: string;
    author: string;
    keywords: object[];
    publishers: object[];
}

const keywordSchema = new Schema({
    keyword: String,
});

const bookSchema = new Schema<IBook>({
    catalog: String,
    name: String,
    author: String,
    keywords: [keywordSchema],
    publishers: [
        { type: Schema.Types.ObjectId, ref: 'Publisher' }
    ]
});

export const book = model<IBook>('Book', bookSchema, 'books');