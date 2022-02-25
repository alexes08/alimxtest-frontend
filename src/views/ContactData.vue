<template>
	<div>
		<h2>Datos de contacto</h2>
		<form action="">
			<label for="email">Email</label>
			<input type="email" name="email" v-model="email" />
			<label for="telefono">Teléfono</label>
			<input type="phone" name="telefono" v-model="telefono" />
			<button @click.prevent="saveContactData">Guardar</button>
		</form>
		<div v-if="datosCorrectos">
			<h2>Si tus datos son correctos, por favor iniciemos</h2>
			<ul>
				<li>Nombre: {{ `${userInfo.nombre} ${userInfo.segundoNombre} ${userInfo.apellidoPaterno} ${userInfo.apellidoMaterno}` }}</li>
				<li>Email: {{ `${userInfo.email}` }}</li>
				<li>Teléfono: {{ `${userInfo.telefono}` }}</li>
			</ul>
			<form action="" v-if="!savedServer">
				<button @click.prevent="storeToDataBase">Iniciar</button>
			</form>
			<small v-html="response">
				
			</small>
		</div>
		
	</div>
</template>
<script>
	import { mapActions, mapState } from 'pinia'
	import { useUserDataStore } from '@/stores/user'
	import axios from 'axios'

	export default {
		data(){
			return {
				email:'',
				telefono:'',
				datosCorrectos: false,
				response:'',
				savedServer:false
			}
		},
		computed:{
			...mapState(useUserDataStore, ['userInfo']),
		},
	  methods: {
	    ...mapActions(useUserDataStore, ['storeContactData']),
	    saveContactData(){
	    	this.datosCorrectos = true;
	    	this.storeContactData(this.email, this.telefono);
	    	//this.$router.push({name:'contact-data'})
	    },
	    async storeToDataBase(){
	    	const scope = this
	    	await axios.post('http://localhost:3000/users/', {
			    email: scope.userInfo.email,
			    nombre: scope.userInfo.nombre,
			    segundoNombre: scope.userInfo.segundoNombre,
			    apellidoPaterno: scope.userInfo.apellidoPaterno,
			    apellidoMaterno: scope.userInfo.apellidoMaterno,
			    fechaNacimiento: scope.userInfo.fechaNacimiento,
			    telefono: scope.userInfo.telefono
			  })
			  .then(function (response) {
			    scope.savedServer = true
			    scope.response = `Server response: ${response.status}`
			  })
			  .catch(function (error) {
			    console.log(error);
			    scope.response = error.message
			  });
	    }
	  },
	}
</script>