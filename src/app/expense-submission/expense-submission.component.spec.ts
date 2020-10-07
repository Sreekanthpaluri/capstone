import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseSubmisionComponent } from './expense-submission.component';

describe('ExpenseSubmisionComponent', () => {
  let component: ExpenseSubmisionComponent;
  let fixture: ComponentFixture<ExpenseSubmisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseSubmisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseSubmisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
