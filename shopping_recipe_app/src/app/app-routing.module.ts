import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-item/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';



const appRoutes: Routes = [
    // { path: '', component: AppComponent },
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'recipes', component: RecipesComponent, children: [] },
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: '*', component: HomeComponent },
    { path: 'recipes/recipe-detail/:id', component: RecipeDetailComponent },
    { path: 'recipes/recipe-detail/:id/edit', component: RecipeEditComponent }
  ]

  @NgModule({
      imports: [RouterModule.forRoot(appRoutes) ],
      exports: [RouterModule]
  })

  export class AppRoutingModule {

  }