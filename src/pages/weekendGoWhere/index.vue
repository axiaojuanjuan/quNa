<template>
	<div>
		<index-top :adress="adress"></index-top>
		<list></list>
	</div>
</template>

<script>
	import indexTop from "./header"
	import list from "./list"
	export default{
		data(){
			return{
				adress:this.$route.params.city
			}
		},
		components:{
			"index-top":indexTop,
			"list":list
		}
	}
	
</script>


<style scoped>
	 
</style>

























