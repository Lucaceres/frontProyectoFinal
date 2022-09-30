import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {

  grado:String ='';
  anioInicio:String ='';
  anioFin:String ='';
  descripcion:String ='';

  constructor(private educacionService:EducacionService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate():void
  {
    const educacion = new Educacion(this.grado, this.anioInicio, this.anioFin, this.descripcion);

    this.educacionService.save(educacion).subscribe(data => {
      alert("educacion agregada con exito");
      this.router.navigate(['']);
    },
    err =>{
      alert("Failed");
      this.router.navigate([""]);
    })
  }

}
