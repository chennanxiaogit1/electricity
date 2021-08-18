<template>
	<view class="back-top" @click="backTop">
		<view class="iconfont icon-huidaodingbu"></view>
	</view>
</template>

<script>
	export default {
		emits: ["backTop"],
		methods: {
			backTop() {
				this.$emit("backTop");
			}
		},
		created() {
			this.src = ".././staic/image/tabbar/home.png";
			// console.log(this.src);
		}
	};
</script>

<style scoped>
	.back-top {
		position: fixed;
		right: 16rpx;
		bottom: 100rpx;
		z-index: 3;
	}
	.back-top .iconfont {
		font-size: 60rpx;
	}
</style>