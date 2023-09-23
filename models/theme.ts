
import mongoose, { Schema, Document } from 'mongoose';

export interface ITheme extends Document {
  themeName: string;
  fontSize: number;
  fontFamily: string;
  inspiration: string;
  colors: string[];
}

const ThemeSchema: Schema = new Schema({
  themeName: { type: String },
  fontSize: { type: Number },
  fontFamily: { type: String },
  inspiration: { type: String },
  colors: { type: [String] }
});

export default mongoose.model<ITheme>('Theme', ThemeSchema);
