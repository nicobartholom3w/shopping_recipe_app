import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-edit/shopping-list-edit.component';
import { IngredientComponent } from './shopping-list/ingredient/ingredient.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-item/recipe-item.component';
import { MaterialIconsComponent } from './material-icons/material-icons.component';
import { RecipeDetailComponent } from './recipes/recipe-item/recipe-detail/recipe-detail.component';
import { HomeComponent } from './home/home.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { DeleteConfirmDialogueComponent } from './shared/delete-confirm-dialogue/delete-confirm-dialogue.component';
import { HttpClientModule } from '@angular/common/http';



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
    MaterialIconsComponent,
    RecipeDetailComponent,
    HomeComponent,
    RecipeEditComponent,
    DeleteConfirmDialogueComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
