<template>
	<view class="page">
		<view class="header">
			<image src="../../static/image/logo.png" class="logo"></image>
			<text class="title">尤尼快购 v1.0</text>
		</view>
		<view class="option first">
			<text class="desc">功能介绍</text>
		</view>
		<view class="option" @click="checkVersion">
			<text class="desc">检查更新</text>
		</view>
		<view class="option">
			<text class="desc">联系客服</text>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{}
		},
		methods : {
			checkVersion(){
				uni.showLoading({
					title: '正在检测...'
				})
				setTimeout(()=> {
					uni.hideLoading();
					uni.showToast({
						icon: 'success',
						title: '当前为最新版本!'
					})
				},2000)
			}
		}
	}
</script>

<style>
	@import '../../utils/css/page.css';
	 
	.page{
		background: #EDEDED;
	}
	
	.header{
		width: 100%;
		height: 400upx;
	}
	
	.logo{
		position: absolute;
		width: 150upx;
		height: 150upx;
		top: 150upx;
		left: calc(50% - 75upx);
	}
	
	.title{
		position: absolute;
		display: block;
		width: 100%;
		text-align: center;
		top: 320upx;
		color: #666666;
		font-size: 33upx;
	}
	
	.option{
		width: 100%;
		height: 90upx;
		align-items: center;
		margin-top: 5upx;
		background: white;
	}
	
	.option:active{
		background: #B8B8B8;
	}
	
	.first{
		margin-top: 180upx;
	}
	
	.desc{
		color: #666666;
		font-size: 32upx;
		margin-left: 30upx;
	}

</style>
