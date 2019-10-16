import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipesService } from '../../recipes.service';
import { ManageOverlayService } from 'src/app/manage-overlay.service';

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
              private recipesService: RecipesService,
              private manageOverlayService: ManageOverlayService) { 
    
  }

  ngOnInit() {
    this.manageOverlayService.overlayClickedSubject
      .subscribe((isOverlayActive) => {
        if(!isOverlayActive) {
          this.status = false;
        }
    });

    this.route.params
      .subscribe((params: Params) => {
        console.log('apple');
        this.id = Number(params.id);
        this.recipe = this.recipesService.getRecipe(this.id);
        // let recipes = recipesService.getRecipes();
        // this.recipe = recipes.find((recipe: Recipe) => {
        //   return recipe.id === this.id;
        // });
        
      });
  }

  openManageRecipe() {
    this.status = !this.status;
    this.manageOverlayService.manageOverlay();
  }
  
}
