import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { MatDialog } from '@angular/material/dialog';
import { CEditProfileComponent } from '../c-edit-profile/c-edit-profile.component';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.scss'],
})
export class CustomerProfileComponent implements OnInit {
  user: any;
  constructor(private api: CustomerService, private dialog: MatDialog) {}

  ngOnInit(): void {
    let u = JSON.parse(localStorage.getItem('token')!);

    this.api.getProfile(u.customername).subscribe((res: any) => {
      res.filter((x: any) => {
        this.user = x;
      });
    });
  }

  updateProfile(a: any) {
    this.dialog.open(CEditProfileComponent, {
      width: '60%',
      height: '60%',
      data: a,
    });
  }
}
