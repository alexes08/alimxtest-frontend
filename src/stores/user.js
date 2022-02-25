import { defineStore } from 'pinia'

export const useUserDataStore = defineStore({
	id:'user',
	state: () => ({
		userData:null,
	  email:'',
	  nombre:'',
	  segundoNombre:'',
	  apellidoPaterno:'',
	  apellidoMaterno:'',
	  fechaNacimiento:'',
	  telefono:''
	}),
	getters:{
		userInfo: function (state) {
			const userInfo = {
									'nombre':state.nombre,
									'segundoNombre':state.segundoNombre,
									'apellidoPaterno':state.apellidoPaterno,
									'apellidoMaterno':state.apellidoMaterno,
									'fechaNacimiento':state.fechaNacimiento,
									'email':state.email,
									'telefono':state.telefono
									}
			return userInfo
		}
	},
	actions: {
    storeUser(userInfo) {
      console.log(userInfo);
    },
    storeNameData(nombre, segundoNombre, apellidoPaterno, apellidoMaterno){
    	this.nombre = nombre
    	this.segundoNombre = segundoNombre
    	this.apellidoPaterno = apellidoPaterno
    	this.apellidoMaterno = apellidoMaterno
    },
    storeBirthData(dia,mes,anio){
    	var date = new Date(`${anio}-${mes}-${dia} 00:00:00`);
    	this.fechaNacimiento = date.toISOString().slice(0, 19).replace('T', ' ');
    },
    storeContactData(email,telefono){
    	this.email = email
    	this.telefono = telefono
    }
  }
})