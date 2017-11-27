<template>
	<div>
		<page-header-search></page-header-search>
		<img-swiper :imgInfo = "imgInfo"></img-swiper>
		<icon-swiper :iconInfo = "iconInfo"></icon-swiper>
		<location></location>
		<active></active>
		<hot-recommendation :hotList = "hotList" @moreInfo = "getMore"></hot-recommendation>
		<weekend :weekend = "weekend"></weekend>
	</div>
</template>

<script>
	import pageHeaderSearch from "../../components/pageHeaderSearch"
	import swiper from "../../components/swiper"
	import iconSwiper from "./iconSwiper"
	import location from "./location"
	import active from "./active"
	import hotRecommendation from"./hotRecommendation"
	import weekend from"./weekend"
	
	export default{
		data(){
			return{
				imgInfo:[],
				iconInfo:[],
				hotList:[],
				hotList2:[],
				weekend:[],
			}
		},
		created(){
			this.$http.get("/static/mock/pageOne.json").then(function(res){
				const data = res.body.data
				this.imgInfo = data.imgSwiper;
				this.iconInfo = data.iconSwiper;
				this.hotList = data.hotInfo1;
				this.hotList2 = data.hotInfo2;
				this.weekend = data.weekend
			})
		},
		methods:{
			getMore(){
				this.hotList = this.hotList.concat(this.hotList2)
			}
		},
		components:{
			"page-header-search":pageHeaderSearch,
			"img-swiper":swiper,
			"icon-swiper":iconSwiper,
			"location":location,
			"active":active,
			"hot-recommendation":hotRecommendation,
			"weekend":weekend
		}
	}
</script>

<style>
	@import "../../assets/icon/iconfont.css";
</style>