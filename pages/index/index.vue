<template>
	<view class="page">		
		<view class="swipper-content">
			<swiper :indicator-dots="indicatorDots" :autoplay="autoplay" indicator-active-color="#ffffff" class="swipper-content">
				<swiper-item v-for="item in imgList" :key="item.url">
					<image :src="item.url" class="swipper-img"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="line-content">
			<view class="line"></view>
			<text class="content">推荐商品</text>
			<view class="line"></view>
		</view>
		<view v-for="(product,index) in productList" :key="index" @click="toGoods" :data-index="index">
			<product :image="product.image" :title="product.title" :originalPrice="product.originalPrice" :favourPrice="product.favourPrice"
				:tip="product.tip"></product>
		</view>
	</view>
</template>

<script>
	
	import product from '../../components/product.vue';
	export default {
		data: {
			title: '尤尼快购',
			autoplay: true,  //轮播图自动播放
			indicatorDots: true,  //显示轮播指示点
			productList: [],   //推荐商品
			imgList: [{
				url : "../../static/image/3.jpg"
			},{
				url : "../../static/image/2.jpg"
			},{
				url : "../../static/image/1.jpg"
			}]
		},
		components: {
			product
		},
		methods: {
			loadData(action = 'add') {
				const data = [{
					image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product1.jpg',
					title: 'Apple iPhone X 256GB 深空灰色 移动联通电信4G手机',
					originalPrice: 9999,
					favourPrice: 8888,
					tip: '自营'
				}, {
					image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product2.jpg',
					title: 'Apple iPad 平板电脑 2018年新款9.7英寸',
					originalPrice: 3499,
					favourPrice: 3399,
					tip: '优惠'
				}, {
					image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product3.jpg',
					title: 'Apple MacBook Pro 13.3英寸笔记本电脑（2017款Core i5处理器/8GB内存/256GB硬盘 MupxT2CH/A）',
					originalPrice: 12999,
					favourPrice: 10688,
					tip: '秒杀'
				}, {
					image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product4.jpg',
					title: 'Kindle Paperwhite电纸书阅读器 电子书墨水屏 6英寸wifi 黑色',
					originalPrice: 999,
					favourPrice: 958,
					tip: '秒杀'
				}, {
					image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product5.jpg',
					title: '微软（Microsoft）新Surface Pro 二合一平板电脑笔记本 12.3英寸（i5 8G内存 256G存储）',
					originalPrice: 8888,
					favourPrice: 8288,
					tip: '优惠'
				}, {
					image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product6.jpg',
					title: 'Apple Watch Series 3智能手表（GPS款 42毫米 深空灰色铝金属表壳 黑色运动型表带 MQL12CH/A）',
					originalPrice: 2899,
					favourPrice: 2799,
					tip: '自营'
				}];
				if (action === 'refresh') {
					this.productList = [];
				}
				data.forEach(item => {
					this.productList.push(item);
				});
			},
			toGoods(e){
				let index = e.currentTarget.dataset.index;
				uni.navigateTo({
					url : '/pages/goods/goods?index=' + index
				})
			}
		},
		onLoad() {
			this.loadData();
		},
		onPullDownRefresh() {
			this.loadData('refresh');
			// 实际开发中通常是网络请求，加载完数据后就停止。这里仅做演示，加延迟为了体现出效果。
			setTimeout(() => {
				uni.stopPullDownRefresh();
			}, 2000);
		}
	}
</script>

<style scoped>
	@import '../../utils/css/page.css';
	
	.swipper-content {
		width: 100%;
		height: 300upx;
		background: #AEEEEE;
	}

	.swipper-img{
		width: 100%;
		height: 300upx;
	}
	
	.line-content{
		width: 100%;
		height: 80upx;
		align-items: center;
		justify-content: center;
	}
	
	.line{
		width: 36%;
		height: 2upx;
		background: #BABABA;
		align-items: center;
		justify-content: center;
	}
	
	.content{
		color: #BABABA;
		font-size: 32upx;
		margin: 0 20upx;
	}
	
</style>
