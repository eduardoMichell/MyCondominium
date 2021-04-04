import { Component, OnInit } from '@angular/core';
import {BlockService} from '../block.service';
import { Router } from '@angular/router';
import {Block} from '../block.model';
@Component({
  selector: 'app-block-create',
  templateUrl: './block-create.component.html',
  styleUrls: ['./block-create.component.css']
})
export class BlockCreateComponent implements OnInit {

  block: Block = {
    name: null
  };

  constructor(private blockService: BlockService,
              private router: Router) { }

  ngOnInit() {
  }

  createBlock(): void {
    if (!this.block.name || this.hasWhiteSpace(this.block.name)) {
      this.emptyName();
    } else {
      this.blockService.createBlock(this.block).subscribe(() => {
        this.blockService.showMessage('Block Created');
        this.router.navigate(['/blocks']);
      });
    }
  }
  cancel(): void {
    this.router.navigate(['/blocks']);
  }

  hasWhiteSpace(s) {
    return /^\s+$/.test(s);
  }
  emptyName(): void {
    this.blockService.showMessage('The name is empty', true);
  }

}
