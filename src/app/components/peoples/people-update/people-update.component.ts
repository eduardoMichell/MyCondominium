import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PeopleService} from '../people.service';
import {People} from '../people.model';
import {BlockService} from '../../blocks/block.service';
import {Block} from '../../blocks/block.model';

@Component({
  selector: 'app-people-update',
  templateUrl: './people-update.component.html',
  styleUrls: ['./people-update.component.css']
})
export class PeopleUpdateComponent implements OnInit {
  people = {
    _id: null,
    name: null,
    ap: null,
    block: null
  };
  oldPeople = null;
  blocks: Block[];
  aps: [{ number: string }, { number: string }, { number: string }, { number: string },
    { number: string }, { number: string }, { number: string }, { number: string },
    { number: string }, { number: string }, { number: string }, { number: string }];

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
        block: null
      };
      this.oldPeople = {
        _id: people._id,
        name: people.name,
        ap: people.ap,
        block: people.block
      };
      this.blockService.read().subscribe(blocks => {
        this.blocks = blocks;
        this.aps = [{number: '101'}, {number: '102'}, {number: '103'}, {number: '104'},
          {number: '201'}, {number: '202'}, {number: '203'}, {number: '204'},
          {number: '301'}, {number: '302'}, {number: '303'}, {number: '304'}, ];
      });
    });
  }

  updatePeople(): void {
    if (this.people.block) {
      this.blockService.readById(this.oldPeople.block).subscribe(async block => {
        const idx = block.peoples.indexOf(this.oldPeople._id);
        block.peoples.splice(idx, 1);
        await this.blockService.update(block).subscribe(response => {
        });
      });
      this.blockService.readById(this.people.block).subscribe(async block => {
        block.peoples.push(this.people);
        await this.blockService.update(block).subscribe(response => {
        });
      });
      this.peopleService.update(this.people).subscribe(() => {
        this.peopleService.showMessage('Successful Block Updated');
        this.router.navigate(['/peoples']);
      });
    } else {
      this.peopleService.showMessage('Some information is not complete', true);
    }
  }

  cancel(): void {
    this.router.navigate(['/peoples']);
  }

}
