import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrl: './edit-recipe.component.css'
})
export class EditRecipeComponent implements OnInit{
/**
 *
 */
constructor(private route:ActivatedRoute) {
  
  
}
  ngOnInit(){
    this.route.params.subscribe((params:Params)=>{
      this.id=+params['id'];
      this.editMode=params['id']!=null;
    })

    console.log(this.id)
  
}
id:number;
editMode=false;


}
