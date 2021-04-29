import { Component, OnInit } from '@angular/core';
import {Block} from '../block.model';
import {BlockService} from '../block.service';
import {PeopleService} from '../../peoples/people.service';

@Component({
  selector: 'app-block-read',
  templateUrl: './block-read.component.html',
  styleUrls: ['./block-read.component.css']
})
export class BlockReadComponent implements OnInit {

  blocks: Block[];
  displayedColumns = ['name', 'peoples', 'action'];
  display = [];

  constructor(private blockService: BlockService) { }

  ngOnInit() {
    this.blockService.read().subscribe(async blocks => {
      this.blocks = blocks;
      this.display = await this.getPeoples();

     });
  }

  getPeoples() {
    let peoples = [];
    const blocks = [];
    for (const block of this.blocks) {
      // tslint:disable-next-line:prefer-for-of
      for (let j = 0; j < block.peoples.length; j++) {
        peoples.push(block.peoples[j].name);
      }
      blocks.push({
        _id: block._id,
        name: block.name,
        peoples
      });
      peoples = [];
    }
    return blocks;
  }




}
