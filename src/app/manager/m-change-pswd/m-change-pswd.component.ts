import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ManagerService } from '../manager.service';


@Component({
  selector: 'app-m-change-pswd',
  templateUrl: './m-change-pswd.component.html',
  styleUrls: ['./m-change-pswd.component.scss'],
})
export class MChangePswdComponent implements OnInit {
  mposswordForm!: FormGroup;
  u: any;
  constructor(
    private fb: FormBuilder,
    private api: ManagerService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.mposswordForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      newpassword: ['', [Validators.required]],
    });
    this.u = JSON.parse(localStorage.getItem('manager')!);

    this.mposswordForm.patchValue({
      username: this.u.username,
    });
  }

  changePswd() {
    let oldpswd = this.mposswordForm.get('password')?.value;
    let newpswd = this.mposswordForm.get('newpassword')?.value;
    console.log(this.u.password, oldpswd, newpswd);
    if (this.u.password == oldpswd) {
      let Data = {
        password: newpswd,
      };
      this.api.editManagerPassword(this.u._id, Data).subscribe((res: any) => {
        localStorage.removeItem('token');
        this.router.navigate(['home/manager-login']);
      });
    } else {
      alert('Old Password not matched');
    }
  
  }
}
