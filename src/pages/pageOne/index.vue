<template>
	<div>
		<page-header-search></page-header-search>
		<img-swiper :imgInfo = "imgInfo"></img-swiper>
		<icon-swiper :iconInfo = "iconInfo"></icon-swiper>
	</div>
</template>

<script>
	import pageHeaderSearch from "../../components/pageHeaderSearch"
	import swiper from "../../components/swiper"
	import iconSwiper from "./iconSwiper"
	export default{
		data(){
			return{
				imgInfo:[],
				iconInfo:[]
			}
		},
		created(){
			this.$http.get("/static/mock/pageOne.json").then(function(res){
				const data = res.body.data
				this.imgInfo = data.imgSwiper;
				this.iconInfo = data.iconSwiper;
			})
		},
		components:{
			"page-header-search":pageHeaderSearch,
			"img-swiper":swiper,
			"icon-swiper":iconSwiper
		}
	}
</script>

<style>
	@import "../../assets/icon/iconfont.css";
</style>