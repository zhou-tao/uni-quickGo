<template>
	<view class="page">		
		<view class="cropper-wrapper">
			<canvas class="cropper" disable-scroll="true" bindtouchstart="touchStart" bindtouchmove="touchMove" bindtouchend="touchEnd"
			v-bind:style="{width: cropperOpt.width +'px', height: cropperOpt.height + 'px'}" :canvas-id="cropperOpt.id">
			</canvas>
			<!-- <view class="cropper-buttons">
				<view class="upload" bindtap="uploadTap">
					重新选择
				</view>
				<view class="getCropperImage" bindtap="getCropperImage">
					确定
				</view>
			</view> -->
		</view>
	</view>
</template>

<script>
	import WeCropper from '../../utils/js/we-cropper.js';
	const device = uni.getSystemInfoSync();
	const width = device.windowWidth;
	const height = device.windowHeight - 50;
	export default {
		data() {
			return {
				filePath: '', //裁剪后图片路径
				cropperOpt: {
					id: 'cropper',
					width,
					height,
					scale: 2.5,
					zoom: 8,
					cut: {
						x: (width - 300) / 2,
						y: (height - 300) / 2,
						width: 300,
						height: 300
					}
				}
			}
		},
		methods: {
			touchStart(e) {
				this.wecropper.touchStart(e);
			},
			touchMove(e) {
				this.wecropper.touchMove(e);
			},
			touchEnd(e) {
				this.wecropper.touchEnd(e);
			},
			getCropperImage() {
				this.wecropper.getCropperImage((avatar) => {
					if (avatar) {
						this.filePath = avatar;
						console.log(avater);
					}
				})
			},
			uploadTap() {
				let that = this;
				wx.chooseImage({
					count: 1, // 默认9
					sizeType: ['compressed'],
					success(res) {
						const src = res.tempFilePaths[0];
						//  获取裁剪图片资源后，给data添加src属性及其值
						that.wecropper.pushOrign(src);
					}
				})
			}
		},
		onLoad(option) {
			console.log('src: ' + option.src);
			if (option.src) {
				this.cropperOpt.src = option.src
				new WeCropper(this.cropperOpt)
					.on('ready', (ctx) => {
						console.log(`wecropper is ready for work!`)
					})
					.on('beforeImageLoad', (ctx) => {
						console.log(`before picture loaded, i can do something`)
						console.log(`current canvas context:`, ctx)
						uni.showToast({
							title: '上传中',
							icon: 'loading',
							duration: 20000
						})
					})
					.on('imageLoad', (ctx) => {
						console.log('picture loaded')
						console.log('current canvas context:', ctx)
						uni.hideToast()
					})
					.on('beforeDraw', (ctx, instance) => {
						console.log(`before canvas draw,i can do something`)
						console.log(`current canvas context:`, ctx)
					})
					.updateCanvas()
			}
		}
	}
</script>

<style>
	.page {
		-webkit-user-select: none;
		user-select: none;
		background-color: black;
		font-family: Arial, Helvetica, sans-serif;
		overflow-x: hidden;
	}

	.flex {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.cropper {
		position: absolute;
		top: 0;
		left: 0;
	}

	.cropper-buttons {
		background-color: rgba(0, 0, 0, 0.95);
		color: white;
	}

	.cropper-wrapper {
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		justify-content: center;
		height: 100%;
		background-color: #e5e5e5;
	}

	.cropper-buttons {
		position: fixed;
		display: flex;
		bottom: 0;
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		background-color: #68838B;
	}

	.cropper-buttons .upload,
	.cropper-buttons .getCropperImage {
		width: 50%;
		text-align: center;
	}
</style>
