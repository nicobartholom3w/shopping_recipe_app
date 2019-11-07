import { Injectable } from '@angular/core';
import { RecipesService } from '../recipes/recipes.service';
import { HttpClient } from '@angular/common/http';

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

  }
}
