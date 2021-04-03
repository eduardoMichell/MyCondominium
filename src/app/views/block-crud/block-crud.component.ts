import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import {HeaderService} from "../../components/template/header/header.service";

@Component({
  selector: 'app-block-crud',
  templateUrl: './block-crud.component.html',
  styleUrls: ['./block-crud.component.css']
})
export class BlockCrudComponent implements OnInit {

  constructor(private router: Router,
              private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Blocks Crud',
      icon: 'view_module',
      routeUrl: '/blocks'
    }
  }




  ngOnInit() {
  }
  navigateToBlockCreate(): void{
    this.router.navigate(['/blocks/create'])
  }

}
