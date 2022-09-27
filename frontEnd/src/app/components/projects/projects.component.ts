import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto.model';
import { ProyectoServiceService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
proyectos:Proyecto[] = [];
  constructor(private proyectoService:ProyectoServiceService) { }

  ngOnInit(): void {
    this.cargarProyecto();
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
