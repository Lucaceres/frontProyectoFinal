import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto.model';
import { ProyectoServiceService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  titulo:String ='';
  descripcion:String ='';
  link:String ='';

  constructor(private proyectoService:ProyectoServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const proyecto = new Proyecto(this.titulo, this.descripcion, this.link);

    this.proyectoService.save(proyecto).subscribe(data=>{
      alert("proyecto agregado");
      this.router.navigate([''])},
      err =>{
        alert("Failed");
        this.router.navigate(['']);
      });

  }

}
