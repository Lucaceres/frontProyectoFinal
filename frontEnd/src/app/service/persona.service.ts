import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  withCredentials: true //this is required so that Angular returns the Cookies received from the server. The server sends cookies in Set-Cookie header. Without this, Angular will ignore the Set-Cookie header
}
@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  URL = 'https://backend-proyecto-final.onrender.com/api/persona/';

  constructor(private http: HttpClient) {}
  
  public getPersona():Observable<persona>
    {
      return this.http.get<persona>(this.URL + 'get/1');
    }
}
