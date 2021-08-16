<template>
	<view class="recommend">
		<view class="recommed-item" v-for="item in recommends" :key="item.sort">
			<image :src="item.image" mode="widthFix"></image>
			<view class="recommend-title">{{ item.title }}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			recommends: {
				type: Array
			}
		}
	};
</script>

<style scoped>
	.recommend {
		padding: 20rpx 0;
		border-bottom: 7px solid #eee;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.recommed-item {
		flex: 1;
		text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
	}
	.recommed-item image {
		width: 90%;
		margin-bottom: 10rpx;
	}
</style>