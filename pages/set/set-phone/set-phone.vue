<template>
	<view class="page">
		<input class="set-input first" :value="phone"/> 
		<view class="get-code">
			<text>获取验证码</text>
		</view>
		<input class="set-input" placeholder="验证码"/>
		<input class="set-input" placeholder="新绑定的手机号码"/>
		<view class="save-btn" @click="saveChangeName">
			<text>绑定</text>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				phone : ''
			}
		},
		onLoad(options){
			if(options.phone) this.phone = options.phone;
		}
	}
</script>

<style>
	@import '../../../utils/css/page.css';
	.page{
		background: #EDEDED;
		justify-content: center;
	}
	
	.set-input{
		margin-top: 30upx;
		width: 90%;
		border-bottom: solid 5upx #66FFCC;
		height: 80upx;
	}
	
	.first{
		width: 60%;
		display: inline-block;
	}
	
	.get-code{
		display: inline-block;
		margin-top: 30upx;
		width: 30%;
		background: #66FFCC;
		color: white;
		font-size: 32upx;
		height: 70upx;
		line-height: 70upx;
		text-align: center;
		border-radius: 8upx;
	}
	
	.save-btn{
		margin-top: 50upx;
		width: 90%;
		background: #66FFCC;
		color: white;
		font-size: 32upx;
		height: 80upx;
		justify-content: center;
		align-items: center;
		border-radius: 8upx;
	}
</style>
