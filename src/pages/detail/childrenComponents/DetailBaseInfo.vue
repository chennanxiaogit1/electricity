<template>
	<view class="base-info" v-if="Object.keys(goods).length !== 0">
		<view class="info-title">{{ goods.title }}</view>
		<view class="info-price">
			<text class="n-price">{{ goods.newPrice }}</text>
			<text class="o-price">{{ goods.oldPrice }}</text>
			<text class="discount">{{ goods.discount }}</text>
		</view>
		<view class="info-other">
			<text>{{ goods.columns["0"] }}</text>
			<text>{{ goods.columns["1"] }}</text>
			<text>{{ goods.services[goods.services.length - 1].name }}</text>
		</view>
		<view class="info-service">
			<text
				class="info-service-item"
				v-for="index in goods.services.length - 1"
				:key="index"
			>
				<text class="iconfont icon-dagou">{{
					goods.services[index].name
				}}</text>
			</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			goods: {
				type: Object,
				default() {
					return {};
				}
			}
		}
	};
</script>

<style scoped>
	.base-info {
		margin-top: 30rpx;
		padding: 0 16rpx;
		color: #999;
		border-bottom: 10rpx solid #f2f5f8;
	}
	.info-title {
		color: #222;
		font-size: 30rpx;
	}
	.info-price {
		margin-top: 10rpx;
	}
	.info-price .n-price {
		font-size: 48rpx;
		color: #fe909d;
	}
	.info-price .o-price {
		margin-left: 10rpx;
		font-size: 26rpx;
		text-decoration: line-through;
	}
	.info-price .discount {
		background-color: #fe909d;
		font-size: 26rpx;
		color: #fff;
		padding: 4rpx 10rpx;
		border-radius: 16rpx;
		margin-left: 10rpx;
		position: relative;
		top: -16rpx;
	}
	.info-other {
		display: flex;
		justify-content: space-between;
		font-size: 26rpx;
		border-bottom: 2rpx solid rgba(100, 100, 100, 0.1);
		margin-top: 30rpx;
		line-height: 60rpx;
	}
	.info-service {
		display: flex;
		justify-content: space-between;
		line-height: 120rpx;
	}
	.info-service-item .iconfont {
		font-size: 30rpx;
	}
</style>