import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../books.service';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-indvauthor',
  templateUrl: './indvauthor.component.html',
  styleUrls: ['./indvauthor.component.css']
})
export class IndvauthorComponent implements OnInit {
  constructor(private booksservice:BooksService,private router:Router,public _auth:AuthService ) { }
  authorItem={
    author:'',
    genre:'',
    books:'',
     language:'',
     info:'',
     image:'',
     imgfile:''

}
  ngOnInit(): void {
    let authorId=localStorage.getItem("authorId");
    this.booksservice.getindvauthor(authorId)
    .subscribe((data)=>{
      this.authorItem=JSON.parse(JSON.stringify(data))
    })
    
  }


  deleteauthor(author:any)
  {
    this.booksservice.deleteauthor(author._id)
      .subscribe((data:any) => {
        this.router.navigate (["authors"])
        // this.books = this.books.filter(p => p !== book);
      })

}
updateauthor(author:any)
{
  localStorage.setItem("updateAuthorId",author._id.toString() )
      this.router.navigate (["updateauthor"])

}
}