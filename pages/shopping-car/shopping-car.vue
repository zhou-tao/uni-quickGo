<template>
	<view class="page">
		<view v-for="(item, index) in shopList" :key="index" class="shop-item" @click="toGoods" @longpress="deleteShopItem" :data-index="index">
			<checkbox-group @change="selectShopItem" class="check-box" :data-index="index" @click.stop>
				<checkbox :value="item.price * item.count" :checked="item.selected"></checkbox>
			</checkbox-group>
			<image :src="item.url" class="shop-img"></image>
			<view class="shop-desc">				
				<text class="shop-title">{{item.name}}</text>
				<view class="shop-action">				
					<text class="shop-price">￥{{item.price}}</text>
					<button type="primary" size="mini" plain  @click.stop="addCount" :data-index="index">+</button>
					<text class="shop-count">{{item.count}}</text>
					<button type="primary" size="mini" plain  @click.stop="reduceCount" :data-index="index">-</button>
				</view>
			</view>
		</view>
		<view class="blank"></view>
		<view class="account">
			<checkbox-group @change="selectShops" class="check-box">
				<checkbox :checked="checkedAll"></checkbox>
			</checkbox-group>
			<text class="total">￥{{total}}</text>
			<view class="pay">
				<text class="pay-text">结 算</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				total: 0,  //总价
				checkedAll: false,
				shopList: [
					{
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product1.jpg',
						name: 'Apple iPhone X 256GB 深空灰色 移动联通电信4G手机',
						price: 8888,
						count: 1,
						selected: false
					},
					{
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product2.jpg',
						name: 'Apple iPad 平板电脑 2018年新款9.7英寸',
						price: 3399,
						count: 1,
						selected: false
					},
					{
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product4.jpg',
						name: 'Kindle Paperwhite电纸书阅读器 电子书墨水屏 6英寸wifi 黑色',
						price: 958,
						count: 2,
						selected: false
					},
					{
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product6.jpg',
						name: 'Apple Watch Series 3智能手表（GPS款 42毫米 深空灰色铝金属表壳 黑色运动型表带 MQL12CH/A）',
						price: 2799,
						count: 1,
						selected: false
					}
				]
			}
		},
		methods: {
			//去商品详情
			toGoods(e){
				let index = e.currentTarget.dataset.index;
				uni.navigateTo({
					url : '/pages/goods/goods'
				})
			},
			//长按商品从购物车移除
			deleteShopItem(e){
				let index = e.currentTarget.dataset.index;
				uni.showModal({
					title: '提示',
					content: '确定将本商品从购物车移除吗?',
					confirmColor: '#EE6A50',
					success : (res) => {
						if(res.confirm){
							this.shopList.splice(index,1);
						}else{
							console.log("取消移除");
						}
					}
				})
			},
			//选中所有商品
			selectShops(e){
				this.checkedAll = !this.checkedAll;
				let total = 0;
				if(this.checkedAll){					
					this.shopList.forEach((item, index) => {
						total += item.count * item.price;
						item.selected = true;
					})
				}else{
					this.shopList.forEach((item, index) => {
						total = 0;
						item.selected = false;
					})
				}
				this.total = total;
			},
			//选中某一商品
			selectShopItem(e){
				let index = e.currentTarget.dataset.index;
				this.shopList[index].selected = !this.shopList[index].selected;
				if(this.shopList[index].selected){
					this.total += this.shopList[index].price * this.shopList[index].count;
				}else{
					this.total -= this.shopList[index].price * this.shopList[index].count;
				}
			},
			addCount(e){
				let index = e.currentTarget.dataset.index;
				this.shopList[index].count++;
				if(this.shopList[index].selected){
					this.total += this.shopList[index].price;
				}
			},
			reduceCount(e){
				let index = e.currentTarget.dataset.index;
				if(this.shopList[index].count > 1){
					this.shopList[index].count--;
					if(this.shopList[index].selected){
						this.total -= this.shopList[index].price;
					}
				}
			}
		}
	}
</script>

<style>
	@import '../../utils/css/page.css';
	
	.shop-item{
		width: 100%;
		height: 240upx;
		align-items: center;
		padding: 30upx 20upx;
		border-bottom: solid 1upx #EDEDED;
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
		align-items: flex-start;  /*交叉轴的起点对齐*/
	}
	
	.shop-price{
		color: #E80080;
		font-size: 34upx;
	}
	
	.shop-count{
		top: 2upx;
		font-size: 32upx;
		color: #888888;
	}
	
	.blank{
		width: 100%;
		height: 100upx;
	}
	
	.account{
		position: fixed;
		bottom: 0;
		width: 100%;
		padding-left: 20upx;
		height: 100upx;
		line-height: 100upx;
		background: #EDEDED;
	}
	
	.total{
		font-size: 35upx;
		color: #ff3333;
		font-weight: 500;
	}
	
	.pay{
		position: absolute;
		width: 200upx;
		height: 100upx;
		right: 0;
		background: #ff9966;
	}
	
	.pay-text{
		margin: 0 auto;
		font-size: 35upx;
		font-weight: 500;
		color: white;
	}
	
</style>
