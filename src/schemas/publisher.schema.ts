import { Schema, model } from "mongoose";

interface IPublisher {
    publisherName: string;
}

const publisherSchema = new Schema<IPublisher>({
    publisherName: String
});

export const publishers = model<IPublisher>('publisher', publisherSchema, 'publishers');