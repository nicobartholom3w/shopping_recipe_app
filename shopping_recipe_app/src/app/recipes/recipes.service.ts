import { Injectable, EventEmitter } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable( {providedIn: 'root'})

export class RecipesService {
    recipeSelected = new Subject<Recipe>();
    recipesChanged = new Subject<Recipe[]>();

    recipes: Recipe [] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'assets/img/recipe-icon.svg', 
        [
            new Ingredient('Meat', 10),
            new Ingredient('Cheeses', 22)
        ]),
        new Recipe('Another Test Recipe', 'This is another test recipe', 'assets/img/recipe-icon.svg',
        [
            new Ingredient('Apples', 36),
            new Ingredient('Kabocha', 57)
        ]),
        new Recipe('alskdjf;laskdjf;alskdjf;laksjdf;laksjdf;lakjsdf;lkajsd;flkjasd;lfkjas;ldfkjas;ldfkjsal;dfjk', 'alskdjf;laskdjf;alskdjf;laksjdf;laksjdf;lakjsdf;lkajsd;flkjasd;lfkjas;ldfkjas;ldfkjsal;dfjk', 'alskdjf;laskdjf;alskdjf;laksjdf;laksjdf;lakjsdf;lkajsd;flkjasd;lfkjas;ldfkjas;ldfkjsal;dfjk',
        [
            new Ingredient('sweets potats', 52),
            new Ingredient('onions', 200)
        ]),
        new Recipe('Delicious Recipe', 'Splendorous sweets potats', 'assets/img/recipe-icon.svg',
        [
            new Ingredient('sweets potats', 52),
            new Ingredient('onions', 200)
        ])
       
      ];
    
    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
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

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}