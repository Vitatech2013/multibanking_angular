import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';
import { MatDialog } from '@angular/material/dialog';
import { MUpdateStatusComponent } from '../m-update-status/m-update-status.component';

@Component({
  selector: 'app-m-account-requests',
  templateUrl: './m-account-requests.component.html',
  styleUrls: ['./m-account-requests.component.scss'],
})
export class MAccountRequestsComponent implements OnInit {
  allUsers: any;
  constructor(private api: ManagerService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.api.viewReqs().subscribe((res: any) => {
      console.log(res, 'reqs');
      this.allUsers = res;
    });
  }

  updateStatus(a: any) {
    this.dialog.open(MUpdateStatusComponent, {
      width: '60%',
      height: '65%',
      data: a,
    });
  }
}
