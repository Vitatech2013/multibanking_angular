import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin/admin.service';
import { ManagerService } from 'src/app/manager/manager.service';

@Component({
  selector: 'app-manager-login',
  templateUrl: './manager-login.component.html',
  styleUrls: ['./manager-login.component.scss'],
})
export class ManagerLoginComponent implements OnInit {
  loginForm!: FormGroup;
 
 constructor(
  private fb: FormBuilder,
  private api: ManagerService,
  private router: Router
 ){
  this.loginForm = this.fb.group({
    username: [''],
    password: [''],
  });
 }
 
  ngOnInit(): void {}


  login() {
    let username = this.loginForm.get('username')?.value;

    let password = this.loginForm.get('password')?.value;

    this.api.managerLogin(username, password).subscribe((res: any) => {
      console.log(res, "manager-login");
      if (res) {
        localStorage.setItem('manager',JSON.stringify(res) )
        this.router.navigate(['/manager-page']);
      }else{
        alert("Invalid credentials")
      }
    });
  }
}
