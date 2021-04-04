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
    });
  }


}
