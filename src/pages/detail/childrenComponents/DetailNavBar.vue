<template>
	<view class="detail">
		<nav-bar>
			<view class="iconfont icon-back back" slot="left" @click="Back"></view>
			<view class="title" slot="center">
				<view
					class="title-item"
					v-for="(item, index) in titles"
					:class="{ active: currentIndex == index }"
					@click="itemClick(index)"
					>{{ item }}</view
				>
			</view>
			<view
				class="share iconfont icon-zhuanfa"
				slot="right"
				@click="share"
			></view>
		</nav-bar>
	</view>
</template>

<script>
	import NavBar from "@/components/navBar.vue";
	export default {
		components: {
			NavBar
		},
		data() {
			return {
				titles: ["商品", "参数", "评论", "推荐"],
				currentIndex: 0
			};
		},
		emits: ["titleClick"],
		methods: {
			Back() {
				wx.navigateBack({
					delta: 1
				});
			},
			itemClick(index) {
				this.currentIndex = index;
				this.$emit("titleClick", index);
			},
			share() {
				uni.share({
					provider: "weixin",
					scene: "WXSceneSession",
					type: 1,
					summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
					success: function(res) {
						console.log("success:" + JSON.stringify(res));
					},
					fail: function(err) {
						console.log("fail:" + JSON.stringify(err));
					}
				});
			}
		}
	};
</script>

<style scoped>
	.detail {
		background-color: #fff;
	}
	.title {
		display: flex !important;
		text-align: center;
		width: calc(100vw - 240rpx);
	}
	.title-item {
		flex: 1;
		font-size: 30rpx;
	}
	.active {
		color: #fe909d;
	}
</style>