import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipesService } from '../../recipes.service';
import { ManageOverlayService } from 'src/app/manage-overlay.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  status: boolean = false;
  id: number;
  index: number;
  recipe: Recipe;


  constructor(private route: ActivatedRoute,
              private router: Router,
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
        this.id = Number(params.id);
        this.index = this.id - 1;
        this.recipe = this.recipesService.getRecipe(this.index);
      });
  }

  openManageRecipe() {
    this.status = !this.status;
    this.manageOverlayService.manageOverlay();
  }

  editRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
  
  addToShoppingList() {
    this.recipesService.addIngredientsToShoppingList(this.recipe.ingredients);
    this.router.navigate(['shopping-list']);
  }

  onDeleteRecipe() {
    // TODO: ADD CONFIRMATION POPUP
    this.recipesService.deleteRecipe(this.index);
    this.router.navigate(['recipes']);
  }
}
