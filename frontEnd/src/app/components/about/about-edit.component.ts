import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-about-edit',
  templateUrl: './about-edit.component.html',
  styleUrls: ['./about-edit.component.css']
})
export class AboutEditComponent implements OnInit {
person:persona=null;
  constructor(private personaService:PersonaService, private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    //const id = this.activatedRoute.snapshot.params['id'];
   // this.proyectoService.detail(id).subscribe(
    //  data => {
     //   this.proyecto = data;
    //  }
      this.personaService.getPersona().subscribe(
        data=>{
          this.person = data;
        }
      );
  }

  onUpdate():void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaService.update(this.person).subscribe(data =>{
      this.router.navigate(['']); 
    }, err => {
      alert("modify error");
      this.router.navigate(['']); 
    })
   }

}
