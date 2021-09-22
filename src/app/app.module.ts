import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import{TokenInterceptorService} from'./token-interceptor.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { FormsModule } from '@angular/forms';
import { AddbookComponent } from './addbook/addbook.component';
import { IndvbookComponent } from './indvbook/indvbook.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ConfirmequalValidatorDirective } from './shared/confirm-equal-validator.directive';
import { AuthorsComponent } from './authors/authors.component';
import { IndvauthorComponent } from './indvauthor/indvauthor.component';
import { UpdateauthorComponent } from './updateauthor/updateauthor.component';
import { AddauthorComponent } from './addauthor/addauthor.component';
import{AuthService} from './auth.service';
import { BooksService } from './books.service';
import { AuthGuard } from './auth.guard';
import { RoleGuardGuard } from './role-guard.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BooksComponent,
    AddbookComponent,
    IndvbookComponent,
    UpdatebookComponent,
    LoginComponent,
    SignupComponent,
    ConfirmequalValidatorDirective,
    AuthorsComponent,
    IndvauthorComponent,
    UpdateauthorComponent,
    AddauthorComponent 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService,BooksService,AuthGuard,RoleGuardGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
