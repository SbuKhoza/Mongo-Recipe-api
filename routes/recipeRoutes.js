import express from "express";
import {
    createRecipe,
    getRecipes,
    getRecipeById,
    updateRecipe,
    deleteRecipe,
} from "../controllers/recipeController.js";
import { protect, authorize } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public route: Get all recipes
router.get("/", getRecipes);

// Public route: Get a recipe by ID
router.get("/:id", getRecipeById);

// Protected routes: Create, update, delete recipes
router.post("/", protect, authorize("admin", "user"), createRecipe);
router.put("/:id", protect, authorize("admin", "user"), updateRecipe);
router.delete("/:id", protect, authorize("admin"), deleteRecipe);

export default router;