import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { RecipesService } from '../recipes/recipes.service';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})

export class DataStorageService {

  constructor(
    private http: HttpClient,
    private recipeService: RecipesService,
    
  ) { }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(
        'https://recipe-book-1b455.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchRecipes() {
    return this.http  
      .get<Recipe[]>(
        'https://recipe-book-1b455.firebaseio.com/recipes.json'
      )
      .pipe(
        map(recipes => {
          return recipes.map(recipe => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : []
            };
          });
        }),
        tap(recipes => {
          this.recipeService.setRecipes(recipes);
        })
      )
  }
}
