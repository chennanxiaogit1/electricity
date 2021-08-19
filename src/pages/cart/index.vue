<template>
	<view class="cart">
		<!-- 1.导航栏 -->
		<nav-bar class="bar">
			<view slot="center">购物车({{ cartLength }}) </view></nav-bar
		>
		<!-- 2.商品列表 -->
		<good-list></good-list>
		<!-- 3.底部导航栏 -->
		<bottom-bar></bottom-bar>
	</view>
</template>

<script>
	import NavBar from "@/components/navBar.vue";
	import GoodList from "@/pages/cart/childrenComponent/GoodList";
	import BottomBar from "@/pages/cart/childrenComponent/BottomBar";

	import { mapGetters } from "vuex";
	export default {
		components: {
			NavBar,
			GoodList,
			BottomBar
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
	.bar {
		background-color: red;
		/* color: #fff; */
		font-size: 30rpx;
		font-weight: 700;
	}
</style>
