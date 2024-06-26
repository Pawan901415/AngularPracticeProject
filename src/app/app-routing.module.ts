import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { EditRecipeComponent } from "./recipes/edit-recipe/edit-recipe.component";





const appRoutes:Routes=[
    {path:'',redirectTo:'/recipies',pathMatch:'full'

},
{path:'recipies',component:RecipesComponent,children:[
    {
        path:'',component:RecipeStartComponent

},
{path:':id',component:RecipeDetailComponent},
{path:'edit/:id', component:EditRecipeComponent},
{path:'new',component:EditRecipeComponent},

]

},

{path:'shoppinglist',component:ShoppingListComponent

},


    
] 

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})


export class AppRoutingModule{
   
}