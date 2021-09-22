import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { BookModel } from '../books/book-model';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-indvbook',
  templateUrl: './indvbook.component.html',
  styleUrls: ['./indvbook.component.css']
})
export class IndvbookComponent implements OnInit {
  //  book!:BookModel[];
  constructor(private booksservice:BooksService,private router:Router,public _auth:AuthService ) { }
  bookItem={
    title:'',
    author:'',
    genre:'',
     language:'',
     info:'',
     image:'',
     imgfile:''

}
  ngOnInit(): void {
    let bookId=localStorage.getItem("bookId");
    this.booksservice.getindvbook(bookId)
    .subscribe((data)=>{
      this.bookItem=JSON.parse(JSON.stringify(data))
    })
    
  }


  deletebook(book:any)
  {
    this.booksservice.deletebook(book._id)
      .subscribe((data:any) => {
        this.router.navigate (["books"])
        // this.books = this.books.filter(p => p !== book);
      })

}
updatebook(book:any)
{
  localStorage.setItem("updateBookId",book._id.toString() )
      this.router.navigate (["updatebook"])

}
}