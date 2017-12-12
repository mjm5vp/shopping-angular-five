import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('First Recipe', 'Description of first recipe', 'http://www.seriouseats.com/recipes/assets_c/2010/09/20100910-duck-27-thumb-625xauto-110803.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
