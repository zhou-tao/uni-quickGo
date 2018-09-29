<template>
	<view class="page">
		<view class="option" @click="changeName">
			<text class="desc">昵称</text>
			<text class="info">{{nickName}}</text>
			<image src="../../static/image/more.png" class="more"></image>
		</view>
		<view class="option" @click="setGender">
			<text class="desc">性别</text>
			<text class="info">{{gender == 1 ? '男' : '女'}}</text>
			<image src="../../static/image/more.png" class="more"></image>
		</view>
		<view class="option end" @click="changePhone">
			<text class="desc">手机号码</text>
			<text class="info">{{phone}}</text>
			<image src="../../static/image/more.png" class="more"></image>
		</view>
		<view class="option" @click="pickAddress">
			<text class="desc">收货地址</text>
			<text class="info"></text>
			<image src="../../static/image/more.png" class="more"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				nickName : '尤尼',
				gender : 1,
				phone : '18688886666'
			}
		},
		methods:{
			changeName(){
				uni.navigateTo({
					url : '/pages/set/set-name/set-name?name=' + this.nickName
				})
			},
			setGender(){
				let that = this;
				uni.showActionSheet({
					itemList : ['男', '女'],
					success : function(res){
						let index = res.tapIndex;
						that.gender = (index == 0) ? 1 : 0;
					}
				})
			},
			changePhone(){
				uni.navigateTo({
					url : '/pages/set/set-phone/set-phone?phone=' + this.phone
				})
			},
			pickAddress(){
				uni.navigateTo({
					url : '/pages/set/set-address/set-address'
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
	
	.option{
		position: relative;
		width: 100%;
		height: 90upx;
		align-items: center;
		margin-top: 4upx;
		background: white;
	}
	
	.end{
		margin-top: 20upx;
	}
	
	.option:active{
		background:  #888888;
	}
	
	.desc{
		color: #666666;
		font-size: 32upx;
		margin-left: 30upx;
	}
	
	.info{
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: 100upx;
		font-size: 30upx;
		color: #B8B8B8;
	}
	
	.more{
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: 40upx;
		width: 40upx;
		height: 40upx;
	}

</style>
