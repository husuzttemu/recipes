import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient("Egg", 1.25),
    new Ingredient("Apple", 5.0)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
   // for (const ingredient of ingredients) {
   //    this.addIngredient(ingredient);    }
   this.ingredients.push(...ingredients);
   this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
