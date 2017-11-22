<template>
	<ul>
		<li class="list-item" v-for="(item,index) in itemArr">
			<i class="iconfont icon" :class="item.icon"></i>
			<span>{{item.name}}</span>
		</li>
	</ul>
</template>

<script>
	export default{
		data(){
			return{
				itemArr:[
					{"id":1,"href":"","name":"签证.wifi","icon":"icon-qiche"},
					{"id":2,"href":"","name":"签证.wifi","icon":"icon-qiche"},
					{"id":3,"href":"","name":"签证.wifi","icon":"icon-qiche"},
					{"id":4,"href":"","name":"签证.wifi","icon":"icon-qiche"},
					{"id":5,"href":"","name":"签证.wifi","icon":"icon-qiche"},
					{"id":6,"href":"","name":"签证.wifi","icon":"icon-qiche"}
				]
			}
		},
	}
</script>

<style scoped>
	.list-item{
		float:left;
		width:33.33%;
		font-size: .16rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top:.05rem;
		margin-bottom:.05rem;
	}
	.icon{
		font-size:.48ewm;
		color:#00A2CA;
		margin-bottom: .1rem;
	}
</style>