<template>
	<div>
		<div class="banner">
			<a href="">
				<img src="https://source.qunarzz.com/site/images/wap/home/recommend/default_banner.png" alt="" />
			</a>
		</div>
		<index-choose-one :classifyInfoOne="classifyInfoOne"></index-choose-one>
		<index-choose-two :classifyInfoTwo="classifyInfoTwo"></index-choose-two>
		<section-item></section-item>
		
		<div class="bottom">
			<span>联系我们为您</span>
			<span>为您服务</span>
			<span>电话：123456789</span>
		</div>
	</div>
	
</template>

<script>
	import indexChooseOne from "./indexChooseOne"
	import indexChooseTwo from "./indexChooseTwo"
	import sectionItem from "./sectionItem"
	export default{
		data(){
			return{
				classifyInfoOne:[],
				classifyInfoTwo:[]
			}
		},
		methods:{
			
		},
		components:{
            "index-choose-one": indexChooseOne,
            "index-choose-two":indexChooseTwo,
            "section-item":sectionItem
      },
	  created(){
		this.$http.get("/static/mock/index.json").then(res => {
			const data = res.body.data;
			this.classifyInfoOne = data.classifyOne
			this.classifyInfoTwo = data.classifyTwo
		})
	  }
	}
</script>

<style scoped>
	@import "../../assets/icon/iconfont.css";
	.banner{
		width:100%;
	}
	.banner img{
		width:100%;
	}
	.ad-bottom{
		width:100%;
		height:.51rem;
	}
	.ad-bottom img{
		width:100%;
		height:100%;
	}
	.bottom{
		width: 100%;
		margin-top:.1rem;
		display: flex;
		justify-content: space-around;
		align-items: center;
		
	}
	.bottom span{
		font-size: .16rem;
	}
	
</style>