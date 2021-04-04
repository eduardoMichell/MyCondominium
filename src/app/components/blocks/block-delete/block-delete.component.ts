import { Component, OnInit } from '@angular/core';
import {BlockService} from '../block.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Block} from '../block.model';

@Component({
  selector: 'app-block-delete',
  templateUrl: './block-delete.component.html',
  styleUrls: ['./block-delete.component.css']
})
export class BlockDeleteComponent implements OnInit {
  block: Block;

  constructor(private blockService: BlockService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.blockService.readById(id).subscribe(block => {
      this.block = block;
    });
  }

  deleteBlock(): void {
      if (this.block.peoples.length > 0) {
          this.blockService.showMessage('This block have peoples', true);
      } else {
          this.blockService.delete(this.block._id).subscribe(() => {
              console.log(this.block);
              this.blockService.showMessage('Successful Block Deleted');
              this.router.navigate(['/blocks']);
          });
      }
  }


  cancel(): void {
    this.router.navigate(['/blocks']);
  }

}
