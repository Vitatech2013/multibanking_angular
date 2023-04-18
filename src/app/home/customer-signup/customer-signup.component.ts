import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/customer/customer.service';

@Component({
  selector: 'app-customer-signup',
  templateUrl: './customer-signup.component.html',
  styleUrls: ['./customer-signup.component.scss'],
})
export class CustomerSignupComponent implements OnInit {
  signUpForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private api: CustomerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      mobileno: ['', [Validators.required]],
      address: ['', [Validators.required]],
      emailid: ['', [Validators.required]],
      dob: ['', [Validators.required]],
    });
  }

  signUp() {
    this.api.postUser(this.signUpForm.value).subscribe((res: any) => {
      console.log(res, 'customer');
      this.router.navigate(['home/customer-login']);
    });
  }
}
