import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipieService } from '../recipie.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
 recipe: Recipe;
 id:number;

  constructor(private route:ActivatedRoute,private recipieservice:RecipieService,private router:Router) { }

  ngOnInit() {
this.route.params.subscribe((params:Params)=>{
  this.id=+params['id'];
  this.recipe =this.recipieservice.getRecipie(this.id)
}

);

  }
  onEditRecipie(){
    this.router.navigate(['edit'],{relativeTo:this.route})

  }

}
