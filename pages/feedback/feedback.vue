<template>
	<view class="page">
		<view class="feedback-body">			
			<textarea placeholder="请输入您宝贵的意见与建议~" class="content" placeholder-class="tips" @input="inputAdvices"></textarea>
			<button class="submit" @click="submit">提交</button>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				advices : ''
			}
		},
		methods : {
			inputAdvices(e){
				this.advices = e.detail.value;
			},
			submit(){
				if(this.advices.trim() == ''){
					uni.showToast({
						icon : 'none',
						title : '请输入您的意见与建议~'
					})
				}else{
					uni.showLoading({
						title : '正在提交...'
					})
					setTimeout(() => {
						uni.hideLoading();
						uni.showToast({
							icon : 'success',
							title : '提交成功'
						})
					}, 2000)
				}
			}
		}
	}
</script>

<style>
	
	@import '../../utils/css/page.css';
	.page{
		justify-content: center;
	}
	
	.feedback-body{
		width: 90%;
		height: 520upx;
		top: 50upx;
		display: flex;
		flex-direction: column;
	}
	
	.content{
		background: #EDEDED;
		margin-top: 40upx;
		width: 100%;
		height: 300upx;
	}
	
	.tips{
		font-size: 32upx;
		color: #BABABA;
	}
	
	.submit{
		width: 100%;
		margin-top: 50upx;
		height: 80upx;
		line-height: 80upx;
		text-align: center;
		background: #66FFCC;
		color: white;
		font-size: 32upx;
	}
	
</style>
