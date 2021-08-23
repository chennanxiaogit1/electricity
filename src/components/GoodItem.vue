<template>
	<navigator class="good-item" :url="`/pages/detail/index?iid=${getId}`">
		<image :src="ShowImg()" mode="widthFix"></image>
		<view class="good-info">
			<view>{{ goodItem.title }}</view>
			<text class="price">{{ goodItem.price }}</text>
			<text class="iconfont icon-shoucang collect">{{ goodItem.cfav }}</text>
		</view>
	</navigator>
</template>

<script>
	export default {
		props: {
			goodItem: {
				type: Object
			}
		},
		methods: {
			ShowImg() {
				return this.goodItem.img || this.goodItem.image || this.goodItem.show.img;
			}
		},
		computed: {
			getId() {
				return this.goodItem.iid || this.goodItem.item_id;
			}
		}
	};
</script>

<style scoped>
	.good-item {
		width: 98%;
	}
	.good-item image {
		width: 100%;
		border-radius: 10rpx;
	}
	.good-info {
		font-size: 24rpx;
		text-align: center;
	}
	.good-info view {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin-bottom: 6rpx;
	}
	.good-info .price {
		color: #fe909d;
		margin-right: 20rpx;
	}
	.good-info .collect {
		font-size: 28rpx;
	}
</style>