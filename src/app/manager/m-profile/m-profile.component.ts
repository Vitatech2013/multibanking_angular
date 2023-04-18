import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';
import { MatDialog } from '@angular/material/dialog';
import { MEditProfileComponent } from '../m-edit-profile/m-edit-profile.component';

@Component({
  selector: 'app-m-profile',
  templateUrl: './m-profile.component.html',
  styleUrls: ['./m-profile.component.scss'],
})
export class MProfileComponent implements OnInit {
  user: any;
  constructor(private api: ManagerService, private dialog:MatDialog) {}

  ngOnInit(): void {
    let uname = JSON.parse(localStorage.getItem('manager')!);
    console.log(uname,'u');

    this.api.getProfile(uname.username).subscribe((res: any) => {
      console.log(res);
      res.map((x:any)=>{
        this.user=x
      })
    });
  }

  edit(a:any){
    this.dialog.open(MEditProfileComponent, {
      width: '60%',
      height: '70%',
      data: a,
    });
  }
}
