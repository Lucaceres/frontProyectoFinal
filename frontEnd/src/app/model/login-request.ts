export class LoginRequest {
    nombreUsuario:string;
    passUsuario:string;

    constructor(nombreUsuario:string,passUsuario:string){
        this.nombreUsuario = nombreUsuario;
        this.passUsuario = passUsuario;
    }
}
