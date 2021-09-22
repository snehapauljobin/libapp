import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { IndvbookComponent } from './indvbook/indvbook.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { IndvauthorComponent } from './indvauthor/indvauthor.component';
import { UpdateauthorComponent } from './updateauthor/updateauthor.component';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { AuthGuard } from './auth.guard';
import { RoleGuardGuard } from './role-guard.guard';

const routes: Routes = [
  
    {
      path:'',
      component:HomeComponent
    },
    {
      path:'home',
      component:HomeComponent
    },
   {
     path:'books',
     component:BooksComponent
  },
   {
     path:'addbook',
     canActivate:[AuthGuard,RoleGuardGuard],
     component: AddbookComponent
    },
   {
     path:'addauthor', 
     canActivate:[AuthGuard,RoleGuardGuard],
   component:AddauthorComponent
  },
   {
     path:'indvbook',
     component:IndvbookComponent
    },
   {
     path:'indvauthor',
     component:IndvauthorComponent
    },
   {
     path:'updatebook',
     component:UpdatebookComponent
    },
   {
     path:'updateauthor',
     component:UpdateauthorComponent
    },
   {
     path:'login',
     component:LoginComponent
  },
   {
     path:'signup',
     component:SignupComponent
  },
   {
     path:'authors',
     component:AuthorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

















