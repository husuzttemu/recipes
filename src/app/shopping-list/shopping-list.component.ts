import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Egg' , 1.25),
    new Ingredient('Apple' , 5.0)
  ];

  constructor() { }

  ngOnInit() {
  }

  receivedRecipe(receviedIngredient: Ingredient)  {
    this.ingredients.push(receviedIngredient);
  }

}
