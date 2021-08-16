<template>
	<view class="detail">
		<!-- 首部导航栏 -->
		<detail-nav-bar></detail-nav-bar>
		<!-- 轮播图 -->
		<detail-swiper :topImages="topImages"></detail-swiper>
		<!-- 商品基本信息 -->
		<detail-base-info :goods="goods"></detail-base-info>
	</view>
</template>

<script>
	import DetailNavBar from "@/pages/detail/childrenComponents/DetailNavBar";
	import DetailSwiper from "@/pages/detail/childrenComponents/DetailSwiper";
	import DetailBaseInfo from "@/pages/detail/childrenComponents/DetailBaseInfo";

	import { getDetail, Good } from "@/network/detail.js";
	export default {
		data() {
			return {
				iid: -1,
				// 轮播图
				topImages: [],
				// 商品的基本信息
				goods: {}
			};
		},
		components: {
			DetailNavBar,
			DetailSwiper,
			DetailBaseInfo
		},
		async onLoad(options) {
			this.iid = "1m745k0";
			const res = await getDetail(this.iid);
			console.log(res);
			// 1.获取轮播图数据
			this.topImages = res.result.itemInfo.topImages;
			// 2.获取商品的基本信息
			this.goods = new Good(
				res.result.itemInfo,
				res.result.columns,
				res.result.shopInfo.services
			);
			console.log(this.goods.services);
		},
		methods: {}
	};
</script>

<style scoped>
	.detail {
		padding-top: 88rpx;
	}
</style>
