import { Component, OnInit } from '@angular/core';
import {Block} from "../block.model";
import {BlockService} from "../block.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-block-update',
  templateUrl: './block-update.component.html',
  styleUrls: ['./block-update.component.css']
})
export class BlockUpdateComponent implements OnInit {
  block: Block

  constructor(private blockService: BlockService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.blockService.readById(id).subscribe(block => {
      this.block = block
    })
  }
  updateBlock(): void{
    this.blockService.update(this.block).subscribe(() => {
      this.blockService.showMessage('Successful Block Updated')
      this.router.navigate(["/blocks"])
    })

  }
  cancel(): void{
    this.router.navigate(['/blocks'])
  }


}
