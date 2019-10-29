import { Component, OnInit, ViewChild } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('f', { static: false }) slForm: NgForm;
  editMode = false;
  editedIngredientIndex: number;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.shoppingListService.ingredientSelected
      .subscribe((ingredientIndex: number) => {
        this.editMode = true;
        this.editedIngredientIndex = ingredientIndex;
        let selectedIngredient = this.shoppingListService.getIngredient(ingredientIndex);
        this.slForm.setValue({
          name: selectedIngredient.name,
          amount: selectedIngredient.amount
        })
      });
  }

  onSubmit(form: NgForm) {
    let value = form.value;
    let newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode) {
      this.shoppingListService.editIngredient(this.editedIngredientIndex, newIngredient);
    }
    else {
      this.shoppingListService.addIngredient(newIngredient);
    }
  }

  onDelete() {
    if(this.editMode) {
      this.shoppingListService.deleteIngredient(this.editedIngredientIndex);
    }
    this.onClear();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }
}
