import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-c-change-pswd',
  templateUrl: './c-change-pswd.component.html',
  styleUrls: ['./c-change-pswd.component.scss'],
})
export class CChangePswdComponent implements OnInit {
  posswordForm!: FormGroup;
  u: any;
  constructor(
    private fb: FormBuilder,
    private api: CustomerService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.posswordForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      newpassword: ['', [Validators.required]],
    });
    this.u = JSON.parse(localStorage.getItem('token')!);

    this.posswordForm.patchValue({
      username: this.u.customername,
    });
  }

  changePswd() {
    let oldpswd = this.posswordForm.get('password')?.value;
    let newpswd = this.posswordForm.get('newpassword')?.value;
    console.log(this.u.password, oldpswd, newpswd);

    if (this.u.password == oldpswd) {
      let Data = {
        password: newpswd,
      };
      this.api.editPassword(this.u._id, Data).subscribe((res: any) => {
        localStorage.removeItem('token');
        this.router.navigate(['home/customer-login']);
      });
    } else {
      alert('Old Password not matched');
    }
  }
}
