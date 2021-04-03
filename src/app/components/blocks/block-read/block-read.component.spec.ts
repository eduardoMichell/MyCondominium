import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockReadComponent } from './block-read.component';

describe('BlockReadComponent', () => {
  let component: BlockReadComponent;
  let fixture: ComponentFixture<BlockReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
