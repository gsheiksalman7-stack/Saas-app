import mongoose, { models, Schema } from "mongoose"

const UserSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        default:""
    },
    image: {
        type: String,
        default: ""
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    } as const,
    provider: {
        type: String, // google | github | credentials
        default: "credentials",
    },
    resetPasswordToken: {
        type: String,
    },
    resetPasswordExpiry: {
        type: Number,
    },
},
    { timestamps: true }
)

export const User = models.User || mongoose.model('User', UserSchema)