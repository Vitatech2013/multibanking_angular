import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  adminLogin(UserName: any, Password: any) {
    return this.http.get(
      'http://localhost:7736/admin/adminlogin?username=' +
        UserName +
        '&password=' +
        Password
    );
  }

  addBank(data: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });
    return this.http.post('http://localhost:7736/admin/addBank', data, {
      headers: headers,
    });
  }

  getBanks() {
    return this.http.get('http://localhost:7736/admin/viewbanks');
  }

  editBank(_id: any, data: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
    });
    return this.http.put<any>('http://localhost:7736/admin/' + _id, data, {
      headers: headers,
    });
  }

  deleteBank(_id: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
    });
    return this.http.delete<any>('http://localhost:7736/admin/' + _id, {
      headers: headers,
    });
  }

  addManagers(data: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });
    return this.http.post('http://localhost:7736/admin/addManager', data, {
      headers: headers,
    });
  }

  viweManagers() {
    return this.http.get('http://localhost:7736/admin/viewManagers');
  }

  deleteManagers(_id: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
    });
    return this.http.delete<any>(
      'http://localhost:7736/admin/deletemanager/' + _id,
      { headers: headers }
    );
  }

  viweCustomers() {
    return this.http.get('http://localhost:7736/admin//viewUsers');
  }

  getBankname() {
    return this.http.get('http://localhost:7736/admin/getBankNames');
  }
}
