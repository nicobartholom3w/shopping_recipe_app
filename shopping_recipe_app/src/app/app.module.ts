import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './header/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './header/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { IngredientComponent } from './header/shopping-list/ingredient/ingredient.component';
import { RecipesComponent } from './header/recipes/recipes.component';
import { RecipeListComponent } from './header/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './header/recipes/recipe-item/recipe-item.component';
import { MaterialIconsComponent } from './material-icons/material-icons.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    IngredientComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    MaterialIconsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
