export class Experiencia {
    id?:number;
    nombreExp:String;
    tiempoExp:String;
    descripcionExp:String;

    constructor(nombreExp:String, tiempoExp:String, descripcionExp:String)
    {
        this.nombreExp = nombreExp;
        this.tiempoExp= tiempoExp;
        this.descripcionExp = descripcionExp;
    }
}
