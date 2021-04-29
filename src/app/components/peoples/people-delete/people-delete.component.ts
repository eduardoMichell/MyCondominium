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
  people = {
    _id: null,
    name: null,
    ap: null,
    block: null
  };
  block: Block;
  constructor(private peopleService: PeopleService,
              private router: Router,
              private route: ActivatedRoute,
              private blockService: BlockService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.peopleService.readById(id).subscribe(people => {
      this.people = {
        _id: people._id,
        name: people.name,
        ap: people.ap,
        block: people.block
      };
      this.blockService.readById(this.people.block.toString()).subscribe(block => {
        this.block = block;
      });
    });
  }

  deletePeople(): void {
    this.blockService.readById(this.people.block).subscribe(async block => {
      const idx = block.peoples.indexOf(this.people._id);
      block.peoples.splice(idx, 1);
      await this.blockService.update(block).subscribe(response => {});
    });
    this.peopleService.delete(this.people._id).subscribe(() => {
      this.peopleService.showMessage('Successful People Deleted');
      this.router.navigate(['/peoples']);
    });

  }
  cancel(): void {
    this.router.navigate(['/peoples']);
  }

}
