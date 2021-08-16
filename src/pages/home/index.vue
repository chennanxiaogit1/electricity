<template>
	<view class="content">
		<!-- 顶部导航栏 -->
		<nav-bar class="navbar"><view slot="center">购物街</view></nav-bar>
		<!-- 轮播图 -->
		<home-swiper :banner="banner"></home-swiper>
		<!-- 推荐模块 -->
		<recommend-view :recommends="recommends"></recommend-view>
		<feature-view></feature-view>
		<!-- tabBar导航栏 -->
		<tab-bar-control
			:title="['流行', '新款', '精选']"
			@itemClick="itemClick"
		></tab-bar-control>
		<!-- 商品展示 -->
		<good-list :goods="showGoods()"></good-list>
		<!-- 回到顶部 -->
		<back-top></back-top>
	</view>
</template>

<script>
	import NavBar from "@/components/navBar.vue";
	import GoodList from "@/components/GoodList";
import BackTop from "@/components/BackTop";

	import HomeSwiper from "@/pages/home/chidrenComponents/HomeSwiper";
	import RecommendView from "@/pages/home/chidrenComponents/RecommendView";
	import FeatureView from "@/pages/home/chidrenComponents/FeatureView";
	import TabBarControl from "@/pages/home/chidrenComponents/TabBarControl";

	import { request } from "@/network/request.js";
	export default {
		data() {
			return {
				// 轮播图
				banner: [],
				// 推荐
				recommends: [],
				// 商品的类型和页数
				goods: {
					pop: { page: 0, list: [] },
					new: { page: 0, list: [] },
					sell: { page: 0, list: [] }
				},
				type: "pop",
				// 回到顶部的图标是否显示
				isShow:false 
			};
		},
		components: {
			NavBar,
			GoodList,
			BackTop,

			HomeSwiper,
			RecommendView,
			FeatureView,
			TabBarControl
		},
		async onShow() {
			// 请求数据
			this.getHomeMultidata();
			// 商品数据
			this.getHomeGoods("pop");
			this.getHomeGoods("new");
			this.getHomeGoods("sell");
		},
		methods: {
			async getHomeMultidata() {
				const res = await request({ url: "/home/multidata" });
				this.banner = res.data.banner.list;
				this.recommends = res.data.recommend.list;
			},
			async getHomeGoods(type) {
				let page = this.goods[type].page + 1;
				const res = await request({ url: "/home/data", data: { type, page } });
				this.goods[type].list = [...this.goods[type].list, ...res.data.list];
				this.goods[type].page++;
			},

			showGoods() {
				return this.goods[this.type].list;
			},
			itemClick(index) {
				switch (index) {
					case 0:
						this.type = "pop";
						break;
					case 1:
						this.type = "new";
						break;
					case 2:
						this.type = "sell";
						break;
				}
			}
		},
		onReachBottom() {
			this.getHomeGoods(this.type);
		},
		onPageScroll(scrollTop) {
			// if()
		}
	};
</script>

<style>
	.content {
		padding-top: 88rpx;
	}
	.navbar {
		background-color: #fe909d;
		font-size: 36rpx;
		color: #fff;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		z-index: 999;
	}
</style>
