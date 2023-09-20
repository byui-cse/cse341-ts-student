import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IUser extends Document {
  username: string;
  password: string;
  displayName: string;
  email: string;
  phoneNumber: string;
  currentLocation: string;
  openToNewOpportunities: boolean;
  profileIsPublic: boolean;
  theme_name: string;
  profile: {
    experience: any[];
    education: any[];
    projects: any[];
    skills: string[];
    references: any[];
  };
}

const userSchema: Schema<IUser> = new Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  displayName: {
    type: String,
  },
  email: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  currentLocation: {
    type: String,
  },
  openToNewOpportunities: {
    type: Boolean,
  },
  profileIsPublic: {
    type: Boolean,
  },
  theme_name: {
    type: String,
  },
  profile: {
    experience: {
      type: [mongoose.SchemaTypes.Mixed],
    },
    education: {
      type: [mongoose.SchemaTypes.Mixed],
    },
    projects: {
      type: [mongoose.SchemaTypes.Mixed],
    },
    skills: {
      type: [String],
    },
    references: {
      type: [mongoose.SchemaTypes.Mixed],
    },
  },
});

const User: Model<IUser> = mongoose.model('users', userSchema);

export default User;
