import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleReadComponent } from './people-read.component';

describe('PeopleReadComponent', () => {
  let component: PeopleReadComponent;
  let fixture: ComponentFixture<PeopleReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
