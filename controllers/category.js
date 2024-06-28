import { CategoryModel } from "../models/category.js";

export const getCategories = async (req, res, next) => {
    try {

        //get all categoris from database
        const allCategories = await CategoryModel.find();
        //return response
        res.status(200).json(allCategories);
    } catch (error) {
        next(error)
    }
}
//post a category
export const postCategory = async (req, res, next) => {
    try {
        //add category to database 
        const newCategory = await CategoryModel.create(req.body);
        // return response
        res.status(201).json(allCategories);
    } catch (error) {
        next(error)
    }
}

//delete category
export const deleteCategory = async (req, res, next) => {
    try {
        //delete categoryby id
    } catch (error) {
        next(error)
        {
            next(error)
        }
    }
}
