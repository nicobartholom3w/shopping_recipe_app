import { Injectable, EventEmitter } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable( {providedIn: 'root'})

export class RecipesService {
    // recipeSelected = new EventEmitter<Recipe>();
    recipesChanged = new Subject<Recipe[]>();

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
    
    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id: number) {
        return this.recipes[id - 1];
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }   

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }
}