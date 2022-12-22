import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import {CookieService} from 'ngx-cookie-service';

const TOKEN_KEY = 'authToken';
const USERNAME_KEY = 'authUsername';
const AUTHORITIES_KEY = 'AuthAuthorities'

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  roles:Array<string> =[];
  private cookieName="";

  constructor(private cookieService:CookieService) { }

 
  public setToken(token:string):void{
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
    this.cookieService.set("cookie",token);
  }

  public getToken():string
  {
    return sessionStorage.getItem(TOKEN_KEY);
  }


  public setUserNane(nombreUsuario: string): void{
    window.sessionStorage.removeItem(USERNAME_KEY) ;
    window.sessionStorage.setItem(USERNAME_KEY,nombreUsuario);
}

public getUserName():string
{
  return sessionStorage.getItem(USERNAME_KEY)!;
}

public setAuthorities(authorities:string[]):void{
  window.sessionStorage.removeItem(AUTHORITIES_KEY);
  window.sessionStorage.setItem(AUTHORITIES_KEY,JSON.stringify(authorities))
}

public getAuthorities():string[]{
  
  
  if( sessionStorage.getItem(AUTHORITIES_KEY))
  {
    this.roles=[];
    JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach((authority:any) => {
      this.roles.push(authority);
    });
  }
  return this.roles;
}

public logOut():void{
  window.sessionStorage.clear();
  this.cookieService.deleteAll();
  window.location.reload();
}
}
