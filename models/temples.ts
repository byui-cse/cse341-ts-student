import { Model, Schema, Mongoose } from 'mongoose';

interface Temple {
  temple_id: number;
  name: string;
  location: string;
  dedicated: string;
  additionalInfo: boolean;
}

export const createTemplesModel = (mongoose: Mongoose): Model<Temple> => {
  const TempleSchema = new Schema<Temple>(
    {
      temple_id: Number,
      name: String,
      location: String,
      dedicated: String,
      additionalInfo: Boolean,
    },
    { timestamps: true }
  );

  return mongoose.model<Temple>('temples', TempleSchema);
};
