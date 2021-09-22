import { Component, OnInit } from '@angular/core';
import { BookModel } from '../books/book-model';
import { BooksService } from '../books.service';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
 
  constructor(private booksservice:BooksService,private router:Router, private http:HttpClient) { }
  imageUrl:any=undefined;
  // selectedFile:File=null;
  imagefile:any;
  image:string='';
 
  onFileSelected(event:any){
  if(event.target.files){

    var reader=new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload=(event:any)=>{
    this.imageUrl=reader.result;
    
    }
this.imagefile=<File>event.target.files[0];
    }
  

 this.image=this.imagefile.name;

 
    }
   
bookItem=new BookModel(null,null,null,null,null,null,null)

  ngOnInit(): void {
  }
  
AddBook(){
  this.bookItem.image=this.image;
  this.bookItem.imgfile=this.imageUrl;
  this.booksservice.newBook(this.bookItem);
  console.log("called");
  alert("success");
  this.router.navigate (["books"])
}
}
