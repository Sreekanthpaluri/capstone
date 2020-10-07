import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmittedStateComponent } from './submitted-state.component';

describe('SubmittedStateComponent', () => {
  let component: SubmittedStateComponent;
  let fixture: ComponentFixture<SubmittedStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmittedStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmittedStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
