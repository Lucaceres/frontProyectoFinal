import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectoServiceService {
proyectoURL= 'http://localhost:8080/api/proyecto/'
  constructor(private httpClient:HttpClient) { }
  
  public list():Observable<Proyecto[]>
  {
    return this.httpClient.get<Proyecto[]>(this.proyectoURL + 'list');
  }

  public detail(id:number):Observable<Proyecto>
  {
    return this.httpClient.get<Proyecto>(this.proyectoURL + `detail/${id}`);
  }

  public save(exp:Proyecto): Observable<any>
  {
    return this.httpClient.post<any>(this.proyectoURL + `create`, exp);
  }

  public update(id:number, exp:Proyecto):Observable<any>
  {
    return this.httpClient.put<any>(this.proyectoURL + `update/${id}`,exp);
  }

  public delete(id:number):Observable<any>
  {
    return this.httpClient.delete<any>(this.proyectoURL + `delete/${id}`);
  }
}
