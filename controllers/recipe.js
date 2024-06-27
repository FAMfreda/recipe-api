
import { RecipeModel } from "../models/recipe.js";

//get the recipe

export const getRecipes = async (req, res) => {
    try {
        // Get all recipes
        const allRecipes = await RecipeModel.create(req.body);
        //return response
        res.json(newRecipe);
    } catch (error) {
        next(error);
    }
}

//post  recipe
export const postRecipe = async (req, res, next) => {
    try {
        //add recipe data
        await RecipeModel.create(req.body);
        //return response
        res.json('recipe added');
    } catch (error) {
        next(error);
    }
}


//patch recipe
export const patchRecipe = (req, res) => {
    res.json(`recipe with ${req.params.id} updated`);
}

//delete recipe

export const deleteRecipe = async (req, res, next) => {
    try {

        // delete recipe by id
        const deletedRecipe = await RecipeModel.findByIdAndDelete(req.params.id);

        //return response

        res.json(deletedRecipe);
    } catch (error) {
        next(error);
    }
}

//      get recipe

export const getRecipe = (req, res) => {
    res.json(`recipe with ${req.params.food} get`)
}