import { Schema, model } from "mongoose";

interface IPublisher {
    Name: string;
}

const publisherSchema = new Schema<IPublisher>({
    Name: String
});

export const publisher = model<IPublisher>('Publisher', publisherSchema, 'publishers');