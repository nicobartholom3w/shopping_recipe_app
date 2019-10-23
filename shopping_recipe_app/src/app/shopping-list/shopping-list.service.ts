import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

@Injectable( {providedIn: 'root'})

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();

    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];
    
    getIngredients() {
        return this.ingredients.slice();
    }
    
    addIngredients(newIngredients: Ingredient[]) {
        for(let ingredient of newIngredients){
            this.ingredients.push(ingredient);
        }
        this.ingredientsChanged.next(this.ingredients.slice());
    }
   

}