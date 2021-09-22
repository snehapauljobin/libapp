import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardGuard implements CanActivate {
  constructor(private _auth:AuthService, private _router:Router){}
  canActivate():boolean{
    if(this. _auth.roleIn())
    {
      return true
    }
    else{this._router.navigate([''])
    return false
  }
    
}} 
 







  
  // private isAuthorized(route: ActivatedRouteSnapshot):boolean{
  //  let roles=[];
   
  //  roles=<any>localStorage.getItem('rolefromuser');
  //  console.log(roles);
  //  return this.roles.includes('route');

  //   const expectedRoles=route.data.expectedRoles;
  //   const roleMatches=roles.findIndex((role:any)=>expectedRoles.indexOf(role) !==-1);
  //   return roleMatches < 0 ? false:true;
   
// }
// }