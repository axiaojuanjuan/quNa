<template>
	<div class="hot-recommendation">
		<p class="hot-title">热门推荐</p>
		<div class="hot-list" v-for="item in hotList" key=item.id>
			<div class="list-img">
				<a href="">
					<img :src="item.imgUrl" alt=""  />
				</a>
			</div>
			<div class="hot-con">
				<div class="name">{{item.mask}}</div>
				<div class="describe">{{item.name}}</div>
				<div class="price-box">
					<span class="symple">￥</span>
					<span  class="price">{{item.priceNum}}</span>
					<span class="qi">起</span>
				</div>
			</div>
		</div>
		<div class="more" @click="reloadMOre">点击加载更多</div>
	</div>
</template>

<script>
	export default{
		props:["hotList"],
		data(){
			return{
				
			}
		},
		methods:{
			reloadMOre(){
				this.$emit("moreInfo")
			}
		}
	}
</script>

<style scoped>
	.hot-recommendation{
		
	}
	.hot-title{
		font-size: .16rem;
		height:.4rem;
		line-height: .4rem;
		padding-left:.13rem;
	}
	.hot-list{
		padding:.12rem;
		display: flex;
		font-size: .16rem;
		background: #fff;
		border-bottom:1px solid #ddd
	}
	.list-img{
		width:.7rem;
		height:.7rem;
	}
	.list-img img{
		width:.7rem;
		height:.7rem;
	}
	.hot-con{
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		margin-left:.08rem
	}
	.describe,.qi{
		color:#9e9e9e;
	}
	.describe{
		width:2.7rem;
		overflow: hidden;
	    margin-bottom: .05rem;
	    height: .2rem;
	    line-height: .2rem;
	    color: #9e9e9e;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.symple,.price{
		color:#ff8300;
	}
	.more{
		text-align: center;
		font-size:.16rem;
		color:#00afc7;
		height:.4rem;
		line-height: .4rem;
		background:#fff;
	}
</style>