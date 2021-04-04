import { Component, OnInit } from '@angular/core';
import {People} from '../people.model';
import {PeopleService} from '../people.service';
import {Router} from '@angular/router';
import {BlockService} from '../../blocks/block.service';
import {Block} from '../../blocks/block.model';

@Component({
  selector: 'app-people-create',
  templateUrl: './people-create.component.html',
  styleUrls: ['./people-create.component.css']
})
export class PeopleCreateComponent implements OnInit {
  people: People = {
    name : null,
    block : null,
    ap : null
};
  blocks: Block[];

  aps: [string, string, string, string, string, string, string, string, string, string, string, string];

  constructor(private peopleService: PeopleService,
              private router: Router,
              private blockService: BlockService) { }

  ngOnInit() {
    this.blockService.read().subscribe(blocks => {
      this.blocks = blocks;
      this.aps = ['101',  '102',  '103', '104', '201',  '202', '203', '204',
        '301', '302', '303', '304'];
    });
  }

  createPeople(): void {
    if (!this.people.name || this.hasWhiteSpace(this.people.name)) {
      this.emptyName();
    } else {
      this.peopleService.createPeople(this.people).subscribe(() => {
        this.peopleService.showMessage('People Created');
        this.router.navigate(['/peoples']).then(r => '');
      });
    }
  }
  cancel(): void {
    this.router.navigate(['/peoples']);
  }

  hasWhiteSpace(s) {
    return /^\s+$/.test(s);
  }
  emptyName(): void {
    this.peopleService.showMessage('The name is empty', true);
  }
}
