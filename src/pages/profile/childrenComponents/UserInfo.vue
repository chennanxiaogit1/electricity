<template>
	<view class="user">
		<view class="user-img-wrap" v-if="userInfo.avatarUrl">
			<image
				:src="userInfo.avatarUrl"
				class="user-bg"
				mode="scaleToFill"
			></image>
			<view class="user-info">
				<image
					:src="userInfo.avatarUrl"
					class="user-icon"
					mode="widthFix"
				></image>
				<text class="user-name">{{ userInfo.nickName }}</text>
			</view>
		</view>
		<button
			v-else
			open-type="getUserInfo"
			@click="getUserProfile"
			class="user-btn"
		>
			<view class="iconfont icon-weidenglu-touxiang">
				<text class="text">请点击登录/注册</text>
			</view>
		</button>
	</view>
</template>

<script>
	import { getUser } from "@/network/profile.js";
	export default {
		data() {
			return {
				userInfo: {}
			};
		},
		methods: {
			getUserProfile() {
				getUser().then(res => {
					this.userInfo = res;
				});
			}
		}
	};
</script>

<style scoped>
	.iconfont {
		font-size: 108rpx;
		color: #fff;
		display: flex;
		align-items: center;
	}
	.text {
		font-size: 32rpx;
	}
	.user-btn {
		background-color: #ddd;
	}
	.user-img-wrap {
		position: relative;
	}
	.user-img-wrap .user-bg {
		filter: blur(10rpx);
		height: 300rpx;
	}
	.user-info {
		position: absolute;
		left: 5%;
		top: 24%;
	}
	.user-icon {
		width: 150rpx;
		height: 150rpx;
		border-radius: 50%;
	}
	.user-name {
		color: #fff;
		font-size: 32rpx;
	}
</style>