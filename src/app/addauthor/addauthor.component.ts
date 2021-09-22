import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorModel } from '../authors/author-model';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-addauthor',
  templateUrl: './addauthor.component.html',
  styleUrls: ['./addauthor.component.css']
})
export class AddauthorComponent implements OnInit {

  constructor(private booksservice:BooksService,private router:Router) { }

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
   



  authorItem=new AuthorModel(null,null,null,null,null,null,null)
  ngOnInit(): void {
  }






AddAuthor(){
  this.authorItem.image=this.image;
  this.authorItem.imgfile=this.imageUrl;
  this.booksservice.newAuthor(this.authorItem);
  console.log("called");
  alert("success");
  this.router.navigate (["authors"])
}
}
