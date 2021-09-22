import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http:HttpClient) { }
  getBooks(){
    
     return this.http.get("http://localhost:12349/books");
     // return this.http.get('/api/books');
  }
  getAuthors(){
     // return this.http.get('/api/authors');
      return this.http.get("http://localhost:12349/authors");
  }
  newBook(item:any){
    // return this.http.post("/api/insert", {"book":item})
    return this.http.post("http://localhost:12349/insert", {"book":item})
    .subscribe(data=>{
      console.log(data)
    })
  
    }
    newAuthor(item:any){
       // return this.http.post("/api/authors/insert", {"author":item})
       return this.http.post("http://localhost:12349/authors/insert", {"author":item})
      .subscribe(data=>{
        console.log(data)
      })
    
      }
    getindvbook(id:any){
     //   return this.http.get("/api/"+id);
      return this.http.get("http://localhost:12349/"+id);
  } 
  getindvauthor(id:any){
    //  return this.http.get("/api/authors/"+id);
      return this.http.get("http://localhost:12349/authors/"+id);
} 
  deletebook(id:any)
  {
    // return this.http.delete("/api/remove/"+id)
    return this.http.delete("http://localhost:12349/remove/"+id)

  }
  updatebook(book:any)
  {
    console.log('client update')
   // return this.http.put("/api/update",book)
    return this.http.put("http://localhost:12349/update",book)
    .subscribe(data =>{console.log(data)})
  }
 

deleteauthor(id:any)
{
   // return this.http.delete("/api/remove/authors/"+id)
   return this.http.delete("http://localhost:12349/remove/authors/"+id)

}
updateauthor(author:any)
{
  console.log('client update')
   // return this.http.put("/api/authors/update",author)
   return this.http.put("http://localhost:12349/authors/update",author)
  .subscribe(data =>{console.log(data)})
}
newUser(item:any){
   // return this.http.post("/api/signup/insert", {"user":item})
    return this.http.post("http://localhost:12349/signup/insert", {"user":item})
  // .subscribe(data=>{
  //   console.log(data)
  // })

  }
}
