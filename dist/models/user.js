"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
// Define the schema
const UserSchema = new mongoose_1.Schema({
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
        experience: { type: [mongoose_1.Schema.Types.Mixed] },
        education: { type: [mongoose_1.Schema.Types.Mixed] },
        projects: { type: [mongoose_1.Schema.Types.Mixed] },
        skills: { type: [String] },
        references: { type: [mongoose_1.Schema.Types.Mixed] }
    }
});
// Create the model and export it
exports.default = mongoose_1.default.model('User', UserSchema);
