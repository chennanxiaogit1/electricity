<template>
	<view class="shop-info" v-if="Object.keys(shop).length != 0">
		<view class="shop-top">
			<image :src="shop.logo" mode="widthFix"></image>
			<text class="title">{{ shop.name }}</text>
		</view>
		<view class="shop-middle">
			<view class="shop-middle-item shop-middle-left">
				<view class="shop-sell">
					<view class="sell-count">{{ sellCountFilter }}</view>
					<view class="sell-text">总销量</view>
				</view>
				<view class="info-goods">
					<view class="goods-count">{{ shop.goodsCount }}</view>
					<view class="goods-text">全部宝贝</view>
				</view>
			</view>
			<view class="shop-middle-item shop-middle-right">
				<view class="shop-describe" v-for="item in shop.score">
					<text class="text">{{ item.name }}</text>
					<text class="score" :class="item.isBetter ? 'score-better' : ''">{{
						item.score
					}}</text>
					<text class="better">
						<text :class="{ 'better-more': item.isBetter }">{{
							item.isBetter ? "高" : "低"
						}}</text>
					</text>
				</view>
			</view>
		</view>
		<view class="shop-bottom">
			<view class="enter-shop">进店逛逛</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			shop: {
				type: Object,
				default() {
					return {};
				}
			}
		},
		computed: {
			sellCountFilter() {
				if (this.shop.sells < 10000) {
					return this.shop.sells;
				} else {
					return (this.shop.sells / 10000).toFixed(1) + "万";
				}
			}
		}
	};
</script>

<style scoped>
	.shop-info {
		display: flex;
		flex-direction: column;
		padding: 50rpx 16rpx;
		border-bottom: 10rpx solid #f2f5f8;
	}
	.shop-top {
		display: flex;
		align-items: center;
	}
	.shop-top image {
		width: 90rpx;
		border-radius: 50%;
		border: 1px solid rgba(0, 0, 0, 0.1);
	}
	.shop-top .title {
		margin-left: 20rpx;
		vertical-align: center;
	}
	.shop-middle {
		display: flex;
		margin-top: 40rpx;
	}
	.shop-middle .shop-middle-item {
		flex: 1;
		display: flex;
	}
	.shop-middle-left {
		display: flex;
		justify-content: space-around;
		color: #333;
		text-align: center;
		border-right: 2rpx solid rgba(0, 0, 0, 0.1);
		align-items: center;
	}
	.sell-count,
	.goods-count {
		font-size: 36rpx;
	}

	.sell-text,
	.goods-text {
		font-size: 24rpx;
		margin-top: 20rpx;
	}
	.shop-middle-right {
		display: flex;
		flex-direction: column;
		margin-left: 60rpx;
		color: #333;
		font-size: 24rpx;
	}
	.shop-describe {
		display: flex;
	}
	.shop-describe text {
		flex: 1;
		padding: 10rpx 0;
		text-align: center;
	}
	.shop-describe .text {
		flex: 2;
	}
	.shop-describe .score {
		margin-left: 6rpx;
		color: #5ea732;
		width: 20rpx;
	}
	.shop-describe .score-better {
		color: #f13e3a;
	}
	.shop-describe .better text {
		background-color: #5ea732;
		color: #fff;
		padding: 0;
	}
	.shop-middle-right .better-more {
		background-color: #f13e3a !important;
	}
	.shop-bottom {
		text-align: center;
		margin-top: 20rpx;
	}

	.enter-shop {
		display: inline-block;
		font-size: 28rpx;
		background-color: #f2f5f8;
		width: 300rpx;
		height: 60rpx;
		text-align: center;
		line-height: 60rpx;
		border-radius: 20rpx;
	}
</style>