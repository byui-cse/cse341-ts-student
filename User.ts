import mongoose, { Document, Schema } from 'mongoose';


interface IUser extends Document {
  username: string;
  password: string;
  displayName: string;
  email: string;
  phoneNumber: string;
  currentLocation: string;
  openToNewOpportunities: boolean;
  profileIsPublic: boolean;
  theme_name: string;
  info: {
    email: string;
    phoneNumber: string;
    currentLocation: string;
    openToNewOpportunities: boolean;
    profileIsPublic: boolean;
    theme_name: string;
  };
  profile: {
    experience: object[];
    education: object[];
    projects: object[];
    skills: string[];
    references: object[];
  };
}

// Define the schema
const UserSchema: Schema = new Schema({
  username: { type: String },
  password: { type: String },
  displayName: { type: String },
  email: { type: String },
  phoneNumber: { type: String },
  currentLocation: { type: String },
  openToNewOpportunities: { type: Boolean },
  profileIsPublic: { type: Boolean },
  theme_name: { type: String },
  info: {
    email: { type: String },
    phoneNumber: { type: String },
    currentLocation: { type: String },
    openToNewOpportunities: { type: Boolean },
    profileIsPublic: { type: Boolean },
    theme_name: { type: String }
  },
  profile: {
    experience: { type: [Schema.Types.Mixed] },
    education: { type: [Schema.Types.Mixed] },
    projects: { type: [Schema.Types.Mixed] },
    skills: { type: [String] },
    references: { type: [Schema.Types.Mixed] }
  }
});

// Create the model and export it
export default mongoose.model<IUser>('User', UserSchema);