<template>
	<navigator class="good-item" :url="`/pages/detail/index?iid=${goodItem.iid}`">

		<image :src="ShowImg()"></image>
		<view class="good-info">
			<p>{{ goodItem.title }}</p>
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
				return this.goodItem.image || this.goodItem.show.img;
			}
		}
	};
</script>

<style scoped>
	.good-item {
		width: 49vw;
	}
	.good-item image {
		width: 100%;
		border-radius: 10rpx;
	}
	.good-info {
		font-size: 24rpx;
		text-align: center;
	}
	.good-info p {
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