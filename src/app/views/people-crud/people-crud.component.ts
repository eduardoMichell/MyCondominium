import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HeaderService} from "../../components/template/header/header.service";

@Component({
  selector: 'app-people-crud',
  templateUrl: './people-crud.component.html',
  styleUrls: ['./people-crud.component.css']
})
export class PeopleCrudComponent implements OnInit {

  constructor(private router: Router,
              private headerService: HeaderService) {
    headerService.headerData = {
      title: 'People Crud',
      icon: 'person',
      routeUrl: '/people'
    }
  }

  ngOnInit() {
  }

  navigateToPeopleCreate(){
    this.router.navigate(['/peoples/create'])
  }
}

