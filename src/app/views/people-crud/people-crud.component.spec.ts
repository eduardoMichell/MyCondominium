import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleCrudComponent } from './people-crud.component';

describe('PeopleCrudComponent', () => {
  let component: PeopleCrudComponent;
  let fixture: ComponentFixture<PeopleCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
