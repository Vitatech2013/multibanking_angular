import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';
import { CustomerService } from 'src/app/customer/customer.service';
import { MatDialog } from '@angular/material/dialog';
import { UserTransactionsComponent } from '../user-transactions/user-transactions.component';

@Component({
  selector: 'app-m-view-customers',
  templateUrl: './m-view-customers.component.html',
  styleUrls: ['./m-view-customers.component.scss'],
})
export class MViewCustomersComponent implements OnInit {
  allUsers: any;
  customer: any;
  banks: boolean = false;
  constructor(private api: ManagerService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.api.viewUsers().subscribe((res: any) => {
      this.allUsers = res;
    });
  }

  customers(a: any) {
    this.banks = true;
    console.log(a);

    this.api.viweCustomer(a.username).subscribe((res: any) => {
      console.log(res, 'cccc');
      this.customer = res;
    });
  }

  transactions(a: any) {
    this.dialog.open(UserTransactionsComponent, {
      width: '70%',
      height: '80%',
      data: a,
    });
  }
  back() {
    window.location.reload();
  }
}
