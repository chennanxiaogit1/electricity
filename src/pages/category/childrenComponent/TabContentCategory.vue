<template>
	<view class="grid-view" v-if="Object.keys(subcategories).length !== 0">
		<view class="item" v-for="(item, index) in subcategories.list">
			<image class="item-img" :src="item.image" mode="widthFix"></image>
			<view class="item-text">{{ item.title }}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			subcategories: {
				type: Object,
				default() {
					return {};
				}
			}
		}
	};
</script>

<style scoped>
	.grid-view {
		display: flex;
		flex-wrap: wrap;
		padding: 40rpx 18rpx;
	}
	.item {
		text-align: center;
		font-size: 24rpx;
		width: 33.33%;
	}
	.item-img {
		width: 100%;
	}
	.item-text {
		margin-top: 30rpx;
	}
</style>