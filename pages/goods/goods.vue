<template>
	<view class="page">
		<view class="swipper-content">
			<swiper :indicator-dots="indicatorDots" :autoplay="autoplay" indicator-active-color="#ffffff" class="swipper-content">
				<swiper-item>
					<image :src="goods.image" class="swipper-img"></image>
				</swiper-item>
				<swiper-item>
					<image :src="goods.image" class="swipper-img"></image>
				</swiper-item>
				<swiper-item>
					<image :src="goods.image" class="swipper-img"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="item fuck">
			<text class="title">{{goods.title}}</text>
		</view>
		<view class="item limit">
			<text>零售价</text>
			<text>{{goods.originalPrice}} 元</text>
		</view>
		<view class="item limit">
			<text>优惠价</text>
			<text>{{goods.favourPrice}} 元</text>
		</view>
		<view class="item limit">
			<text>规格</text>
			<text>{{goods.size}}</text>
		</view>
		<view class="blank">
		</view>
		<view class="footer">
			<view class="count">
				<view class="add" @click="add">
					<text class="center">+</text>
				</view>
				<text class="number">{{goods.count}}</text>
				<view class="add" @click="sub">
					<text class="center">-</text>
				</view>
			</view>
			<view class="submit">
				<view class="action" @click="addToCar">
					<text>加入购物车</text>
				</view>
				<view class="action buy" @click="buy">
					<text>立即购买</text> 
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				indicatorDots: true,  //显示轮播指示点
				goods : {
					image : 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product1.jpg',
					title : 'Apple iPhone X 256GB 深空灰色 移动联通电信4G手机',
					originalPrice : '3499',
					favourPrice : '3399',
					size : '通用',
					count : 1
				}
				
			}
		},
		methods : {
			add(){
				this.goods.count += 1;
			},
			sub(){
				if(this.goods.count > 1) this.goods.count -= 1;
			},
			addToCar(){
				uni.showLoading({
					title : '正在处理中...'
				})
				setTimeout(() => {
					uni.hideLoading();
					uni.showToast({
						title : '已加入购物车'
					})
				},1500);
			},
			buy(){
				uni.showLoading({
					title : '请稍后...'
				})
				setTimeout(() => {
					uni.hideLoading();
					uni.showToast({
						title : '购买成功'
					})
				},1500);
			}
		},
		onLoad(options){
			if(options.index){
				let index = options.index;
				const data = [{
						image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product1.jpg',
						title: 'Apple iPhone X 256GB 深空灰色 移动联通电信4G手机',
						originalPrice: 9999,
						favourPrice: 8888,
						tip: '自营',
						size : '通用',
						count: 1
					}, {
						image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product2.jpg',
						title: 'Apple iPad 平板电脑 2018年新款9.7英寸',
						originalPrice: 3499,
						favourPrice: 3399,
						size : '通用',
						tip: '优惠',
						count : 1
					}, {
						image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product3.jpg',
						title: 'Apple MacBook Pro 13.3英寸笔记本电脑（2017款Core i5处理器/8GB内存/256GB硬盘 MupxT2CH/A）',
						originalPrice: 12999,
						favourPrice: 10688,
						size : '通用',
						tip: '秒杀',
						count : 1
					}, {
						image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product4.jpg',
						title: 'Kindle Paperwhite电纸书阅读器 电子书墨水屏 6英寸wifi 黑色',
						originalPrice: 999,
						favourPrice: 958,
						size : '通用',
						tip: '秒杀',
						count: 1
					}, {
						image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product5.jpg',
						title: '微软（Microsoft）新Surface Pro 二合一平板电脑笔记本 12.3英寸（i5 8G内存 256G存储）',
						originalPrice: 8888,
						favourPrice: 8288,
						size : '通用',
						tip: '优惠',
						count: 1
					}, {
						image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product6.jpg',
						title: 'Apple Watch Series 3智能手表（GPS款 42毫米 深空灰色铝金属表壳 黑色运动型表带 MQL12CH/A）',
						originalPrice: 2899,
						favourPrice: 2799,
						size : '通用',
						tip: '自营',
						count: 1
					}];
				this.goods = data[index];
			}
			
		}
	}
</script>

<style scoped>
	@import '../../utils/css/page.css';
	.page{
		background: #EDEDED;
	}
	
	.swipper-content {
		width: 100%;
		height: 700upx;
	}

	.swipper-img{
		width: 100%;
		height: 700upx;
	}
	
	.item{
		width: 100%;
		height: 80upx;
		line-height: 80upx;
		background: white;
		font-size: 34upx;
	}
	
	.fuck{
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	
	.title{
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	.limit{
		padding: 10upx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-top: 2upx;
		color: #666666;
	}
	
	.footer{
		background: white;
		position: fixed;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		bottom: 0;
		width: 100%;
		height: 100upx;
		line-height: 100upx;
		padding-left: 20upx;
	}
	
	.count{
		width: 260upx;
		height: 100upx;
	}
	
	.add{
		position: relative;
		margin-top: 10upx;
		width: 80upx;
		height: 80upx;
		line-height: 80upx;
		text-align: center;
		border-radius: 10upx;
		background: #ff6633;
		color: white;
		font-size: 50upx;
	}
	
	.number{
		display: inline-block;
		width: 70upx;
		height: 100upx;
		line-height: 100upx;
		text-align: center;
		color: #666666;
	}
	
	.submit{
		display: flex;
		flex-direction: row;
		height: 100upx;
	}
	
	.action{
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		width: 200upx;
		height: 100upx;
		background: #6699ff;
		color: white;
		font-size: 30upx;
	}
	
	.buy{
		width: 200upx;
		height: 100upx;
		background: #66FFCC;
	}
	
	.center{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	
	.blank{
		height: 180upx;
		width: 100%;
	}
	
</style>
