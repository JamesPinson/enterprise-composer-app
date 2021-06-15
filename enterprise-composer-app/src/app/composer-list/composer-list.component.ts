/**
 * Title: composer-list.component.ts
 * Author: James Pinson
 * Date: June 14th 2021
 * Description: This is the Composer list component, which displays a list of composers.
 */

//This is our import statements.
 import { Component, OnInit } from '@angular/core';
 import { IComposer } from '../composer.interface';
 import { ComposerService } from '../composer.service';
 import { FormControl } from '@angular/forms';
 import { debounceTime } from "rxjs/operators"
 import { Observable } from 'rxjs';

//This is our component info.
 @Component({
   selector: 'app-composer-list',
   templateUrl: './composer-list.component.html',
   styleUrls: ['./composer-list.component.css']
 })

 //This is where we export of ComposerListComponent.
 export class ComposerListComponent implements OnInit {

//This is where we set up our composers array.
    composers: Observable<IComposer[]>;
    txtSearchControl = new FormControl('');

//This calls our composerService which houses our array of Composers.
   constructor(private composerService: ComposerService) {
     this.composers = this.composerService.getComposers();

//This calls our txt search control which returns the search value every 500 milliseconds.
     this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => this.filterComposer(val));
   }

   ngOnInit(): void {
   }

//This is our filter composer function that filters them by name when you search.
   filterComposer(name: string) {
     this.composers = this.composerService.filterComposers(name);
   }
 }
