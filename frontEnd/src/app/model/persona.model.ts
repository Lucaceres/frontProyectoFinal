export class persona {
//el signo de pregunta indica que no es necesario para no tener problemas
    id?:number;
    nombre:String;
    apellido:String;


    constructor(nombre:String,apellido:String)
    {
        this.nombre=nombre;
        this.apellido=apellido;
    }
}
