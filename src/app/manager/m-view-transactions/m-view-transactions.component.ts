import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-m-view-transactions',
  templateUrl: './m-view-transactions.component.html',
  styleUrls: ['./m-view-transactions.component.scss'],
})
export class MViewTransactionsComponent implements OnInit {
  transactions: any;
  constructor(private api: ManagerService) {}
  ngOnInit(): void {
    this.api.viewTransactions().subscribe((res: any) => {
      this.transactions = res;
      console.log(res, 'transactions');
    });
  }
}
