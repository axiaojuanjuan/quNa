<template>
	<div class='weekend-box' >
		<p class="weekend">周末去哪</p>
		<div class="weekend-con" v-for="item in weekend">
			<router-link :to="item.link + '/' +item.address">
				<img :src="item.src" alt="" />
				<p class="name">{{item.address}}</p>
				<p class="describe">{{item.name}}</p>
			</router-link>
		</div>
	</div>
	
</template>

<script>
	export default{
		props:["weekend"],
		data(){
			return{
			}
		}
	}
</script>

<style scope>
	.weekend{
		padding-left:.13rem;
		height: .4rem;
		line-height: .4rem;
		font-size: .16rem;
	}
	.weekend-con{
		background: #fff;
		margin-bottom: .05rem;
	}
	.weekend-con img{
		width: 100%;
		height:1.42rem;
	}
	.name,.describe{
		height:.3rem;
		line-height: .3rem;
		font-size: .16rem;
		padding-left:.12rem;
	}
	.describe{
		color:#ccc;
	}
</style>