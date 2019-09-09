import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";

@Injectable( {providedIn: 'root'})

export class RecipesService {
    recipes: Recipe [] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'assets/img/recipe-icon.svg'),
        new Recipe('Another Test Recipe', 'This is another test recipe', 'assets/img/recipe-icon.svg')
      ];
    
    getRecipes(){
        return this.recipes.slice();
    }
}