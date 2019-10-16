import { Injectable, EventEmitter } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";

@Injectable( {providedIn: 'root'})

export class RecipesService {
    recipeSelected = new EventEmitter<Recipe>();

    recipes: Recipe [] = [
        new Recipe(1, 'A Test Recipe', 'This is simply a test', 'assets/img/recipe-icon.svg', 
        [
            new Ingredient('Meat', 10),
            new Ingredient('Cheeses', 22)
        ]),
        new Recipe(2, 'Another Test Recipe', 'This is another test recipe', 'assets/img/recipe-icon.svg',
        [
            new Ingredient('Apples', 36),
            new Ingredient('Kabocha', 57)
        ]),
        new Recipe(3, 'Delicious Recipe', 'Splendorous sweets potats', 'assets/img/recipe-icon.svg',
        [
            new Ingredient('sweets potatos', 52),
            new Ingredient('onions', 200)
        ])
      ];
    
    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id: number) {
        return this.recipes[id - 1];
    }
}