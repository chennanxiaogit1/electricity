<template>
	<view class="cart">
		<view class="hasShop" v-if="cartLength>0">
			<!-- 1.导航栏 -->
		<view class="nav-bar">
			<nav-bar class="bar">
				<view slot="center">购物车({{ cartLength }}) </view></nav-bar
			>
		</view>
		<scroll-view scroll-y class="scroll">
			<!-- 2.商品列表 -->
			<good-list></good-list>
		</scroll-view>
		<!-- 3.底部导航栏 -->
		<bottom-bar></bottom-bar>
		</view>
		<view class="blank" v-else>
			<blank-shop></blank-shop>
		</view>
	</view>
</template>

<script>
	import NavBar from "@/components/navBar.vue";
	import GoodList from "@/pages/cart/childrenComponent/GoodList";
	import BottomBar from "@/pages/cart/childrenComponent/BottomBar";
	import BlankShop from "@/pages/cart/childrenComponent/BlankShop"

	import { mapGetters } from "vuex";
	export default {
		components: {
			NavBar,
			GoodList,
			BottomBar,
			BlankShop
		},
		computed: {
			// 将get属性转化为计算属性
			...mapGetters(["cartLength"])
		},
		methods: {}
	};
</script>

<style scoped>
	.cart {
		height: 100vh;
	}
	.nav-bar {
		position: relative;
		height: 88rpx;
	}
	.bar {
		width: 100vw;
		background-color: #f69;
		position: absolute;
		color: #fff;
		font-size: 30rpx;
		font-weight: 700;
	}
	.scroll {
		height: calc(100vh - 88rpx - 88rpx);
	}
</style>
