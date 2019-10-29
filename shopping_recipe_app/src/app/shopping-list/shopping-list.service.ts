import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

@Injectable( {providedIn: 'root'})

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    ingredientSelected = new Subject<number>();

    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];
    
    getIngredients() {
        return this.ingredients.slice();
    }
    
    getIngredient(index: number){
        return this.ingredients[index];
    }

    addIngredients(newIngredients: Ingredient[]) {
        for(let ingredient of newIngredients){
            this.ingredients.push(ingredient);
        }
        this.ingredientsChanged.next(this.ingredients.slice());
    }
   
    addIngredient(newIngredient: Ingredient) {
        this.ingredients.push(newIngredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    editIngredient(ingredientIndex: number, changedIngredient: Ingredient) {
        let currentIngredient = this.ingredients[ingredientIndex];
        currentIngredient.name = changedIngredient.name;
        currentIngredient.amount = changedIngredient.amount;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

}