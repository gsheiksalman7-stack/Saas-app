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
        required: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    } as const,
},
    { timestamps: true }
)

export const User=models.User||mongoose.model('User',UserSchema)