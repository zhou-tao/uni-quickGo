<template>
	<view class="page">
		<view class="menu">
			<view class="item" v-bind:class="{activeClass: (activeIndex == 1)}" @click="changeType(1)">
				<text>全部</text>
			</view>
			<view class="item" v-bind:class="{activeClass: (activeIndex == 2)}" @click="changeType(2)">
				<text>配送中</text>
			</view>
			<view class="item" v-bind:class="{activeClass: (activeIndex == 3)}" @click="changeType(3)">
				<text>已收货</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				activeIndex: 1     //默认高亮全部item
			}
		},
		methods : {
			changeType(index){
				//取消默认高亮
				this.activeIndex = index;
			}
		}
	}
</script>

<style>
	@import '../../utils/css/page.css';
	
	.menu{
		width: 100%;
		height: 100upx;
		background: #B8B8B8; 
	}
	
	.item{
		display: inline-block;
		width: 33.3%;
		height: 100upx;
		text-align: center;
		line-height: 100upx;
		color: white;
		font-size: 32upx;
	}
	
	.item:active{
		background: #EBEBEB;
	}
	
	.activeClass{
		border-bottom: solid 8upx #66ffcc;
		box-sizing: border-box;
		color: #66FFCC;
	}
</style>
