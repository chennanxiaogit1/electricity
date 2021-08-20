<template>
	<view class="profile">
		<!-- 1.顶部导航 -->
		<nav-bar class="nav-bar"><view slot="center">小南杂货店</view></nav-bar>
		<!-- 2.用户 -->
		<user-info></user-info>
		<!-- 3.个人信息 -->
		<view class="account">
			<view class="account-item">
				<view class="number"><text class="balance">0.00</text>元</view>
				<view class="account-info">我的余额</view>
			</view>
			<view class="account-item">
				<view class="number"> <text class="balance">0</text>个</view>
				<view class="account-info">我的优惠</view>
			</view>
			<view class="account-item">
				<view class="number"> <text class="balance">0</text>分</view>
				<view class="account-info">我的积分</view>
			</view>
		</view>
		<!-- 4. -->
		<list-view class="order-list" :list-data="orderList"></list-view>
		<list-view class="order-list" :list-data="serviceList"></list-view>
	</view>
</template>

<script>
	import NavBar from "@/components/navBar";

	import UserInfo from "@/pages/profile/childrenComponents/UserInfo";
	import ListView from "@/pages/profile/childrenComponents/ListView";
	export default {
		components: {
			NavBar,
			UserInfo,
			ListView
		},
		data() {
			return {
				orderList: [
					{ icon: ".icon-wodexiaoxi", iconColor: "#ff8198", info: "我的消息" },
					{
						icon: ".icon-jifenshangcheng",
						iconColor: "#fc7b53",
						info: "积分商城"
					},
					{ icon: ".icon-huiyuanka", iconColor: "#ffc636", info: "会员卡" }
				],
				serviceList: [
					{ icon: "icon-dagou", iconColor: "#ff8198", info: "我的购物车" },
					{ icon: "icon-xiazai", iconColor: "#ff8198", info: "下载购物APP" }
				]
			};
		}
	};
</script>

<style scoped>
	.profile {
		background-color: #f2f2f2;
	}

	.nav-bar {
		font-weight: 700;
		font-size: 32rpx;
	}
	.account {
		display: flex;
		position: relative;
	}
	.account-item {
		flex: 1;
		background-color: #fff;
		text-align: center;
		margin-right: 2rpx;
		color: #666;
		font-size: 26rpx;
		padding: 36rpx;
	}
	.account-item:last-of-type {
		margin-right: 0;
	}
	.account-item .balance {
		font-size: 48rpx;
		font-weight: 700;
		color: #ff5f3e;
	}
	.account-info {
		margin-top: 12rpx;
	}
</style>
