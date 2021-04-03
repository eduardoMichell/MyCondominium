import { Component, OnInit } from '@angular/core';
import {Block} from "../block.model";
import {BlockService} from "../block.service";

@Component({
  selector: 'app-block-read',
  templateUrl: './block-read.component.html',
  styleUrls: ['./block-read.component.css']
})
export class BlockReadComponent implements OnInit {

  blocks: Block[]
  displayedColumns= ['name', 'peoples', 'action']

  constructor(private blockService: BlockService) { }

  ngOnInit() {
    this.blockService.read().subscribe(blocks => {
      this.blocks = blocks
    })
  }

}
