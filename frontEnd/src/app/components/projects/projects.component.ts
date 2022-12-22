import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto.model';
import { ProyectoServiceService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
proyectos:Proyecto[] = [];
isAdmin=false;
  constructor(private proyectoService:ProyectoServiceService,private token:TokenService) { }
  
  ngOnInit(): void {
    this.cargarProyecto();
    if(this.token.getAuthorities().includes("ROLE_ADMIN"))
    {
      this.isAdmin=true;
    }
  }

  cargarProyecto():void{
    this.proyectoService.list().subscribe(data => {this.proyectos = data;})
    
  }

  delete(id: number)
  {
    if(id!= undefined)
    {
      this.proyectoService.delete(id).subscribe(data=>{
        this.cargarProyecto();
      }, err =>{
        alert("Couldnt delete proyecto");
      })
    }
    
  }

}
