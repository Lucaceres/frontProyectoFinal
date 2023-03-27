import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { LoginRequest } from '../model/login-request';
import { SignupRequest } from '../model/signup-request';
import { UsuarioInfoResponse } from '../model/usuario-info-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

authURL = "https://backend-proyecto-final.onrender.com/api/auth"

  constructor(private httpClient:HttpClient,private cookie:CookieService) { }

  public signup(nuevoUsuario:SignupRequest):Observable<any>
  {
    return this.httpClient.post<any>(this.authURL + "/signup", nuevoUsuario);
  }

  public signin(loginUsuario:LoginRequest):Observable<UsuarioInfoResponse>
  {
    return this.httpClient.post<UsuarioInfoResponse>(this.authURL + "/signin",loginUsuario/*,{withCredentials:true}*/ );
  }
  
  public signout():Observable<any>
  {
    return this.httpClient.post<any>(this.authURL + "/signout",{});
  }
  
  
}
