import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromiseTrackerComponent } from './promise-tracker.component';

describe('PromiseTrackerComponent', () => {
  let component: PromiseTrackerComponent;
  let fixture: ComponentFixture<PromiseTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromiseTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromiseTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
