<template>
	<div class="swiper">
		<swiper :options="swiperOption">
		    <swiper-slide v-for="item in imgInfo" key="item.id">
		    	<div class="img-box">
		    		<img :src="item.img" alt="哈哈哈" />
		    	</div>
		    </swiper-slide>
		    <div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
	
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default{
		props:["imgInfo"],
		data(){
			return{
				swiperOption: {
		            direction: 'horizontal',//水平方向轮播
			        autoHeight: true,//自适应高度
			        pagination: '.swiper-pagination',//游轮播圆点
			        paginationClickable: true,//轮播圆点是否可以点击
			        observeParents: true
		       }
			}
		},
		components: {
		    "swiper":swiper,
		    "swiper-slide":swiperSlide
		}
	}
</script>

<style scoped>
	@import '~swiper/dist/css/swiper.css';
	.swiper{
		background: #fff;
	}
	 .img-box{
	 	background: #eee;
	    overflow: hidden;
	    width: 100%;
	    padding-bottom: 31.25%;
	    height: 0;
	    position: relative;
	 }
	 .img-box img{
	 	width:100%;
	 }
</style>
<style>
	/*.swiper-pagination-bullet-active{
	 	background: red!important;
	 }*/
</style>