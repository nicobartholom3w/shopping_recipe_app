import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-item/recipe-detail/recipe-detail.component';



const appRoutes: Routes = [
    // { path: '', component: AppComponent },
    { path: '', component: HomeComponent },
    { path: 'recipes', component: RecipesComponent, children: [] },
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: 'recipes/recipe-detail/:id', component: RecipeDetailComponent },

  ]

  @NgModule({
      imports: [RouterModule.forRoot(appRoutes) ],
      exports: [RouterModule]
  })

  export class AppRoutingModule {

  }