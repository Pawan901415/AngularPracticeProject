import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipieService } from '../recipie.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
 recipes:Recipe[];
  constructor(private recipeservice:RecipieService) { }

  ngOnInit() {
this.recipes=this.recipeservice.getRecipes();

  }

  

}
