<template>
	<view class="tabbarcontrol">
		<view
			class="control-item"
			v-for="(item, index) in title"
			:class="{ active: currentIndex == index }"
            @click="itemClick(index)"
		>
			<text>{{ item }}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			title: {
				type: Array
			}
		},
		data() {
			return {
				currentIndex: 0
			};
		},
        emits:["itemClick"],
        methods:{
            itemClick(index) {
                this.currentIndex = index;
                this.$emit("itemClick",index)
            }
        }
	};
</script>

<style scoped>
	.tabbarcontrol {
		display: flex;
		font-size: 30rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		background-color: #fff;
	}
	.control-item {
		flex: 1;
	}
	.control-item text {
		padding: 10rpx;
	}
	.active {
		color: #fe909d;
		border-bottom: 1rpx solid #fe909d;
	}
</style>