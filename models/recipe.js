import { Schema, model, Types } from "mongoose";
import normalize from "normalize-mongoose";

const recipeSchema = new Schema({
    name: { type: String, unique: true, required: true },
    categoryId: { type: Types.ObjectId, ref: 'category', required: true },
    description: { type: String, required: true },
    ingredients: [{ type: String, require: true }],
    image: { type: String, required: true },
    favorite:{type:Boolean, default:false}
}, {

    //automatically create the createdtime
    timestamps: true

});

recipeSchema.plugin(normalize);

export const RecipeModel = model('Recipe', recipeSchema);