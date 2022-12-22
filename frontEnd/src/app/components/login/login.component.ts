import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/model/login-request';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogged=false;


  constructor(private router:Router,private tokenService:TokenService) { }

  ngOnInit(): void {
    //Valido si tiene el token, eso quiere decir que la sesion ya esta iniciada
   
   
    if(this.tokenService.getToken())
    {
      this.isLogged=true;
    }
    
  }

  

  login()
  {
    this.router.navigate(['/login'])
  }

  logOut()
  {
    this.tokenService.logOut();
    
  }
}
