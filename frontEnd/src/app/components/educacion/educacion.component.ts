import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent implements OnInit {
  //Lista con todas las educaciones
  educaciones: Educacion[] = [];

  constructor(private educacionService: EducacionService) {}

  ngOnInit(): void {
    this.cargarEducaciones();
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
