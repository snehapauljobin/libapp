import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BooksService } from '../books.service';
import { UserModel } from './user.model';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  Customer={
    name:'',
    email:'',
    phonenumber:'',
    password:'',
  passwordcheck:''}
  constructor(private booksservice:BooksService,private router:Router) { }

  // userItem=new UserModel(null,null,null,null,null)
  error:any;
  ngOnInit(): void {
  }
  AddUser(){
    
    this.booksservice.newUser(this.Customer)
   .subscribe(
     
     (res:any)=>{
      alert("Successfully saved the details")
      this.router.navigate(['login']);
     },
     (err:any)=>{
      alert('Already exist')
      
     
    }
    )}
}
