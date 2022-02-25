<template>
	<div>
		<h2>¿Cuál es tu nombre?</h2>
		<form action="">
			<label for="nombre">Nombre</label>
			<input type="text" name="nombre" v-model="nombre" />
			<label for="nombre">Segundo Nombre</label>
			<input type="text" name="segundoNombre" v-model="segundoNombre" />
			<label for="nombre">Apellido Paterno</label>
			<input type="text" name="apellidoPaterno" v-model="apellidoPaterno" />
			<label for="nombre">Apellido Materno</label>
			<input type="text" name="apellidoMaterno" v-model="apellidoMaterno" />
			<button @click.prevent="saveNameData">Siguiente</button>
		</form>
	</div>
</template>
<script>
	import { mapActions } from 'pinia'
	import { useUserDataStore } from '@/stores/user'

	export default {
		data(){
			return {
				nombre:'',
				segundoNombre:'',
				apellidoPaterno:'',
				apellidoMaterno:''
			}
		},
	  methods: {
	    ...mapActions(useUserDataStore, ['storeNameData']),
	    saveNameData(){
	    	this.storeNameData(this.nombre, this.segundoNombre, this.apellidoPaterno, this.apellidoMaterno);
	    	this.$router.push({name:'birth-data'})
	    }
	  },
	}
</script>