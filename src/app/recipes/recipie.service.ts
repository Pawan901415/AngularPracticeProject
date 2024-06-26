import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipieService{
  private  recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
        new Recipe('Another Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
      ];

      recipeSelected= new EventEmitter<Recipe>();
    

      getRecipes(){
        return this.recipes.slice();
      }

      getRecipie(index:number){
        return this.recipes[index];
      }
}