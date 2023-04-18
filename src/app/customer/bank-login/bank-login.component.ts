import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bank-login',
  templateUrl: './bank-login.component.html',
  styleUrls: ['./bank-login.component.scss'],
})
export class BankLoginComponent implements OnInit {
  bankLogin!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private api: CustomerService,
    private router: Router
  ) {
    this.bankLogin = this.fb.group({
      customername: [''],
      accountno: [''],
      password: [''],
    });
  }

  ngOnInit(): void {}

  login() {
    let c = this.bankLogin.value.customername;
    let a = this.bankLogin.value.accountno;
    let p = this.bankLogin.value.password;
console.log(c,p,a);

    this.api.BankLogin(c,p,a).subscribe((res: any) => {
      console.log(res, 'bank login');
      if (res) {
        localStorage.setItem('token', JSON.stringify(res));
        this.router.navigate(['/customer-page']);
      } else {
        alert('failed');
      }
    });
  }
}
