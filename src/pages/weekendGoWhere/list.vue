<template>
	<div class='weekend-box' >
		<div class="weekend-con">
			<img src="http://img1.qunarzz.com/sight/p0/1411/43/dea8b51719a4a69b68777baa68c146e4.water.jpg_640x276_775c187f.jpg" alt="" />
			<p class="name">啦啦啦啦</p>
			<p class="describe">哈哈哈哈哈</p>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped>
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