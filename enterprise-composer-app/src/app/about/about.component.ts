/**
 * Title: about.component.ts
 * Author: James Pinson
 * Date: June 12th 2021
 * Description: About component (About Us page)
 */

//This is our import statements.
import { Component, OnInit } from '@angular/core';

//This is the info for our component.
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

//This is where we export our AboutComponent.
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
