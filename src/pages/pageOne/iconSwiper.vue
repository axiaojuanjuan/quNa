<template>
	<div>
		<swiper :options="swiperOption" ref="mySwiper">
		    <swiper-slide>
		    	<ul class="box" v-for="page in pages">
		    		<li v-for="item in page">
	    				<img class="img-style" :src="item.img" alt="" />
	    				<span class="title">{{item.title}}</span>
		    		</li>
		    	</ul>
		    </swiper-slide>
		    <div class="swiper-pagination"  slot="pagination" v-for="page in pages"></div>
		 </swiper>
		 <div>111</div>
	</div>
</template>

<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
export default {
    props:["iconsInfo"],
    data () {
	    return {
	        swiperOption: {
		        direction: 'horizontal',
		        autoHeight: true,
		        pagination: '.swiper-pagination',
		        paginationClickable: true,
		        observeParents: true
	        }
	    }
    },
    computed: {
      pages: function () {
        const pages = [];
        for (var i = 0; i < this.iconsInfo.length; i++) {
          let page = Math.floor(i / 8);
          if (!pages[page]) {
            pages[page] = [];
          }
          pages[page].push(this.iconsInfo[i]);
        }
        console.log(pages)
        return pages;
      }
    },
    components: {
      "swiper": swiper,
      "swiper-slide": swiperSlide
    }
  }
</script>

<style scoped>
	@import '~swiper/dist/css/swiper.css';
	.box{
		width:100%;
		height:0;
		padding-bottom:37.25%;
		position: relative;
		overflow: hidden;
	}
	.box li{
		width:25%;
		height:auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top:.1rem;
		float:left;
	}
	.img-style{
		width:.33rem;
		height:.33rem;
	}
	.title{
		font-size: .12rem;
		margin-top:.1rem;
	}
</style>