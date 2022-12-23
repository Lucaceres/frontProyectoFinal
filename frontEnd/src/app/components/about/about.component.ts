import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 isAdmin=false;
  persona:persona = new persona("","","");

  constructor( public personaService:PersonaService,private token:TokenService ) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data})
    if(this.token.getAuthorities().includes("ROLE_ADMIN"))
    {
      this.isAdmin=true;
    }
  }

}
