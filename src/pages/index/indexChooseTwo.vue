<template>
	<div class="box">
		<a :href="classifyInfoTwo.href1">{{classifyInfoTwo.title1}}</a>
		<a :href="classifyInfoTwo.href2">{{classifyInfoTwo.title2}}</a>
		<a :href="classifyInfoTwo.href3">{{classifyInfoTwo.title3}}</a>
	</div>
</template>

<script>
	export default{
		props:["classifyInfoTwo"],
		data(){
			return{
				
			}
		}
		
		
	}
</script>

<style scoped>
	.box{
		width: 100%;
		height:.48rem;
		display: flex;
		justify-content: center;
		align-items: center;
		background: orange;
	}
	.box a{
		display: inline-block;
		width: 33.33%;
		height:.48rem;
		font-size: .16rem;
		text-align: center;
		line-height: .48rem;
		color:#fff;
		box-shadow: 0 0 1px #fff;
	}
</style>