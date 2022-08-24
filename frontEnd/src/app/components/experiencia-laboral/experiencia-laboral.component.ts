import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExpLabServiceService } from 'src/app/service/exp-lab-service.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {

    experiencias:Experiencia[] = [];


  constructor(private expService:ExpLabServiceService) { }

  ngOnInit(): void {
    this.cargarExperiencia()
  }
  cargarExperiencia():void{
    this.expService.list().subscribe(data => {this.experiencias = data;})
    
  }

  delete(id: number)
  {
    if(id!= undefined)
    {
      this.expService.delete(id).subscribe(data=>{
        this.cargarExperiencia();
      }, err =>{
        alert("Couldnt delete experience");
      })
    }
    
  }
  
}

