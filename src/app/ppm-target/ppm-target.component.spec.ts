import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpmTargetComponent } from './ppm-target.component';

describe('PpmTargetComponent', () => {
  let component: PpmTargetComponent;
  let fixture: ComponentFixture<PpmTargetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpmTargetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpmTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
