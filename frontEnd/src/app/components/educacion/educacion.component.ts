import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent implements OnInit {
  //Lista con todas las educaciones
  educaciones: Educacion[] = [];
  isAdmin=false;
  constructor(private educacionService: EducacionService, private token:TokenService) {}

  ngOnInit(): void {
    this.cargarEducaciones();
    if(this.token.getAuthorities().includes("ROLE_ADMIN"))
    {
      this.isAdmin=true;
    }
  }
  cargarEducaciones(): void {
    this.educacionService.list().subscribe((data) => {
      this.educaciones = data;
    });
  }

  delete(id: number) {
    if (id != undefined) {
      this.educacionService.delete(id).subscribe(
        (data) => {
          this.cargarEducaciones();
        },
        (err) => {
          alert("Couldn't delete educacion");
        }
      );
    }
  }
}
