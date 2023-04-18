import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  postUser(data: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });
    return this.http.post('http://localhost:7736/user/registration', data, {
      headers: headers,
    });
  }

  userLogin(uname: any, pwd: any) {
    return this.http.get(
      'http://localhost:7736/user/userlogin?username=' +
        uname +
        '&password=' +
        pwd
    );
  }

  getProfile(uname: any) {
    return this.http.get(
      'http://localhost:7736/user/viewProfile?username=' + uname
    );
  }

  editProfile(_id: any, data: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
    });
    return this.http.put<any>('http://localhost:7736/user/updateProfile/' + _id, data, {
      headers: headers,
    });
  }

  editPassword(id:any, data:any){
    return this.http.put<any>('http://localhost:7736/user/updateAccountpassword/' + id, data)
    
  }

  getBalance(ac: any) {
    return this.http.get(
      'http://localhost:7736/user/getprevousamount?accountno=' + ac
    );
  }
  updateAmout(_id: any, data: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
    });
    return this.http.put<any>('http://localhost:7736/user/updateAmount/' + _id, data, {
      headers: headers,
    });
  }
  createBankAccount(data: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });
    return this.http.post(
      'http://localhost:7736/user/addNewBankAccount',
      data,
      {
        headers: headers,
      }
    );
  }

  BankLogin(cname: any, pwd: any, an: any) {
    return this.http.get(
      'http://localhost:7736/user/userBankLogin?customername=' +
        cname +
        '&password=' +
        pwd +
        '&accountno=' +
        an
    );
  }

  addAmout(_id: any, data: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
    });
    return this.http.put<any>(
      'http://localhost:7736/user/updateAmount/' + _id,
      data,
      {
        headers: headers,
      }
    );
  }

  transferAmount(data: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });
    return this.http.post('http://localhost:7736/user/addTransaction', data, {
      headers: headers,
    });
  }
}
