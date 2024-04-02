import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipieService } from '../recipie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
 recipes:Recipe[];
  constructor(private recipeservice:RecipieService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
this.recipes=this.recipeservice.getRecipes();

  }

  onNewRecipie(){
    this.router.navigate(['new'],{relativeTo:this.route})

  }

  

}
