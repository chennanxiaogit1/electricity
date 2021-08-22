<template>
	<view class="category">
		<view class="nav">
			<nav-bar class="nav-bar"><view slot="center">商品分类</view></nav-bar>
		</view>
		<view class="content">
			<!-- 左侧菜单 -->
			<view class="left">
				<tab-menu :category="category" @selectItem="selectItem"></tab-menu>
			</view>
			<!-- 右侧菜单 -->
			<scroll-view class="right" scroll-y>
				<tab-content-category
					:subcategories="showSubcategory"
				></tab-content-category>
				<tab-bar-control
					:title="['综合', '新品', '销量']"
					@itemClick="tabClick"
				></tab-bar-control>
				<good-list class="good-list" :goods="showCategoryDetail"></good-list>
			</scroll-view>
		</view>
	</view>
</template>	

<script>
	import NavBar from "@/components/navBar";
	import TabBarControl from "@/components/TabBarControl";
	import { tabControlMiXin } from "@/common/mixin.js";
	import GoodList from "@/components/GoodList";

	import TabMenu from "@/pages/category/childrenComponent/TabMenu";
	import TabContentCategory from "@/pages/category/childrenComponent/TabContentCategory";
	import TabContentDetail from "@/pages/category/childrenComponent/TabContentDetail";
	import {
		getCategory,
		getSubcategory,
		getCategoryDetail
	} from "@/network/category.js";
	export default {
		components: {
			NavBar,
			TabBarControl,
			GoodList,
			TabMenu,
			TabContentCategory,
			TabContentDetail
		},
		mixins: [tabControlMiXin],
		data() {
			return {
				category: [],
				categoryData: {},
				currentIndex: -1
			};
		},
		onLoad() {
			// 获取分类列表数据
			this._getCategory();
		},
		computed: {
			showSubcategory() {
				if (this.currentIndex === -1) return {};
				return this.categoryData[this.currentIndex].subcategories;
			},
			showCategoryDetail() {
				if (this.currentIndex === -1) return [];
				console.log(
					this.categoryData[this.currentIndex].categoryDetail[this.type]
				);
				return this.categoryData[this.currentIndex].categoryDetail[this.type];
			}
		},
		methods: {
			async _getCategory() {
				const res = await getCategory();
				// 1.获取分类数据
				this.category = res.data.category.list;
				// 2.初始化每个类别的子数据
				for (let i = 0; i < this.category.length; i++) {
					this.categoryData[i] = {
						// 包含每个子类的总子类
						subcategories: {},
						categoryDetail: {
							pop: [],
							new: [],
							sell: []
						}
					};
				}

				// 请求第一个分类的数据
				this._getSubcategories(0);
			},
			async _getSubcategories(index) {
				this.currentIndex = index;
				let maitKey = this.category[index].maitKey;
				const res = await getSubcategory(maitKey);
				this.categoryData[index].subcategories = res.data;
				console.log(res);
				// 将categoryData数组 转换为 对象
				this.categoryData = { ...this.categoryData };
				this._getCategoryDetail("pop");
				this._getCategoryDetail("new");
				this._getCategoryDetail("sell");
			},
			async _getCategoryDetail(type) {
				// 1.获取请求的minWallkey
				let minWallkey = this.category[this.currentIndex].miniWallkey;
				const res = await getCategoryDetail(minWallkey, type);
				this.categoryData[this.currentIndex].categoryDetail[type] = res;
				this.categoryData = { ...this.categoryData };
			},
			/**
			 *事情响应的方法
			 */
			selectItem(index) {
				this._getSubcategories(index);
			}
		}
	};
</script>

<style scoped>
	.category {
		height: 100vh;
	}
	.nav {
		position: relative;
		height: 88rpx;
	}
	.nav-bar {
		position: absolute;
		width: 100vw;
		background-color: #f69;
		color: #fff;
		font-size: 32rpx;
		font-size: 700;
	}
	.content {
		height: calc(100vh - 88rpx);
		display: flex;
	}
	.content .left {
		flex: 1;
	}
	.content .right {
		/* 防止子元素宽度超出父元素 */
		min-width: 0;
		flex: 2;
	}
	.content-detail {
		width: 100%;
		position: relative;
	}
</style>
