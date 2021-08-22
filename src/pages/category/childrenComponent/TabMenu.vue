<template>
	<scroll-view scroll-y v-if="category.length !== 0" class="tab-menu">
		<view class="menu-list">
			<view
				class="menu-item"
				v-for="(item, index) in category"
				:class="{ active: currentIndex == index }"
				@click="itemClick(index)"
				>{{ item.title }}</view
			>
		</view>
	</scroll-view>
</template>

<script>
	export default {
		props: {
			category: {
				type: Array,
				default() {
					return [];
				}
			}
		},
		data() {
			return {
				currentIndex: 0
			};
		},
    emits:["selectItem"],
		methods: {
			itemClick(index) {
				this.currentIndex = index;
        this.$emit("selectItem",index);
			}
		}
	};
</script>

<style scoped>
	.tab-menu {
		background-color: #f6f6f6;
		height: 100%;
		width: 100%;
		box-sizing: border-box;
	}
	.menu-item {
		height: 90rpx;
		line-height: 90rpx;
		text-align: center;
		font-size: 28rpx;
	}
	.active {
		font-weight: 700;
		color: #ff5777;
		background-color: #fff;
		border-left: 6rpx solid #ff5777;
	}
</style>