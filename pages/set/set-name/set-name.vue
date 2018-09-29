<template>
	<view class="page">
		<input class="set-input" :value="name" @input="inputName"/>
		<view class="save-btn" @click="saveChangeName">
			<text>保存</text>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				name : ''
			}
		},
		methods : {
			inputName(e){
				this.name = e.detail.value;
			},
			saveChangeName(){
				uni.showLoading({
					title : '正在处理...'
				})
				setTimeout(()=> {
					uni.hideLoading();
					uni.showToast({
						title: '操作成功!',
						icon: 'success',
						duration: 1500,
						success : function(){
							uni.navigateBack({
								delta: 1
							})
						}
					})
				}, 1500)
			}
		},
		onLoad(options){
			if(options.name) this.name = options.name;
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
