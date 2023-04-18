import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-money',
  templateUrl: './add-money.component.html',
  styleUrls: ['./add-money.component.scss'],
})
export class AddMoneyComponent implements OnInit {
  addForm!: FormGroup;
  amount: any;
  constructor(
    private api: CustomerService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addForm = this.fb.group({
      amount: ['', [Validators.required]],
    });
    let u = JSON.parse(localStorage.getItem('token')!);
    this.api.getBalance(u.accountno).subscribe((res: any) => {
      res.filter((x: any) => {
        this.amount = x;
        console.log(this.amount, 'amount');
      });
    });
  }

  add() {
    let u = JSON.parse(localStorage.getItem('token')!);
    console.log(u._id);

    let a = parseInt(this.amount.amount);
    let n = parseInt(this.addForm.value.amount);
    console.log(a, n, a + n);

    let data = {
      amount: a + n,
    };

    this.api.addAmout(u._id, data).subscribe((res: any) => {
      this.router.navigate(['customer-page/balance']);
    });
  }
}
