import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PeopleService} from '../people.service';
import {People} from '../people.model';
import {BlockService} from '../../blocks/block.service';
import {Block} from '../../blocks/block.model';

@Component({
  selector: 'app-people-delete',
  templateUrl: './people-delete.component.html',
  styleUrls: ['./people-delete.component.css']
})
export class PeopleDeleteComponent implements OnInit {
  people: People;
  block: Block;
  constructor(private peopleService: PeopleService,
              private router: Router,
              private route: ActivatedRoute,
              private blockService: BlockService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.peopleService.readById(id).subscribe(people => {
      this.people = people;
      this.blockService.readById(this.people.block.toString()).subscribe(block => {
        this.block = block;
      });
    });
  }

  deletePeople(): void {
    this.peopleService.delete(this.people._id).subscribe(() => {
      this.peopleService.showMessage('Successful People Deleted');
      this.router.navigate(['/peoples']);
    });

  }
  cancel(): void {
    this.router.navigate(['/peoples']);
  }

}
