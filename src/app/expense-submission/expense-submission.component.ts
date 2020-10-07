import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import {ExpenseService} from '../_services/expense.service';
import { AlertifyService } from '../_services/alertify.service';

import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-expense-submission',
  templateUrl: './expense-submission.component.html',
  styleUrls: ['./expense-submission.component.css']
})
export class ExpenseSubmissionComponent implements OnInit {
  bsConfig: Partial<BsDatepickerConfig>;
  myForm: FormGroup;
  downloadURL: Observable<string>;
  uploadProgress: Observable<number>;
  receiptUrl: string;
  constructor(public expenseService: ExpenseService,
              private alertify: AlertifyService,
              private fb: FormBuilder) { }


  ngOnInit() {
    this.bsConfig = {
      containerClass: 'theme-blue'
    };
    this.createSubmissionForm();
    this.resetForm(this.myForm);
    this.update();
  }
  upload(event) {}
  createSubmissionForm() {
    this.myForm = this.fb.group({
      type :  new FormControl('', [Validators.required]),
      amount: new FormControl('', [Validators.required]),
      incurredDate: new FormControl(null, [Validators.required]),
      receipts: new FormControl('')
    });

  }
  get f(){
    return this.myForm.controls;
  }
  update(){
    if (this.expenseService.updation){
      this.myForm.patchValue({
        //receipts:this.expenseService.formDataU.receipts,
        type: this.expenseService.formDataU.type,
        amount: this.expenseService.formDataU.amount,
        incurredDate: this.expenseService.formDataU.incurredDate
      });
    }
  }

  submit(){
    if (window.confirm('Are you sure to submit')){
    if (!this.expenseService.updation){
      this.insert();
    }
    else{
      this.updateForm();
      this.expenseService.updation = false;
    }

  }
  else{
    return;
  }

  }

  insert(){
    this.expenseService.formData = this.myForm.value;
    this.expenseService.formData.receipts = this.receiptUrl;
    console.log(this.expenseService.formData);
    this.expenseService.submitExpense().subscribe((data) => {
      console.log(data);
      this.resetForm(this.myForm);
      this.alertify.success('Submitted successully');
    },
    () => {
      this.alertify.error('Failed uploading');
    }
    );
  }

  updateForm(){
    this.expenseService.formData = this.myForm.value;
    this.expenseService.formData.submitterName = this.expenseService.formDataU.submitterName;
    this.expenseService.formData.receipts = this.receiptUrl;
    this.expenseService.updateExpense().subscribe(() => {
      this.alertify.success('Updation success');
      this.resetForm(this.myForm);
    },
    () => {
      this.alertify.error('Failed to update');
    });
  }

  resetForm(form: FormGroup){
    if (form != null) {
    this.myForm.reset();
    }
    if (!this.expenseService.updation) {
    this.expenseService.formData = {
      id: 0,
      submitterName: '',
      type: '',
      status: '',
      amount: 0,
      incurredDate: null,
      submittedDate: null,
      receipts: ''



    };
    }
  }



}
