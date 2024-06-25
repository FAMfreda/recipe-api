import { Router  } from "express";

    //create a router
    const recipeRouter =Router();

    //define routes
    recipeRouter.get('/recipes',(req, res)=>{
        res.json('all rescipes');
    });

    recipeRouter.post('/rescipes',(req, res) =>{
        res.json('rescipe added')
    })

    recipeRouter.patch('/recipes/:id',(req, res) =>{
        res.json(`recipe with ${req.params.id} updated`);
    });

    recipeRouter.delete('/recipes/:id',(req, res) =>{
        res.json(`recipe with ${req.params.id} deleted`);
    });

    

    //export router
    export default recipeRouter;
