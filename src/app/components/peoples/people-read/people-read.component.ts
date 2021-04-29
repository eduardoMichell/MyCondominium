import { Component, OnInit } from '@angular/core';
import {PeopleService} from '../people.service';
import {BlockService} from '../../blocks/block.service';
import {People} from '../people.model';

@Component({
  selector: 'app-people-read',
  templateUrl: './people-read.component.html',
  styleUrls: ['./people-read.component.css']
})
export class PeopleReadComponent implements OnInit {
  displayedColumns = ['name', 'block', 'ap', 'action'];
  peoples: People[];

  constructor(private peopleService: PeopleService,
              private blockService: BlockService) { }

  ngOnInit() {
    this.peopleService.read().subscribe(async peoples => {
      this.peoples = peoples;
      this.getBlocks(this.peoples);
      this.getAps(this.peoples);
    });
  }

  async getBlocks(people) {
    let blocks;
    for (let i = 0; i < people.length; i++) {
      if (people[i].block === null) {
        blocks = 'No Block';
        people[i].block = blocks;
      } else {
        await this.blockService.readById(people[i].block).subscribe(block => {
          blocks = block.name;
          people[i].block = blocks;
        });
      }
    }
  }

  async getAps(people) {
    let aps;
    for (let i = 0; i < people.length; i++) {
      if (people[i].ap === null) {
        aps = 'No Ap';
        people[i].ap = aps;
      }
    }
  }


}
