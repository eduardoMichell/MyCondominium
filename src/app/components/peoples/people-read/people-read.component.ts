import { Component, OnInit } from '@angular/core';
import {Block} from "../../blocks/block.model";
import {People} from "../people.model";
import {PeopleService} from "../people.service";

@Component({
  selector: 'app-people-read',
  templateUrl: './people-read.component.html',
  styleUrls: ['./people-read.component.css']
})
export class PeopleReadComponent implements OnInit {
  peoples: People[]
  displayedColumns= ['id', 'name', 'block', 'ap', 'action']

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.peopleService.read().subscribe(peoples => {
      this.peoples = peoples
    })
  }

}
