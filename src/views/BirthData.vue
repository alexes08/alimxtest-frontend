<template>
	<div class="component-container">
		<h2>¿Cuál es tu fecha de nacimiento?</h2>
		<form action="">
			<label for="dia">Día</label>
			<input type="number" name="dia" min="1" max="31" v-model="dia" />
			<label for="mes">Mes</label>
			<input type="number" name="mes" min="1" max="12" v-model="mes" />
			<label for="anio">Año</label>
			<input type="text" name="anio" v-model="anio" />			
			<button @click.prevent="saveBirthData">Siguiente</button>
		</form>
	</div>
</template>
<script>
	import { mapActions } from 'pinia'
	import { useUserDataStore } from '@/stores/user'

	export default {
		data(){
			return {
				dia:'',
				mes:'',
				anio:''
			}
		},
	  methods: {
	    ...mapActions(useUserDataStore, ['storeBirthData']),
	    saveBirthData(){
	    	var date = new Date(`${this.anio}-${this.mes}-${this.dia} 00:00:00`);
	    	this.storeBirthData(this.dia, this.mes, this.anio);
	    	this.$router.push({name:'contact-data'})
	    }
	  },
	}
</script>