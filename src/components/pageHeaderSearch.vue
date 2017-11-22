<template>
	<div class="head">
		<i class="iconfont icon-iconfontback icon"></i>
		<input type="text" class="inp" placeholder="请输入地点"/>
		<div class="chose-city">
			<span>北京</span>
			<i class="iconfont icon-icon-up icon"></i>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.head{
		height:.44rem;
		background: #007AFF;
		display: flex;
		justify-content: space-around;
		align-items: center
	}
	.icon{
		font-size: .21rem;
		color:#fff;
	}
	.inp{
		width:70%;
		height:80%;
		border: none;
		outline: hidden;
		color:#D3D4D6;
		font-size: .16rem;
		padding-left:.1rem;
	}
	.chose-city{
		color:#fff;
		font-size: .16rem;
	}
</style>