import { Component } from '@angular/core';
import firebase from 'firebase/compat';
import {config} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-product-management';

  constructor() {
    firebase.initializeApp(config);
  }
}
