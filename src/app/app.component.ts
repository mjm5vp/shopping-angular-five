import { Component, onInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements onInit {
  loadedFeature: string = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBLvBEkUG2hRcuGOBIY-M7G565WysQWcOk",
      authDomain: "ng-recipe-book-b1495.firebaseapp.com",
      databaseURL: "https://ng-recipe-book-b1495.firebaseio.com",
      projectId: "ng-recipe-book-b1495",
      storageBucket: "ng-recipe-book-b1495.appspot.com",
      messagingSenderId: "807801234508"
    })
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature
  }
}
