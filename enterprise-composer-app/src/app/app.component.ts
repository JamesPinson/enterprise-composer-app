/**
 * Title: app.component.ts
 * Author: James Pinson
 * Date: June 14th 2021
 * Description: contains our header.
 */


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//This contains our assignment header.
export class AppComponent {
  assignment: string = 'Exercise 4.4 - Async Pipe ';
}
