import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  // @Input() recipe: Recipe[];
  status: boolean = false;
  id: number;
  recipe: Recipe;

  constructor(private route: ActivatedRoute,
              private recipesService: RecipesService) { 
    this.route.params.subscribe((params) => {
      this.id = Number(params.id);
      let recipes = recipesService.getRecipes();
      this.recipe = recipes.find((recipe: Recipe) => {
        return recipe.id === this.id;
      });
      
    });
  }

  ngOnInit() {
  }

  openManageRecipe() {
    this.status = !this.status;
  }
  
}
