<template>
	<view class="page">
		<view class="menu">
			<view class="item" v-bind:class="{activeClass: defaultActive}" @click="changeType(1)">
				<text>全部</text>
			</view>
			<view class="item" @click="changeType(2)">
				<text>电脑</text>
			</view>
			<view class="item" @click="changeType(3)">
				<text>手机</text>
			</view>
			<view class="item" @click="changeType(4)">
				<text>ipad</text>
			</view>
			<view class="item" @click="changeType(5)">
				<text>其他</text>
			</view>
		</view>
		<view v-for="(product,index) in productList" :key="index">
			<product :image="product.image" :title="product.title" :originalPrice="product.originalPrice" :favourPrice="product.favourPrice"
				:tip="product.tip"></product>
		</view>
	</view>
</template>

<script>
	import product from '../../components/product.vue';
	export default {
		data() {
			return {
				productList: [],
				defaultActive: true,     //默认高亮全部item
				data: [{
					image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product1.jpg',
					title: 'Apple iPhone X 256GB 深空灰色 移动联通电信4G手机',
					originalPrice: 9999,
					favourPrice: 8888,
					tip: '自营',
					type: 3
				}, {
					image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product2.jpg',
					title: 'Apple iPad 平板电脑 2018年新款9.7英寸',
					originalPrice: 3499,
					favourPrice: 3399,
					tip: '优惠',
					type: 4
				}, {
					image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product3.jpg',
					title: 'Apple MacBook Pro 13.3英寸笔记本电脑（2017款Core i5处理器/8GB内存/256GB硬盘 MPXT2CH/A）',
					originalPrice: 12999,
					favourPrice: 10688,
					tip: '秒杀',
					type: 2
				}, {
					image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product4.jpg',
					title: 'Kindle Paperwhite电纸书阅读器 电子书墨水屏 6英寸wifi 黑色',
					originalPrice: 999,
					favourPrice: 958,
					tip: '秒杀',
					type: 5
				}, {
					image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product5.jpg',
					title: '微软（Microsoft）新Surface Pro 二合一平板电脑笔记本 12.3英寸（i5 8G内存 256G存储）',
					originalPrice: 8888,
					favourPrice: 8288,
					tip: '优惠',
					type: 2
				}, {
					image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product6.jpg',
					title: 'Apple Watch Series 3智能手表（GPS款 42毫米 深空灰色铝金属表壳 黑色运动型表带 MQL12CH/A）',
					originalPrice: 2899,
					favourPrice: 2799,
					tip: '自营',
					type: 5
				}]
			}
		},
		components: {
			product
		},
		methods: {
			changeType(index){
				//取消默认高亮
				this.defaultActive = false;
				this.productList = (index == 1) ? this.data : this.data.filter(item => item.type == index);
			}
		},
		onLoad() {
			this.productList = this.data;
		}
	}
</script>

<style>
	.page{
		display: flex;
		width: 100%;
		flex-wrap: wrap;
		flex-direction: row;
		align-content: flex-start;  /*交叉轴的起点对齐*/
	}
	
	.menu{
		width: 100%;
		height: 100px;
		background: #B8B8B8; 
	}
	
	.item{
		display: inline-block;
		width: 20%;
		height: 100px;
		text-align: center;
		line-height: 100px;
		color: white;
		font-size: 32px;
	}
	
	.item:active{
		background: #EBEBEB;
	}
	
	.item:hover{
		border-bottom: solid 8px #66ffcc;
		box-sizing: border-box;
		color: #66FFCC;
	}
	
	.activeClass{
		border-bottom: solid 8px #66ffcc;
		box-sizing: border-box;
		color: #66FFCC;
	}
	
</style>
