<template>
	<div class="location-box">
		<div class="location content">
			<i class="iconfont icon-dingwei size"></i>
			<span>定位</span>
		</div>
		<div class="hotSpring content">
			<i class="iconfont icon-wangluo size"></i>
			<span>五折泡温泉</span>
		</div>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style scoped>
	.location-box{
		height:.49rem;
		background: #fff;
	}
	.location-box{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.content{
		width:50%;
		height:.49rem;
		display: flex;
		justify-content: center;
		align-items: center;
		box-sizing: border-box;
		border-top: 1px solid #ddd;
	}
	.location{
		border-right:1px solid #ddd;
	}
	.size{
		font-size: .16rem;
		color:#C0C0C0;
		margin-right:.1rem;
	}
	span{
		font-size: .16rem;
	}
</style>