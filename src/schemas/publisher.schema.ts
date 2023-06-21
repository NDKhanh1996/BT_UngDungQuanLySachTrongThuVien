import { Schema, model } from "mongoose";

interface IPublisher {
    name: string;
}

const publisherSchema = new Schema<IPublisher>({
    name: String
});

export const Publishers = model<IPublisher>('Publisher', publisherSchema, 'publishers');