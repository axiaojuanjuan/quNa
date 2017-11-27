<template>
	<div>
		<div class="head">{{adress}}</div>
	</div>
</template>

<script>
	export default{
		props:["adress"],
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped>
	.head{
		height:.4rem;
		line-height: .4rem;
		text-align: center;
		color: #fff;
		background:#00bcd4;
		font-size: .16rem;
	}
</style>