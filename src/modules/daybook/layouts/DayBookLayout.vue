<template>
	<Navbar/>

	<div v-if="isLoading" class="row justify-content-md-center">
		<div class="col-3 alert-info text-center mt-5">
			Espere por favor...
			<h3 class="mt-2">
				<i class="fa fa-spin fa-sync"></i>
			</h3>
		</div>
	</div>

	<div class="d-flex" v-else>
		<div class="col-4">
			<EntryList />
		</div>
		<div class="col">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>

import { defineAsyncComponent } from 'vue'
import {  mapState, mapActions } from 'vuex'

export default {

	computed:{
		...mapState('journal',['isLoading']),
	},
    components:{
        Navbar: defineAsyncComponent(() => import(/*webpackChunkName: "Navbar-daybook"*/'../components/Navbar')),
		EntryList: defineAsyncComponent(() => import(/*webpackChunkName: "Navbar-daybook"*/'../components/EntryList')),
    },
	methods:{
		// isLoading(){
		...mapActions('journal', ['loadEntries']),
		// },
	},
	created(){
		this.loadEntries()
	}
}
</script>

<style>

</style>