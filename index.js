import express from 'express';
import mongoose from "mongoose"
import recipeRouter from './routes/recipe.js';
import categoryRouter from './routes/category.js';


// connect to database
await mongoose.connect(process.env.MONGO_URL)

// create express app
const app = express();

//apply middlewares
app.use(express.json());

//use route
app.use (recipeRouter);
app.use(categoryRouter);

//listen for incoming request

const port =process.env.PORT || 3000
app.listen(port, () => {
    console.log(`app listEning on port ${port}`)
});