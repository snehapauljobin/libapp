import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Router } from '@angular/router';
import { BookModel } from '../books/book-model';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {

  constructor(private booksservice:BooksService,private router:Router ) { }
  bookItems={
    title:'',
    author:'',
    genre:'',
     language:'',
     info:'',
     image:'',
     imgfile:''

}
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

  ngOnInit(): void {
    let bookId=localStorage.getItem("updateBookId");
    this.booksservice.getindvbook(bookId)
    .subscribe((data)=>{
      this.bookItems=JSON.parse(JSON.stringify(data))
    })
    
  }
  updatebook(){
    this.bookItems.image=this.image;
    this.bookItems.imgfile=this.imageUrl;
    this.booksservice.updatebook(this.bookItems);   
    alert("Success");
    this.router.navigate(['books']);
  }



}
