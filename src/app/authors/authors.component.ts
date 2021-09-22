import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Router } from '@angular/router';
import { AuthorModel } from './author-model';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  
    authors!:AuthorModel[];
      constructor(private booksservice:BooksService, private router:Router) { }
    title:String="Authors";
      ngOnInit(): void {
        this.booksservice.getAuthors()
        .subscribe((data)=>{
          this.authors=JSON.parse(JSON.stringify(data))
        })
      }
        getindvauthor(author:any){
         localStorage.setItem("authorId", author._id.toString())
         this.router.navigate(['indvauthor']);
         
      }
    
    }
