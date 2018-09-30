<template>
	<view class="page">
		<view class="main-content">
			<text>￥1821.03</text>
		</view>
		<view class="option">
			<image src="../../static/image/circle.png" class="option-img"></image>
			<text class="desc">充值</text>
		</view>
		<view class="option">
			<image src="../../static/image/circle.png" class="option-img"></image>
			<text class="desc">提现</text>
		</view>
		<view class="option">
			<image src="../../static/image/circle.png" class="option-img"></image>
			<text class="desc">优惠券</text>
		</view>
	</view>
</template>

<script>
	export default {
		
	}
</script>

<style>

	@import '../../utils/css/page.css';
	.page{
		background: #EDEDED;
	}
	
	.main-content{
		width: 100%;
		margin-top: 30upx;
		height: 320upx;
		background: white;
		justify-content: center;
		align-items: center;
		font-size: 70upx;
		font-weight: 500;
	}
	
	.option{
		width: 100%;
		height: 100upx;
		align-items: center;
		margin-top: 30upx;
		background: white;
	}
	
	.option:active{
		background: #B8B8B8;
	}
	
	.option-img{
		width: 40upx;
		height: 40upx;
		margin-left: 30upx;
	}
	
	.desc{
		color: #666666;
		font-size: 33upx;
		margin-left: 30upx;
	}

</style>
