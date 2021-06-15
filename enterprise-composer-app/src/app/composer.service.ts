/**
 * Title: composer-list.component.ts
 * Author: James Pinson
 * Date: June 14th 2021
 * Description: This is the composer service which holds our array of composers.
 */

//Here we have our import statements.
import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

//Here we export our composerservice class.
export class ComposerService {

//This is our array of composers.
  composers: Array<IComposer>;

  constructor() {
    this.composers = [
      {
        composerId: 100, fullName: "Ludwig van Beethoven", genre: "Classical"
      },
      {
        composerId: 101, fullName: "Johann Sebastian Bach", genre: "Classical"
      },
      {
        composerId: 102, fullName: "Claude Debussy", genre: "Classical"
      },
      {
        composerId: 103, fullName: "Antonio Vivaldi", genre: "Classical"
      },
      {
        composerId: 104, fullName: "Joseph Haydn", genre: "Classical"
      },
    ]
  }

  //Here we have it return our list of composers.
  getComposers() : Observable<IComposer[]> {
    return of (this.composers);
  }

  //Here when you click on a composer id it returns the details of that composer.
  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
     return {} as IComposer;
  }

//This is our filter composers function which filters the composers based on what is typed in the search bar.
filterComposers(name: string): Observable<IComposer[]> {
  return of(this.composers).pipe(
    map(composers =>
      composers.filter(composer => composer.fullName.toLowerCase().indexOf(name) > -1)))

  }

}

