import Recipe from "../models/recipe.js";

// Create a new recipe
export const createRecipe = async (req, res) => {
    try {
        const recipe = new Recipe(req.body);
        const savedRecipe = await recipe.save();
        res.status(201).json(savedRecipe);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all recipes with pagination
export const getRecipes = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;

    try {
        const recipes = await Recipe.find()
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();

        const total = await Recipe.countDocuments();
        res.json({
            total,
            page: Number(page),
            limit: Number(limit),
            recipes,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a recipe by ID
export const getRecipeById = async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) return res.status(404).json({ message: "Recipe not found" });
        res.json(recipe);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a recipe by ID
export const updateRecipe = async (req, res) => {
    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!updatedRecipe) return res.status(404).json({ message: "Recipe not found" });
        res.json(updatedRecipe);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a recipe by ID
export const deleteRecipe = async (req, res) => {
    try {
        const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
        if (!deletedRecipe) return res.status(404).json({ message: "Recipe not found" });
        res.json({ message: "Recipe deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
