import mongoose, { Schema, Document } from 'mongoose';

interface ITheme extends Document {
  themeName: string;
  fontSize: number;
  fontFamily: string;
  inspiration: string;
  colors: string[];
}

const ThemeSchema: Schema<ITheme> = new Schema({
  themeName: {
    type: String,
  },
  fontSize: {
    type: Number,
  },
  fontFamily: {
    type: String,
  },
  inspiration: {
    type: String,
  },
  colors: {
    type: [String],
  },
});

const Theme = mongoose.model<ITheme>('themes', ThemeSchema);

export default Theme;
