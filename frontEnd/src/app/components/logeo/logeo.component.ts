import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/model/login-request';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-logeo',
  templateUrl: './logeo.component.html',
  styleUrls: ['./logeo.component.css']
})
export class LogeoComponent implements OnInit {
  isLogged = false;
isLogginfail = false;
loginUsuario:LoginRequest;
nombreUsuario : string;
passUsuario : string;
roles: string[] = [];
errMsj: string;

  constructor(private router:Router, private tokenService:TokenService, private authService:AuthService) { }

  ngOnInit(): void {
    
    if(this.tokenService.getToken())
    {
      this.isLogged = true;
      this.isLogginfail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin():void{
    this.loginUsuario = new LoginRequest(this.nombreUsuario,this.passUsuario);
    this.authService.signin(this.loginUsuario).subscribe(data => {
      this.isLogged=true;
      this.isLogginfail=false;
      this.tokenService.setUserNane(data.nombreUsuario);
      this.tokenService.setAuthorities(data.roles);
      this.tokenService.setToken(data.token);
      this.roles = data.roles;
      this.router.navigate([''])

      
    }, err =>{
      this.isLogged = false;
      this.isLogginfail=true;
      this.errMsj = err.error.mensaje;
      console.log(this.errMsj)
    })
  }

  

}
