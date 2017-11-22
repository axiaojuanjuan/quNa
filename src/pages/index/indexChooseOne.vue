<template>
	<div>
		<div class="choose-one-box" v-for="(item,index) in classifyInfoOne" key="item.id" :class="[{bgPink:index == 0},{bgSkyBlue:index == 1},{bgGreen:index==2}]">
			<div class="total">
				<router-link :to="item.href1">
					<spna class="title">{{item.title1}}</spna>
					<i class="iconfont icon-location_city icon"></i>
				</router-link>
			</div>
			<div class="classify">
				<a :href="item.href2">{{item.title2}}</a>
				<a :href="item.href3">{{item.title3}}</a>
				<a :href="item.href4">{{item.title4}}</a>
				<a :href="item.href5">{{item.title5}}</a>
			</div>
		</div>
	</div>
	
</template>

<script>
	export default{
		props:["classifyInfoOne"],
		data(){
			return{
				
			}
		},
		methods:{
		}
	}
</script>

<style scoped>
	.choose-one-box{
		background:green;
		display: flex;
		margin-bottom:.05rem;
	}
	.total{
		width:33.33%;
		box-shadow: 0 0 1px #fff;
	}
	.total a{
		display: inline-block;
		width:100%;
		height:.96rem;
		display: flex;
		flex-direction: column;
		justify-content:space-between;
		align-items: center;
	}
	.title{
		font-size: .16rem;
		margin-top:.15rem ;
		color:#fff;
	}
	.icon{
		display: inline-block;
		font-size: .42rem;
		color:#fff;
	}
	.classify{
		width:66.67%;
		height:.96rem;
	}
	.classify a{
		float:left;
		width:50%;
		height:50%;
		display: inline-block;
		box-shadow: inset 0 0 1px #fff;
		font-size: .16rem;
		text-align: center;
		line-height: .48rem;
		color:#fff;
	}
	.bgPink{
		background: pink;
	}
	.bgSkyBlue{
		background: skyblue;
	}
	.bgGreen{
		background: green;
	}
</style>