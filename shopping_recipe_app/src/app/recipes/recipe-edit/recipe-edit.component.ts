import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipesService,
              private router: Router) { }

  ngOnInit() {
  }

  formInit() {
  // this.recipeForm = new FormGroup({
  //   'name': new FormControl(recipeName, Validators.required),
  //   'imagePath': new FormControl(recipeImagePath, Validators.required),
  //   'description': new FormControl(recipeDescription, Validators.required),
  //   'ingredients': recipeIngredients
  // });
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
