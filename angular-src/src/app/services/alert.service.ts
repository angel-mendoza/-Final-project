import { Injectable } from '@angular/core';
import swal from 'sweetalert2';

@Injectable()
export class AlertService {

	constructor() { }
	/*
	funcion de alerta generica los campos que recive son
	title: titulo que tendra la modal
	type: te muestra el icono que mostrara la modal
	text: mensaje que se mostrar
	timer: pasar el tiempo que durara abierta la modal, sino pasar NULL
	showConfirmButton: true para que aparaesca el btn de confirmacion false para que no aparesca 
	mas info: https://www.npmjs.com/package/sweetalert2
	*/
	fnAlert(titulo, tipo, mjs, tiempo, btn){
		swal({
			title: titulo,
			type: tipo,
			text: mjs,
			timer: tiempo,
			showConfirmButton: btn
		});
	}
	fn2(titulo){
		swal({
		  title: titulo,
		});
	}
	fnValidateForm(a){
		let msj = "";
		for (let entry of a) {
		    //console.log(entry); // 1, "string", false
		    msj += "<p>"+"hola mundo"+"</p>";
		}
		alert2(msj);

		function alert1(texto) {
			swal({
				//text: msj,
				type: "warning",
				showConfirmButton: true,
				html: texto
				
			});
		}
		function alert2(texto) {
			swal({
				//text: msj,
				type: "error",
				showConfirmButton: true,
				html: texto
				
			});
		}

	}
	/*
	se usa en conjunto de la funcion para validar imputs vacios, es importante que el parametro txt que recibe sea un string 
	con etiquetas <p></p> intecaladas, revisar el archivo validate.service.ts funcion validateRegister 
	*/
	fnAlertEmptyImput(txt){
		swal({
			//text: msj,
			title: "Los siguientes campos son obligatorios:",
			type: "warning",
			showConfirmButton: true,
			html: txt
		});
	}
}
