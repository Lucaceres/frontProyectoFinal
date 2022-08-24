import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExpLabServiceService {
  URLxp = 'http://localhost:8080/explab/'

  constructor(private httpClient:HttpClient) { }

  public list():Observable<Experiencia[]>
  {
    return this.httpClient.get<Experiencia[]>(this.URLxp + 'list');
  }

  public detail(id:number):Observable<Experiencia>
  {
    return this.httpClient.get<Experiencia>(this.URLxp + `detail/${id}`);
  }

  public save(exp:Experiencia): Observable<any>
  {
    return this.httpClient.post<any>(this.URLxp + `create`, exp);
  }

  public update(id:number, exp:Experiencia):Observable<any>
  {
    return this.httpClient.put<any>(this.URLxp + `update/${id}`,exp);
  }

  public delete(id:number):Observable<any>
  {
    return this.httpClient.delete<any>(this.URLxp + `delete/${id}`);
  }
}
