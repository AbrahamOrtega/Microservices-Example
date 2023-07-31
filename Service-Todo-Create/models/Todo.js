import { Schema, model } from 'mongoose';

const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    done: {
        type: Boolean,
        default: false
    },
    user: { // Relación con el modelo User
        type: Schema.Types.ObjectId,
        ref: "Users"
    }
}, {
    timestamps: true,
    versionKey: false
});

export default model("Todo", todoSchema);