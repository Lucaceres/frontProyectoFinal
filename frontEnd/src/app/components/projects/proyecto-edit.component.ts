import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto.model';
import { ProyectoServiceService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-proyecto-edit',
  templateUrl: './proyecto-edit.component.html',
  styleUrls: ['./proyecto-edit.component.css']
})
export class ProyectoEditComponent implements OnInit {
proyecto:Proyecto = null;
  constructor(private proyectoService:ProyectoServiceService, private activatedRoute: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.proyectoService.detail(id).subscribe(
      data => {
        this.proyecto = data;
      }
    )
     }

     onUpdate():void{
      const id = this.activatedRoute.snapshot.params['id'];
      this.proyectoService.update(id,this.proyecto).subscribe(data =>{
        this.router.navigate(['']); 
      }, err => {
        alert("modify error");
        this.router.navigate(['']); 
      })
     }

}
