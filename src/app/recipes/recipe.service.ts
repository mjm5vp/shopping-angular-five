import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>()

  private recipes: Recipe[] = [
    new Recipe('First Recipe', 'Description of first recipe', 'http://www.seriouseats.com/recipes/assets_c/2010/09/20100910-duck-27-thumb-625xauto-110803.jpg'),
    new Recipe('Second Recipe', 'Description of Second recipe', 'http://www.seriouseats.com/recipes/assets_c/2010/09/20100910-duck-27-thumb-625xauto-110803.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
