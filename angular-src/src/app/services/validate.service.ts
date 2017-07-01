import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

	constructor() { }

	val_not_empty(user){
		let msj = "";
		if(user.name == undefined) {
			msj += "<p>Nombre</p>";
		}
		if(user.email == undefined ) {
			msj += "<p>Correo</p>";
		}
		if(user.password == undefined) {
			msj += "<p>Contraseña</p>";
		}
		if(user.username == undefined) {
			msj += "<p>Username</p>";
		}
		return msj;		
	}
	val_Email(email){
		const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if(!re.test(email)) {
			return {success : false , msj: "campos del email invalidos"};
		}else{
			return {success : true , msj: ""};
		}
	}
	val_pass_equal(pass1,pass2){
		if(pass1 === pass2) {
			return {success : true , msj: ""};
		}else{
			return {success : false , msj: "Las contraseñas no son iguales"};
		}
	}
}
