import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer-amount',
  templateUrl: './transfer-amount.component.html',
  styleUrls: ['./transfer-amount.component.scss'],
})
export class TransferAmountComponent implements OnInit {
  transferForm!: FormGroup;
  amount: any;
  tamount: any;
  constructor(private fb: FormBuilder, private api: CustomerService, private router:Router) {}
  ngOnInit(): void {
    let u = JSON.parse(localStorage.getItem('token')!);
    console.log(u, 'user');

    this.transferForm = this.fb.group({
      fromActNumber: u.accountno,
      customerName: u.customername,
      toActNumber: ['', [Validators.required]],
      holdername: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      date: [new Date()],
    });
  }

  transfer() {
    let u = JSON.parse(localStorage.getItem('token')!);
    this.api.transferAmount(this.transferForm.value).subscribe((res: any) => {
      this.tamount = res.amount;
      console.log(this.tamount, 'transfer amount ');

      this.api.getBalance(u.accountno).subscribe((res: any) => {
        res.filter((x: any) => {
          this.amount = x.amount;
          console.log(this.amount, 'amount');
          let a = parseInt(this.amount);
          let n = parseInt(this.tamount);
          console.log(a, n, a - n);
          let d = a - n;
          let data = {
            amount: d,
          };

          this.api.updateAmout(u._id, data).subscribe((res: any) => {
         this.router.navigate(['customer-page/view-transactions'])
          });
        });
      });
    });
  }
}
