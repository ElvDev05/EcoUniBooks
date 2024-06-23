export class User {
    constructor( nombre, email, direccion, telefono, contrasena, edad) {
        //this._id = _id;
        this.nombre = nombre;
        this.email = email;
        this.direccion = direccion;
        this.telefono = telefono;
        this.contrasena = contrasena;
        this.edad = edad;
    }

    static FromDisplayableUser(displayableUser) {
        return new User(
            //displayableUser._id,
            displayableUser.nombre,
            displayableUser.email,
            displayableUser.direccion,
            displayableUser.telefono,
            displayableUser.contrasena,
            displayableUser.edad
        );
    }

    static toDisplayableUser(User) {
        return {
            //id: User.id,
            nombre: User.nombre,
            email: User.email,
            direccion: User.direccion,
            telefono: User.telefono,
            contrasena: User.contrasena,
            edad: User.edad
        };
    }
}