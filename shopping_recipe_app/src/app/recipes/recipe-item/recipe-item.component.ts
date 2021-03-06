import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
// creates class on component that can be altered in parent component
  @HostBinding('class.recipe-item-class') recipeItemClass = true;

  @Input() recipe: Recipe;
  @Input() index: number;

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
   
  }

}
