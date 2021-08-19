<template>
	<view class="detail">
		<!-- 首部导航栏 -->
		<detail-nav-bar @titleClick="titleClick"></detail-nav-bar>

		<!-- 轮播图 -->
		<detail-swiper :topImages="topImages"></detail-swiper>
		<!-- 商品基本信息 -->
		<detail-base-info :goods="goods"></detail-base-info>
		<!-- 店铺的基本信息 -->
		<detail-shop-info :shop="shop"></detail-shop-info>
		<!-- 商品的详情信息 -->
		<detail-goods-info
			@imageLoads="imageLoad"
			:detailInfo="detailInfo"
		></detail-goods-info>
		<!-- 商品参数 -->
		<detail-param-info
			:paramInfo="paramInfo"
			class="params"
		></detail-param-info>
		<!-- 商品评价 -->
		<detail-comment-info
			:commentInfo="commentInfo"
			class="comment"
		></detail-comment-info>
		<!-- 商品推荐 -->
		<good-list :goods="recommendInfo" class="recommend"></good-list>
		<!-- 回到顶部 -->
		<back-top class="back-top" v-if="isShow" @backTop="backTop"></back-top>
		<!-- 底部导航栏 -->
		<detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
	</view>
</template>

<script>
	import GoodList from "@/components/GoodList";
	import BackTop from "@/components/DetailBackTop";

	import DetailNavBar from "@/pages/detail/childrenComponents/DetailNavBar";
	import DetailSwiper from "@/pages/detail/childrenComponents/DetailSwiper";
	import DetailBaseInfo from "@/pages/detail/childrenComponents/DetailBaseInfo";
	import DetailShopInfo from "@/pages/detail/childrenComponents/DetailShopInfo";
	import DetailGoodsInfo from "@/pages/detail/childrenComponents/DetailGoodsInfo";
	import DetailParamInfo from "@/pages/detail/childrenComponents/DetailParamInfo";
	import DetailCommentInfo from "@/pages/detail/childrenComponents/DetailCommentInfo";
	import DetailBottomBar from "@/pages/detail/childrenComponents/DetailBottomBar";

	import {
		getDetail,
		getRecommend,
		Good,
		Shop,
		GoodsParam,
		Offset
	} from "@/network/detail.js";
	export default {
		data() {
			return {
				iid: -1,
				// 轮播图
				topImages: [],
				// 商品的基本信息
				goods: {},
				// 店铺信息
				shop: {},
				// 商品详情信息
				detailInfo: {},
				// 商品参数
				paramInfo: {},
				// 商品评价
				commentInfo: {},
				// 商品推荐
				recommendInfo: [],
				isShow: false,
				themeTopYs: []
			};
		},
		components: {
			GoodList,
			BackTop,

			DetailNavBar,
			DetailSwiper,
			DetailBaseInfo,
			DetailShopInfo,
			DetailGoodsInfo,
			DetailParamInfo,
			DetailCommentInfo,
			DetailBottomBar
		},
		async onLoad(options) {
			console.log(options);
			this.iid = options.iid;
			const res = await getDetail(this.iid);
			// 1.获取轮播图数据
			this.topImages = res.result.itemInfo.topImages;
			// 2.获取商品的基本信息
			this.goods = new Good(
				res.result.itemInfo,
				res.result.columns,
				res.result.shopInfo.services
			);
			// 3.获取店铺信息
			this.shop = new Shop(res.result.shopInfo);
			// 4.获取商品的详情信息
			this.detailInfo = res.result.detailInfo;
			// 5.获取商品的参数信息
			this.paramInfo = new GoodsParam(
				res.result.itemParams.info,
				res.result.itemParams.rule
			);
			// 6.获取用户的评价
			if (res.result.rate.cRate !== 0) {
				this.commentInfo = res.result.rate.list[0];
			}
			// 7.获取推荐商品数据
			const res1 = await getRecommend();
			this.recommendInfo = [...this.recommendInfo, ...res1.data.list];
		},
		async onReachBottom() {
			const res = await getRecommend();
			this.recommendInfo = [...this.recommendInfo, ...res.data.list];
		},
		onPageScroll({ scrollTop }) {
			if (scrollTop > 1000) {
				this.isShow = true;
			} else {
				this.isShow = false;
			}
		},
		methods: {
			backTop() {
				wx.pageScrollTo({
					scrollTop: 0,
					duration: 300
				});
			},
			titleClick(index) {
				wx.pageScrollTo({
					scrollTop: this.themeTopYs[index],
					duration: 300
				});
			},
			imageLoad() {
				this.themeTopYs.push(0);
				let query1 = uni.createSelectorQuery().in(this);
				query1
					.select(".params")
					.boundingClientRect(data => {
						this.themeTopYs.push(data.top);
					})
					.exec(() => {});
				let query2 = uni.createSelectorQuery().in(this);
				query2
					.select(".comment")
					.boundingClientRect(data => {
						this.themeTopYs.push(data.top);
					})
					.exec(() => {});
				let query3 = uni.createSelectorQuery().in(this);
				query3
					.select(".recommend")
					.boundingClientRect(data => {
						this.themeTopYs.push(data.top);
					})
					.exec(() => {});
			},
			// 加入购物车
			addToCart() {
				// 1.创建对象
				let obj = {};
				// 2.对象的信息
				obj.iid = this.iid;
				obj.imgURL = this.topImages[0];
				obj.title = this.goods.title;
				obj.desc = this.goods.desc;
				obj.newPrice = this.goods.nowPrice;
				// 3.添加到购物车中
				this.$store.dispatch("addCart",obj).then(res=> {
					wx.showToast({
						title: res,
						icon: 'none',	
					});
					  
				});
			}
		},
		onReady() {}
	};
</script>

<style scoped>
	.detail {
		padding-top: 88rpx;
		padding-bottom: 98rpx;
	}
	.back-top {
		position: absolute;
	}
</style>
