import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
    },
    ingredients: {
        type: [String],
        required: [true, "Ingredients are required"],
    },
    instructions: {
        type: String,
        required: [true, "Instructions are required"],
    },
    servings: {
        type: Number,
        default: 1,
    },
    prepTime: {
        type: Number,
        required: [true, "Preparation time is required"],
    },
}, { timestamps: true });

export default mongoose.model("Recipe", recipeSchema);
