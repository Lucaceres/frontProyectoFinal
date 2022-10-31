export class UsuarioInfoResponse {
    id?:number;
    nombreUsuario:string;
    roles:string[];
    token:string;

    constructor(id:number,nombreUsuario:string,roles:string[],token:string)
    {
        this.id = id;
        this.nombreUsuario = nombreUsuario;
        this.roles = roles;
        this.token = token;
    }
}
