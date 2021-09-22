import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../books.service';
import { BookModel } from './book-model';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
books!:BookModel[];
  constructor(private booksservice:BooksService, private router:Router) { }
title:String="Books";
  ngOnInit(): void {
    this.booksservice.getBooks()
    .subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data))
    })
  }
    getindvbook(book:any){
     localStorage.setItem("bookId", book._id.toString())
     this.router.navigate(['indvbook']);
     
  }

}