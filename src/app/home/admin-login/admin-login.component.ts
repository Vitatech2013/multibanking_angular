import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss'],
})
export class AdminLoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private api: AdminService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: [''],
      password: [''],
    });
  }

  ngOnInit(): void {}

  login() {
    let username = this.loginForm.get('username')?.value;

    let password = this.loginForm.get('password')?.value;
 
    this.api.adminLogin(username, password).subscribe((res: any) => {
      console.log(res, "admin-login");
      
      
      if (res) {
        this.router.navigate(['/admin-page']);
      }else{
        alert("Invalid credentials")
      }
    });
  }
}
