<template>
	<view class="page">
		<view class="map">
			<map :latitude="latitude" :longitude="longitude" :markers="markers" class="map"></map>
		</view>
		<scroll-view scroll-y="true" class="near-address">
			<view class="item" v-for="item in nearData" :key="item.id" @click="pickAddress" :data-name="item.name">
				<view class="flag">
					<image src="../../../static/image/point-c.png" class="point" v-if="index == 0"></image>
					<image src="../../../static/image/point.png" class="point" v-else></image>
				</view>
				<view class="address">
					<view class="name">
						<text>{{item.name}}</text>
					</view>
					<view class="desc">
						<text class="desc-word">{{item.address}}</text>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import amap from '../../../utils/js/amap-wx.js';
	export default {
		data(){
			return{
				nearData : [],
				markers : [],
				latitude : '',
				longitude : '',
				amapPlugin: null,
				//高德开发者申请KEY
				key: '00e4555e3962f1dae4823d81b6474b83'
			}
		},
		onLoad(){
			//注册高德插件
			this.amapPlugin = new amap.AMapWX({
				key: this.key
			});
			this.amapPlugin.getRegeo({
				iconPath: "../../../static/image/marker.png",
				iconWidth: 32,
				iconHeight: 32,
			  success: (data) => {
				console.log(data);
				this.markers = [{
					id: data[0].id,
				    latitude: data[0].latitude,
				    longitude: data[0].longitude,
				    iconPath: data[0].iconPath,
				    width: data[0].width,
				    height: data[0].height
				}];
				this.latitude = data[0].latitude;
				this.longitude = data[0].longitude;
				this.nearData = data[0].regeocodeData.pois;
			  }
			});
		},
		methods : {
			pickAddress(e){
				console.log(e);
				let name = e.currentTarget.dataset.name;
				uni.showLoading({
					title: '请稍后...'
				});
				setTimeout(() => {
					uni.hideLoading();
					uni.showToast({
						title : '已保存',
						success : function(res){
							uni.navigateBack({
								delta: 1
							})
						}
					});
				},1500);
			}
		}
	}
</script>

<style scoped>
	.page{
		position: absolute;
		top: 0;
		bottom: 0;
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-content: flex-start;  /*交叉轴的起点对齐*/
		background: #EDEDED;
	}
	
	.map{
		width: 100%;
		height: 500upx;
	}
	
	.near-address{
		width: 100%;
		height: calc(100% - 500upx);
	}
	
	.item{
		width: 100%;
		height: 160upx;
		border-bottom: solid 2upx #DEDEDE;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		background: white;
	}
	
	.item:active{
		background: #666666;
	}
	
	.flag{
		width: 20%;
		height: 160px;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	
	.point{
		width: 60upx;
		height: 60upx;
		margin-top: 50upx;
	}
	
	.address{
		width: 80%;
		height: 160upx;
		line-height: 80upx;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
	}
	
	.name{
		font-size: 36upx;
		height: 100upx;
		line-height: 100upx;
		color: #666666;
	}
	
	.desc{
		position: relative;
		top: 0;
		height: 60upx;
		line-height: 30upx;
		font-size: 32upx;
		color: #888888;
	}
	
</style>
