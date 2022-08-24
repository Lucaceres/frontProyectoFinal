import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExpLabServiceService } from 'src/app/service/exp-lab-service.service';

@Component({
  selector: 'app-experiencia-edit',
  templateUrl: './experiencia-edit.component.html',
  styleUrls: ['./experiencia-edit.component.css']
})
export class ExperienciaEditComponent implements OnInit {
  expLab : Experiencia =null;

  constructor(private experienciaService:ExpLabServiceService, private activatedRouter: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaService.detail(id).subscribe(
      data => {
        this.expLab = data;
      }, err =>{
        alert("modify error");
      this.router.navigate(['']); 
      }
    )
  }

  onUpdate():void
  {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaService.update(id,this.expLab).subscribe(data =>{
      this.router.navigate(['']); 
    }, err => {
      alert("modify error");
      this.router.navigate(['']); 
    })
  }

}
