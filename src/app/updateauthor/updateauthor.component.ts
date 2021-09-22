import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateauthor',
  templateUrl: './updateauthor.component.html',
  styleUrls: ['./updateauthor.component.css']
})
export class UpdateauthorComponent implements OnInit {

  
  constructor(private booksservice:BooksService,private router:Router ) { }
//   authorItems={
//     author:'',
//     genre:'',
//     books:'',
//      language:'',
//      info:'',
//      image:''

// }
//   ngOnInit(): void {
//     let authorId=localStorage.getItem("updateAuthorId");
//     this.booksservice.getindvauthor(authorId)
//     .subscribe((data)=>{
//       this.authorItems=JSON.parse(JSON.stringify(data))
//     })
    
//   }
//   updateauthor(){
//     this.booksservice.updateauthor(this.authorItems);   
//     alert("Success");
//     this.router.navigate(['authors']);
//   }



// }
  authorItems={
    author:'',
    genre:'',
    books:'',
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
  let authorId=localStorage.getItem("updateAuthorId");
  this.booksservice.getindvauthor(authorId)
  .subscribe((data)=>{
    this.authorItems=JSON.parse(JSON.stringify(data))
  })
  
}
updateauthor(){
  this.authorItems.image=this.image;
  this.authorItems.imgfile=this.imageUrl;
  this.booksservice.updateauthor(this.authorItems);   
  alert("Success");
  this.router.navigate(['authors']);
}



}