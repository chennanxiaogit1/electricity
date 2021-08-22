<template>
	<view>
		<!-- 顶部导航栏 -->
		<nav-bar class="navbar"><view slot="center">购物街</view></nav-bar>
		<tab-bar-control
			:title="['流行', '新款', '精选']"
			@itemClick="tabClick"
			ref="tabcontrol1"
			class="fix"
			v-show="isStick"
		></tab-bar-control>
		<scroll-view
			scroll-y
			@scroll="scroll"
			@scrolltolower="ToMore"
			class="content"
		>
			<!-- 轮播图 -->
			<home-swiper :banner="banner" @ImageLoad="ImageLoad"></home-swiper>
			<!-- 推荐模块 -->
			<recommend-view :recommends="recommends"></recommend-view>
			<feature-view></feature-view>
			<!-- tabBar导航栏 -->
			<tab-bar-control
				class="tabControl"
				:title="['流行', '新款', '精选']"
				@itemClick="tabClick"
				ref="tabcontrol2"
			></tab-bar-control>
			<!-- 商品展示 -->
			<good-list :goods="showGoods()"></good-list>
		</scroll-view>
	</view>
</template>

<script>
	import NavBar from "@/components/navBar.vue";
	import GoodList from "@/components/GoodList";

	import HomeSwiper from "@/pages/home/chidrenComponents/HomeSwiper";
	import RecommendView from "@/pages/home/chidrenComponents/RecommendView";
	import FeatureView from "@/pages/home/chidrenComponents/FeatureView";
	import TabBarControl from "@/components/TabBarControl";

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
				tabOffsetTop: 0,
				isStick: false,
			};
		},
		components: {
			NavBar,
			GoodList,

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
			tabClick(index) {
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
				this.$refs.tabcontrol1.currentIndex = index;
				this.$refs.tabcontrol2.currentIndex = index;
			},
			scroll(e) {
				if (e.detail.scrollTop > this.tabOffsetTop) {
					this.isStick = true;
				} else {
					this.isStick = false;
				}
			},
			// 图片加载完成
			ImageLoad() {
				// console.log(this.$refs.tabControl);
				const query = uni.createSelectorQuery().in(this);
				query
					.select(".tabControl")
					.boundingClientRect(data => {
						// console.log("节点离页面顶部的距离为" + data.top);
						this.tabOffsetTop = data.top;
					})
					.exec(() => {
						// console.log(this.tabOffsetTop);
					});
			},
			ToMore() {
				this.getHomeGoods(this.type);
			}
		}
	};
</script>

<style>
	.navbar {
		background-color: #fe909d;
		font-size: 36rpx;
		color: #fff;
	}
	.content {
		height: calc(100vh - 88rpx);
	}
	.fixed {
		position: relative;
	}
</style>
