import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { AdminService } from 'src/app/admin/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-account-page',
  templateUrl: './new-account-page.component.html',
  styleUrls: ['./new-account-page.component.scss'],
})
export class NewAccountPageComponent implements OnInit {
  newAccountForm!: FormGroup;
  banknameList: any;
  constructor(
    private fb: FormBuilder,
    private api: CustomerService,
    private aapi: AdminService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem('token')!);

    this.newAccountForm = this.fb.group({
      customertype: ['New'],
      customername: [user.username],
      password: ['empty'],
      accountno: ['pending'],
      amount: [0],
      mobileno: [user.mobileno],
      emailid: [user.emailid],
      bankname: ['', [Validators.required]],
      branchname: ['', [Validators.required]],
      ifsccode: ['', [Validators.required]],
      aadharno: ['', [Validators.required]],
      fullname: ['', [Validators.required]],
      fathername: ['', [Validators.required]],
      state: ['', [Validators.required]],
      fulladdress: ['', [Validators.required]],
      status: ['Deactive'],
    });

    this.aapi.getBankname().subscribe((res: any) => {
      console.log(res, 'banknames');
      this.banknameList = res;
    });
  }
  selected(e: any) {
    let bl = this.banknameList.find((b: any) => b.bankname == e.target.value);

    this.newAccountForm.patchValue({
      branchname: bl.branchname,
      ifsccode: bl.ifsccode,
    });
  }
  createAccount() {
    this.api
      .createBankAccount(this.newAccountForm.value)
      .subscribe((res: any) => {
        console.log(res, 'new account');
        this.router.navigate(['home/bank-login'])
      });
  }
}
