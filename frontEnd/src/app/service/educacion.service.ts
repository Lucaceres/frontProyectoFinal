import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  educacionURL = 'https://backend-proyecto-final.onrender.com/api/educacion/'

  constructor(private httpClient:HttpClient) { }

  //Obtener Todas las educaciones
  public list():Observable<Educacion[]>
  {
    return this.httpClient.get<Educacion[]>(this.educacionURL + 'list');
  }
  
  //Obtener una educacion por id
  public detail(id:number):Observable<Educacion>
  {
    return this.httpClient.get<Educacion>(this.educacionURL + `detail/${id}`);
  }

  //Guardar una educacion
  public save(educacion:Educacion):Observable<any>
  {
    return this.httpClient.post<any>(this.educacionURL + 'create', educacion);
  }

  //Actualizar una educacion
  public update (id:number, educacion:Educacion):Observable<any>
  {
    return this.httpClient.put<any>(this.educacionURL + `update/${id}`, educacion);
  }

  //Borrar una educacion
  public delete(id:number):Observable<any>
  {
    return this.httpClient.delete<any>(this.httpClient + `delete/${id}`);
  }
}
