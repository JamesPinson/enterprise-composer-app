/**
 * Title: contact.component.ts
 * Author: James Pinson
 * Date: June 12th 2021
 * Description: This is the Contact component, which displays the contact info.
 */

//This is the import statements.
import { Component, OnInit } from '@angular/core';

//This is our component info.
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

//This is where we export our contact component.
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
