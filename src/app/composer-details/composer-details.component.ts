/**
 * Title: composer-details.component.ts
 * Author: James Pinson
 * Date: June 12th 2021
 * Description: Composer Details component page.
 */

//This is the import statements.
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';

//This is our component info.
@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})

//This is where we export our ComposerDetailsComponent.
export class ComposerDetailsComponent implements OnInit {

//This is where we set our variables.
  composerId: number;
  composer: IComposer;

  //This is where we set the constructor to route us based on the composerId to the corresponding composer.
  constructor(private route: ActivatedRoute, private composerService: ComposerService) {

    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId'), 10);

    if (this.composerId) {
      this.composer = this.composerService.getComposer(this.composerId);
    }
  }

  ngOnInit(): void {

  }

}
