<template>
	<view class="navbar">
		<view class="left"><slot name="left"></slot></view>
		<view class="center"><slot name="center"></slot></view>
		<view class="right"><slot name="right"></slot></view>
	</view>
</template>

<script>
	export default {};
</script>

<style scoped>
	.navbar {
		display: flex;
		height: 88rpx;
		text-align: center;
		line-height: 88rpx;
		box-shadow: 0 1rpx 1rpx rgba(100, 100, 100, 0.1);
	}
	.left,
	.right {
		width: 120rpx;
	}
	.navbar .center {
        flex: 1;
	} 
</style>