<template>
	<view class="comment-info" v-if="Object.keys(commentInfo).length !== 0">
		<view class="info-header">
			<view class="header-title">用户评价</view>
			<view class="header-more">更多</view>
		</view>
		<view class="info-user">
			<image :src="commentInfo.user.avatar" mode="widthFix"></image>
			<text>{{ commentInfo.user.uname }}</text>
		</view>
		<view class="info-detail">
			<view>{{ commentInfo.content }}</view>
			<view class="info-other">
				<text class="date">{{ showDate }}</text>
				<text>{{ commentInfo.style }}</text>
			</view>
			<view class="info-imgs">
				<image
					:src="item"
					v-for="(item, index) in commentInfo.images"
					mode="widthFix"
				></image>
			</view>
		</view>
	</view>
</template>

<script>
	import { formatDate } from "@/common/utils.js";
	export default {
		props: {
			commentInfo: {
				type: Object,
				default() {
					return {};
				}
			}
		},
		computed: {
			showDate() {
				let date = new Date(this.commentInfo.created * 1000);
				return formatDate(date, "yyyy-MM-dd");
			}
		}
	};
</script>

<style scoped>
	.info-header {
		padding: 10rpx 24rpx;
		color: #333;
		border-bottom: 10rpx solid #f2f5f8;
	}
	.info-header {
		height: 100rpx;
		line-height: 100rpx;
		border-bottom: 2rpx solid rgba(0, 0, 0, 0.1);
	}
	.header-title {
		float: left;
		font-size: 30rpx;
	}
	.header-more {
		float: right;
		margin-right: 20rpx;
		font-size: 26rpx;
	}
	.info-user {
		padding: 20rpx 0 10rpx;
	}
	.info-user image {
		display: inline-block;
		width: 84rpx;
		height: 84rpx;
		border-radius: 50%;
	}
	.info-user text {
		position: relative;
		font-size: 30rpx;
		top: -27rpx;
		margin-left: 20rpx;
	}
	.info-detail {
		padding: 0 10rpx 30rpx;
        border-bottom: 2rpx solid rgba(0, 0, 0, 0.1);
	}

	.info-detail view {
		font-size: 32rpx;
		color: #777;
		line-height: 1.5;
	}

	.info-detail .info-other {
		font-size: 24rpx;
		color: #999;
		margin-top: 20rpx;
        overflow: hidden;
	}
	.info-other .date {
		margin-right: 16rpx;
		float: left!important;;
	}
	.info-detail .info-other text {
		float: right;
	}

	.info-imgs {
		margin-top: 20rpx;
	}

	.info-imgs image {
		width: 140rpx;
		margin-right: 10rpx;
	}
</style>