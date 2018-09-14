<template>
	<view class="mine">
		<view class="header">
			<image src="../../static/image/mine-banner.jpg" class="banner"></image>
		</view>
		<view class="option first">
			<image src="../../static/image/count.png" class="option-img"></image>
			<text class="desc">我的账户</text>
		</view>
		<view class="option">
			<image src="../../static/image/order.png" class="option-img bigger"></image>
			<text class="desc">我的订单</text>
		</view>
		<view class="option">
			<image src="../../static/image/foot.png" class="option-img bigger"></image>
			<text class="desc">我的足迹</text>
		</view>
		<view class="option">
			<image src="../../static/image/advice.png" class="option-img"></image>
			<text class="desc">意见反馈</text>
		</view>
		<view class="option">
			<image src="../../static/image/about.png" class="option-img"></image>
			<text class="desc">关于我们</text>
		</view>
    </view>
</template>

<script>
	export default {
		
	}
</script>

<style>
	.mine{
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-content: flex-start;  /*交叉轴的起点对齐*/
		background: #DEDEDE;
	}
	
	.header{
		width: 100%;
		height: 340px;
	}
	
	.banner{
		width: 100%;
		height: 340px;
	}
	
	.option{
		width: 100%;
		height: 90px;
		align-items: center;
		margin-top: 5px;
		background: white;
	}
	
	.first{
		margin-top: 30px;
		margin-bottom: 20px;
	}
	
	.option:active{
		background: #B8B8B8;
	}
	
	.option-img{
		width: 40px;
		height: 40px;
		margin-left: 30px;
	}
	
	.bigger{
		width: 46px;
		height: 46px;
		margin-left: 24px;
	}
	
	.desc{
		color: #666666;
		font-size: 32px;
		margin-left: 30px;
	}
	
	
</style>
