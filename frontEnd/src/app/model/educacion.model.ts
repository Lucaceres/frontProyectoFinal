export class Educacion {
    id?:number;
    grado:String;
    anioInicio:String;
    anioFin:String;
    descripcion:String;
constructor(grado:String, anioInicio:String, anioFin:String, descripcion:String)
{
    this.grado = grado;
    this.anioInicio = anioInicio;
    this.anioFin = anioFin;
    this.descripcion = descripcion;
}
}
