import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
    firstname: string;
    lastname: string;
    email: string;
    age: number;
}
    
const userSchema: Schema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    age: Number
});

export default mongoose.model<IUser>('User', userSchema);
