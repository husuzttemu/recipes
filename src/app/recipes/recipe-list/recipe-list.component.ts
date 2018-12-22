import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply test', 'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/IMG_1105.jpg'),
    new Recipe('A test recipe', 'This is simply test', 'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/IMG_1105.jpg'),
    new Recipe('A test recipe', 'This is simply test', 'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/IMG_1105.jpg'),
    new Recipe('A test recipe', 'This is simply test', 'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/IMG_1105.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
