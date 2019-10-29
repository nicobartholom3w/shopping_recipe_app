import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  recipeForm: FormGroup;
  id: number;
  index: number;
  editMode = false;
  areIngredients = false;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipesService,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = Number(params['id']);
          this.index = this.id - 1;
          this.editMode = params['id'] != null;
          this.formInit();
        }
      )
  }

  formInit() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if(this.editMode) {
      const recipe = this.recipeService.getRecipe(this.index);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe['ingredients']) {
        for(let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          );
        }
        this.areIngredients = true;
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients
    });
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'ingredientName': new FormControl(null, Validators.required),
        'ingredientAmount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    )
    this.areIngredients = true;
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onSubmit() {
    if(this.editMode) {
      this.recipeService.updateRecipe(this.index, this.recipeForm.value);
    }
    else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.onCancel();
  }

  onDeleteIngredient(ingredientIndex: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(ingredientIndex);
    // this.recipeService.removeIngredient(this.id, ingredientIndex);
  }
}
