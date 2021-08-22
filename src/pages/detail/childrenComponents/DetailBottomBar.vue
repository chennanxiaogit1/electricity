<template>
	<view class="bottom-bar">
		<view class="bar-item bar-left">
			<view>
				<view class="iconfont icon-kefu"></view>
				<text class="text">客服</text>
			</view>
			<view>
				<view class="iconfont icon-dianpu"></view>
				<text class="text">店铺</text>
			</view>
			<view>
				<view class="iconfont icon-shoucang"></view>
				<text class="text">收藏</text>
			</view>
		</view>
		<view class="bar-item bar-right">
			<view class="cart" @click="addToCart">加入购物车</view>
			<view class="buy">购买</view>
		</view>
	</view>
</template>

<script>
	export default {
		emits: ["addCart"],
		methods: {
			addToCart() {
				this.$emit("addCart");
			}
		}
	};
</script>

<style scoped>
	.bottom-bar {
		height: 98rpx;
		background-color: #fff;
		width: 100vw;
		display: flex;
		text-align: center;
	}
	.bar-item {
		flex: 1;
		display: flex;
	}

	.bar-item > view {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.bar-left .text {
		font-size: 26rpx;
	}

	.bar-left .icon {
		display: block;
		width: 44rpx;
		height: 44rpx;
		margin: 12rpx auto 5rpx;
	}

	.bar-right {
		font-size: 30rpx;
		color: #fff;
		line-height: 98rpx;
	}

	.bar-right .cart {
		background-color: #ffe817;
		color: #333;
	}

	.bar-right .buy {
		background-color: #f69;
	}
</style>