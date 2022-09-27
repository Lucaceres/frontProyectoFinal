export class Proyecto {
    id?:number;
    titulo:String;
    descripcion: String;
    link:String;

    constructor(titulo:String, descripcion:String, link:String)
    {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.link = link;
    }
}
