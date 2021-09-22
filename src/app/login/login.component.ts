import { Component, OnInit } from '@angular/core';
import{AuthService} from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
User={
  email:'',
  password:''
}
error:any;
  constructor(private _auth:AuthService,private router:Router) { }
ngOnInit():void{}
  loginUser(){
  
    this._auth.loginUser(this.User)
    .subscribe(
      (res:any)=>{
        localStorage.setItem('token',res.token)
        if(res.role=='admin'){
          localStorage.setItem('rolefromuser',res.role)
        }
        
        alert('Successfully logged in');
        this.router.navigate(['']);
      },
      (err:any)=>{
        alert("Credentials are not proper")
      }
    )
      
    }
  }


 
 



