<template>
	<view class="page">
		<view class="header">
			<image src="../../static/image/mine-banner.jpg" class="banner"></image>
			<image src="../../static/image/set.png" class="set-png" @click="handleSet"></image>
			<image :src="src ? src : '../../static/image/default-headPic.png'" class="head-portrait" @click="changeHeadPic"></image>
			<text class="nick-name">尤尼</text>
		</view>
		<view class="option first" @click="toAccount">
			<image src="../../static/image/count.png" class="option-img"></image>
			<text class="desc">我的账户</text>
		</view>
		<view class="option" @click="toOrder">
			<image src="../../static/image/order.png" class="option-img bigger"></image>
			<text class="desc">我的订单</text>
		</view>
		<view class="option" @click="toFootPrint">
			<image src="../../static/image/foot.png" class="option-img bigger"></image>
			<text class="desc">我的足迹</text>
		</view>
		<view class="option" @click="toFeedBack">
			<image src="../../static/image/advice.png" class="option-img"></image>
			<text class="desc">意见反馈</text>
		</view>
		<view class="option" @click="toAboutUs">
			<image src="../../static/image/about.png" class="option-img"></image>
			<text class="desc">关于我们</text>
		</view>
    </view>
</template>

<script>
	export default {
		data(){
			return{
				src : ''   //裁剪后头像路径    
			}
		},
		methods: {
			handleSet(){
				uni.navigateTo({
					url : '/pages/set/set'
				})
			},
			changeHeadPic(){
				let that = this;
				uni.chooseImage({
					count : 1,
					sizeType : ['compressed '],
					success : function(res){
						let tempFilePath = res.tempFilePaths[0];
						that.src = tempFilePath;
// 						uni.navigateTo({
// 							url : '/pages/head-cut/head-cut?src=' + tempFilePath
// 						})
					}
				})
			},
			toAccount(){
				uni.navigateTo({
					url : '/pages/account/account'
				})
			},
			toOrder(){
				uni.navigateTo({
					url : '/pages/order/order'
				})
			},
			toFootPrint(){
				uni.navigateTo({
					url : '/pages/footprint/footprint'
				})
			},
			toAboutUs(){
				uni.navigateTo({
					url : '/pages/about-us/about-us'
				})
			},
			toFeedBack(){
				uni.navigateTo({
					url : '/pages/feedback/feedback'
				})
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
		height: 340upx;
	}
	
	.banner{
		width: 100%;
		height: 340upx;
	}
	
	.set-png{
		position: absolute;
		width: 60upx;
		height: 60upx;
		top: 30upx;
		left: 84%;
	}
	
	.head-portrait{
		position: absolute;
		width: 160upx;
		height: 160upx;
		top: 60upx;
		left: calc(50% - 80upx);
		border-radius: 50%;
	}
	
	.nick-name{
		position: absolute;
		display: block;
		width: 100%;
		text-align: center;
		top: 230upx;
		color: white;
		font-size: 32upx;
	}
	
	.option{
		width: 100%;
		height: 90upx;
		align-items: center;
		margin-top: 5upx;
		background: white;
	}
	
	.first{
		margin-top: 30upx;
		margin-bottom: 20upx;
	}
	
	.option:active{
		background: #B8B8B8;
	}
	
	.option-img{
		width: 40upx;
		height: 40upx;
		margin-left: 30upx;
	}
	
	.bigger{
		width: 46upx;
		height: 46upx;
		margin-left: 24upx;
	}
	
	.desc{
		color: #666666;
		font-size: 32upx;
		margin-left: 30upx;
	}
	
	
</style>
