<template>
	<view class="goods-info" v-if="Object.keys(detailInfo).length !== 0">
		<view class="info-desc">
			<view class="start"></view>
			<view class="desc">{{ detailInfo.desc }}</view>
			<view class="end"></view>
		</view>
		<view class="info-key">{{ detailInfo.detailImage[0].key }}</view>
		<view class="info-list">
			<image
				:src="item"
				v-for="item in detailInfo.detailImage[0].list"
				mode="widthFix"
				@load="imageLoad"
			></image>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			detailInfo: {
				type: Object,
				default() {
					return {};
				}
			}
		},
		data() {
			return {
				imagesLength: 0,
				counter: 0
			};
		},
		watch: {
			detailInfo() {
				this.imagesLength = this.detailInfo.detailImage[0].list.length;
			}
		},
		emits: ["imageLoads"],
		methods: {
			imageLoad() {
		
				// console.log(typeof(this.counter));
				if (++this.counter === this.imagesLength) {
					this.$emit("imageLoads");
				}
				
			}
		}
	};
</script>

<style scoped>
	.goods-info {
		padding: 40rpx 0;
		border-bottom: 10rpx solid #f2f5f8;
	}
	.info-desc {
		padding: 0 15rpx;
	}
	.info-desc .start,
	.info-desc .end {
		width: 180rpx;
		height: 2rpx;
		background-color: #a3a3a5;
		position: relative;
	}
	.info-desc .start {
		left: 0;
	}

	.info-desc .end {
		left: 550rpx;
		/* top: 22rpx; */
	}
	.info-desc .start::before,
	.info-desc .end::after {
		content: "";
		position: absolute;
		width: 10rpx;
		height: 10rpx;
		background-color: #333;
		bottom: 0;
	}
	.info-desc .end::after {
		right: 0;
	}
	.info-desc .desc {
		padding: 30rpx 0;
		font-size: 32rpx;
	}
	.info-key {
		margin: 20rpx auto;
		color: #333;
		font-size: 36rpx;
		text-align: center;
	}
	.info-list image {
		width: 100%;
	}
</style>