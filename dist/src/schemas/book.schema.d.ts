import mongoose, { Schema } from "mongoose";
interface IBook {
    catalog: string;
    name: string;
    author: string;
    keywords: object[];
    publisher: {
        type: Schema.Types.ObjectId;
        ref: "publisher";
    }[];
}
export declare const book: mongoose.Model<IBook, {}, {}, {}, mongoose.Document<unknown, {}, IBook> & Omit<IBook & {
    _id: mongoose.Types.ObjectId;
}, never>, any>;
export {};
