import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteManagerComponent } from '../delete-manager/delete-manager.component';

@Component({
  selector: 'app-view-manager',
  templateUrl: './view-manager.component.html',
  styleUrls: ['./view-manager.component.scss'],
})
export class ViewManagerComponent implements OnInit {
  allManagers: any;
  constructor(private api: AdminService, private dialog:MatDialog) {}
  ngOnInit(): void {
    this.api.viweManagers().subscribe((res: any) => {
      console.log(res, 'managers');
      this.allManagers = res;
    });
  }

  deleteManager(d:any){
    this.dialog.open(DeleteManagerComponent,{
      width:"40%",
      height:"30%",
      data: d,
    })
    
  }

}
