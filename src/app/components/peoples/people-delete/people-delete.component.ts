import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PeopleService} from "../people.service";
import {People} from "../people.model";

@Component({
  selector: 'app-people-delete',
  templateUrl: './people-delete.component.html',
  styleUrls: ['./people-delete.component.css']
})
export class PeopleDeleteComponent implements OnInit {
  people: People

  constructor(private peopleService: PeopleService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.peopleService.readById(id).subscribe(people => {
      this.people = people
    })
  }

  deletePeople(): void{
    this.peopleService.delete(this.people.id).subscribe(() => {
      this.peopleService.showMessage('Successful People Deleted')
      this.router.navigate(["/peoples"])
    })

  }
  cancel(): void{
    this.router.navigate(['/peoples'])
  }

}
