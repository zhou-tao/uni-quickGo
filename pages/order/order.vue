<template>
	<view class="page">
		<view class="menu">
			<view class="item" v-bind:class="{activeClass: (activeIndex == 1)}" @click="changeType(1)">
				<text>全部</text>
			</view>
			<view class="item" v-bind:class="{activeClass: (activeIndex == 2)}" @click="changeType(2)">
				<text>配送中</text>
			</view>
			<view class="item" v-bind:class="{activeClass: (activeIndex == 3)}" @click="changeType(3)">
				<text>已收货</text>
			</view>
		</view>
		<view v-for="(item, index) in shopList" :key="index" class="shop-item" @click="toGoods" :data-index="index">
			<image :src="item.url" class="shop-img"></image>
			<view class="shop-desc">				
				<text class="shop-title">{{item.name}}</text>
				<view class="shop-action">				
					<text class="shop-price">￥{{item.price}}</text>
					<view class="shop-count">						
						<image src="../../static/image/mall2.png" class="count-png"></image>
						<text class="count-desc">{{item.count}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				activeIndex: 1,     //默认高亮全部item
				shopList: [],
				data: [
					{
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product1.jpg',
						name: 'Apple iPhone X 256GB 深空灰色 移动联通电信4G手机',
						price: 8888,
						count: 1
					},
					{
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product2.jpg',
						name: 'Apple iPad 平板电脑 2018年新款9.7英寸',
						price: 3399,
						count: 1
					},
					{
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product4.jpg',
						name: 'Kindle Paperwhite电纸书阅读器 电子书墨水屏 6英寸wifi 黑色',
						price: 958,
						count: 2
					},
					{
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product6.jpg',
						name: 'Apple Watch Series 3智能手表（GPS款 42毫米 深空灰色铝金属表壳 黑色运动型表带 MQL12CH/A）',
						price: 2799,
						count: 1
					}
				]
			}
		},
		methods : {
			changeType(index){
				//取消默认高亮
				this.activeIndex = index;
				if(index == 1){
					this.shopList = this.data;
				}else if(index == 2){
					this.shopList = this.data.slice(2);
				}else{
					this.shopList = this.data.slice(0,2);
				}
			},
			//去商品详情
			toGoods(e){
				let index = e.currentTarget.dataset.index;
				//index处理
				if(this.activeIndex == 1){					
					if(index == 2){
						index = 3;
					}else if(index == 3){
						index = 5;
					}
				}else if(this.activeIndex == 2){
					if(index == 0){
						index = 3;
					}else{
						index = 5;
					}
				}
				uni.navigateTo({
					url : '/pages/goods/goods?index=' + index
				})
			}
		},
		onLoad(){
			this.shopList = this.data;
		}
	}
</script>

<style>
	@import '../../utils/css/page.css';
	
	.menu{
		width: 100%;
		height: 100upx;
		background: #B8B8B8; 
	}
	
	.item{
		display: inline-block;
		width: 33.3%;
		height: 100upx;
		text-align: center;
		line-height: 100upx;
		color: white;
		font-size: 32upx;
	}
	
	.item:active{
		background: #EBEBEB;
	}
	
	.activeClass{
		border-bottom: solid 8upx #66ffcc;
		box-sizing: border-box;
		color: #66FFCC;
	}
	
	.shop-item{
		width: 100%;
		height: 240upx;
		align-items: center;
		padding: 30upx 20upx;
		border-bottom: solid 5upx #EDEDED;
	}
	
	.shop-img{
		height: 100%;
		width: 240upx;
		margin-left: 30upx;
	}
	
	.shop-desc{
		width: 360upx;
		display: flex;
		flex-direction: column;
		align-items: flex-start;  /*交叉轴的起点对齐*/
		margin-left: 8upx;
	}
	
	.shop-title{
		width: 360upx;
		color: #666666;
		font-size: 32upx;
		word-break: break-all;
		display: -webkit-box;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}
	
	.shop-action{
		width: 360upx;
		line-height: 60upx;
		margin-top: 26upx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	
	.shop-price{
		color: #E80080;
		font-size: 34upx;
	}
	
	.count-png{
		margin-left: 130upx;
		width: 50upx;
		height: 50upx;
	}
	
	.count-desc{
		margin-left: 2upx;
		top: 2upx;
		font-size: 36upx;
		color: #66ffcc;
	}
</style>
