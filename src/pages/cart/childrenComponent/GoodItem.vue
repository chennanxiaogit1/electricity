<template>
	<view class="shop-item" v-if="Object.keys(itemInfo).length !== 0">
		<view class="item-selector">
			<checkbox-group>
				<checkbox @click="checkedChange" :checked="itemInfo.checked"></checkbox>
			</checkbox-group>
		</view>
		<view class="item-img">
			<image :src="itemInfo.imgURL" mode="widthFix"></image>
		</view>
		<view class="item-info">
			<view class="item-title">{{ itemInfo.title }}</view>
			<view class="item-desc">商品描述：{{ itemInfo.desc }}</view>
			<view class="info-bottom">
				<view class="item-price">￥{{ itemInfo.newPrice }}</view>
				<view class="item -count">x{{ itemInfo.count }}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			itemInfo: {
				type: Object,
				default() {
					return {};
				}
			},
			index: {
				type: Number,
				default: 0
			}
		},
		emits: ["checkedChange"],
		methods: {
			checkedChange() {
				this.$emit("checkedChange", this.index);
				// this.itemInfo.checked = !this.itemInfo.checked;
			}
		}
	};
</script>

<style scoped>
	.shop-item {
		display: flex;
		width: 100vw;
		font-size: 0;
		padding: 10rpx;
		border-bottom: 2rpx solid #ccc;
	}
	.shop-item .item-selector {
		width: 14%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.item-img {
		padding: 10rpx;
		/*border: 1px solid #ccc;*/
	}
	.item-img image {
		width: 160rpx;
		height: 200rpx;
		display: block;
		border-radius: 10rpx;
	}
	.item-title,
	.item-desc {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.item-title {
		font-size: 36rpx;
	}
	.item-info {
		font-size: 34rpx;
		color: #333;
		padding: 10rpx 20rpx;
		position: relative;
		overflow: hidden;
	}
	.item-desc {
		font-size: 30rpx;
	}
	.item-info .item-desc {
		font-size: 28rpx;
		color: #666;
		margin-top: 30rpx;
	}
	.info-bottom {
		margin-top: 70rpx;
		position: relative;
		padding-right: 20rpx;
		bottom: 20rpx;
		left: 20rpx;
		right: 20rpx;
		display: flex;
		justify-content: space-between;
	}

	.info-bottom .item-price {
		color: orangered;
	}
</style>