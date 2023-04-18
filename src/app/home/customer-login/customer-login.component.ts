import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/customer/customer.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.scss'],
})
export class CustomerLoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private api: CustomerService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: [''],
      password: [''],
    });
  }
  ngOnInit(): void {}

  login() {
    let username = this.loginForm.get('username')?.value;
    let password = this.loginForm.get('password')?.value;

    this.api.userLogin(username, password).subscribe((res: any) => {
      console.log(res, 'login');

      if (res) {
        localStorage.setItem('token', JSON.stringify(res));
        this.router.navigate(['home/bank-login']);
      } else {
        alert('failed');
      }
    });
  }
}
