import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

   recipes: Recipe[] = [
    new Recipe('A test recipe1', 'This is simply test', 'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/IMG_1105.jpg'),
    new Recipe('A test recipe2', 'This is simply test', 'https://pinchofyum.com/wp-content/uploads/Lo-Mein-1-2-600x900.jpg'),
    new Recipe('A test recipe3', 'This is simply test', 'https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,h_436,q_auto/v1/hellofresh_s3/image/enchiladas-aux-legumes-1a1102aa.jpg'),
    new Recipe('A test recipe4', 'This is simply test', 'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/IMG_1105.jpg')
  ];

  constructor() { }

  onReceivedRecipeItem(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }



  ngOnInit() {
  }

}
