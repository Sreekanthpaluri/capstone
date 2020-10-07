import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedStateComponent } from './rejected-state.component';

describe('RejectedStateComponent', () => {
  let component: RejectedStateComponent;
  let fixture: ComponentFixture<RejectedStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectedStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
