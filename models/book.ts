import mongoose, { Schema, Document } from 'mongoose';

interface IBook extends Document {
    id: string;
    title: string;
    author: string;
    rating: number;
    description: string;
    imageUrl: string;
    dateRead: Date;
}

const bookSchema: Schema = new Schema({
    id: String,
    title: String,
    author: String,
    rating: Number,
    description: String,
    imageUrl: String,
    dateRead: Date
});

export default mongoose.model<IBook>('Book', bookSchema);
