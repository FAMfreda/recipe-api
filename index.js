import express from 'express';
import recipeRouter from './routes/recipes.js';


// create express app
const app = express();

//define route
app.get('/',(req , res)=> {
    res.json('welcome home');
});

app.patch('/',(req, res) => {
    res.json('thanks for correcting this');

});

app.delete('/', (req,res) =>{
     res.json('you deleted this ');

});

app.post ('/login',(req, res) =>{
res.json('login successful');
});

//use route
app.use (recipeRouter);

//listen for incoming request
app.listen(3000, () => {
    console.log('app listening on port 3000')
});