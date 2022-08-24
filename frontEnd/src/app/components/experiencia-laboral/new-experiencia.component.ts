import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExpLabServiceService } from 'src/app/service/exp-lab-service.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreExp:String ='';
  tiempoExp:String = '';
  descripcionExp:String=''
  constructor(private ExpService:ExpLabServiceService, private router:Router) { }
  
  ngOnInit(): void {
  }

  onCreate():void {
    const exp = new Experiencia(this.nombreExp,this.tiempoExp,this.descripcionExp);
    this.ExpService.save(exp).subscribe(data => {
      alert("experiencia agregada");
      this.router.navigate(['']);
    }, 
    err =>{
      alert("Failed");
      this.router.navigate(['']);
    });
  }

}