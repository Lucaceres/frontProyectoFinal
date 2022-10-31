export class persona {
//el signo de pregunta indica que no es necesario,
// en este caso se utiliza para no tener problemas
    id?:number;
    nombre:String;
    apellido:String;
    acerca:String;


    constructor(nombre:String,apellido:String,acerca:String)
    {
        this.nombre=nombre;
        this.apellido=apellido;
        this.acerca=acerca;
    }
}
