import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedStateComponent } from './approved-state.component';

describe('ApprovedStateComponent', () => {
  let component: ApprovedStateComponent;
  let fixture: ComponentFixture<ApprovedStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovedStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
