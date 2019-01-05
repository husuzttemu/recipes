import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) { }

  private recipes: Recipe[] = [
    new Recipe('A test recipe1', 'This is simply test', 'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/IMG_1105.jpg',
    [
      new Ingredient('bread', 1),
      new Ingredient('meat', 5)
    ]),
    new Recipe('A test recipe2', 'This is simply test', 'https://pinchofyum.com/wp-content/uploads/Lo-Mein-1-2-600x900.jpg',
    [
      new Ingredient('bread', 1),
      new Ingredient('meat', 5),
      new Ingredient('egg', 3)
    ]),
    new Recipe('A test recipe3', 'This is simply test', 'https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,h_436,q_auto/v1/hellofresh_s3/image/enchiladas-aux-legumes-1a1102aa.jpg',[]),
    new Recipe('A test recipe4', 'This is simply test', 'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/IMG_1105.jpg',[]) ];

    getRecipes() {
      return this.recipes.slice();
    }

    getRecipe(index: number) {
      return this.recipes.slice()[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
      this.shoppingListService.addIngredients(ingredients);

    }


  }
