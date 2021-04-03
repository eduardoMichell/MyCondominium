import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockCrudComponent } from './block-crud.component';

describe('BlockCrudComponent', () => {
  let component: BlockCrudComponent;
  let fixture: ComponentFixture<BlockCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
