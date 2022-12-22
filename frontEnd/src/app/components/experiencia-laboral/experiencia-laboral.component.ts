import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExpLabServiceService } from 'src/app/service/exp-lab-service.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {
    isAdmin=false;
    experiencias:Experiencia[] = [];
   
    
  constructor(private expService:ExpLabServiceService,private token: TokenService) { }

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.token.getAuthorities().includes("ROLE_ADMIN"))
    {
      this.isAdmin=true;
    }
    
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

