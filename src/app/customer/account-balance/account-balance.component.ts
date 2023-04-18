import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-account-balance',
  templateUrl: './account-balance.component.html',
  styleUrls: ['./account-balance.component.scss'],
})
export class AccountBalanceComponent implements OnInit {
  amount: any;
  constructor(private api: CustomerService) {}

  ngOnInit(): void {
    let u = JSON.parse(localStorage.getItem('token')!);
    this.api.getBalance(u.accountno).subscribe((res: any) => {
      console.log(res, 'balance');
      res.filter((x: any) => {
        this.amount = x;
        console.log(this.amount);
      });
    });
  }
}
