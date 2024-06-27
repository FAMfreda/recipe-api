import { Router } from "express";

import { deleteRecipe, getRecipe, getRecipes, patchRecipe, postRecipe } from "../controllers/recipe.js";

//create a router
const recipeRouter = Router();

//define routes
recipeRouter.get('/recipes', getRecipes);

recipeRouter.post('/recipes', postRecipe)

recipeRouter.patch('/recipes/:id',patchRecipe );

recipeRouter.delete('/recipes/:id',deleteRecipe );

recipeRouter.get('/recipes/:Id', getRecipe)


//export router
export default recipeRouter;
