import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockDeleteComponent } from './block-delete.component';

describe('BlockDeleteComponent', () => {
  let component: BlockDeleteComponent;
  let fixture: ComponentFixture<BlockDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
