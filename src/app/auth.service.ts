import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
loginUser(customer:any){
   // return this.http.post<any>('/api/login',customer)
    return this.http.post<any>("http://localhost:12349/login",customer)
 
}
  constructor(private http: HttpClient) { }
    loggedIn()
    {
      return!!localStorage.getItem('token')
    }
    getToken(){
      return localStorage.getItem('token')
    }
    roleIn(){
      return!! localStorage.getItem('rolefromuser')
    }
  }
  

