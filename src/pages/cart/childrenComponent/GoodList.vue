<template>
	<scroll-view class="good-list" scroll-y>
		<good-item
			v-for="(item, index) in cartList"
			:itemInfo="item"
			:index="index"
			@checkedChange="checkedChange"
		></good-item>
	</scroll-view>
</template>

<script>
	import GoodItem from "@/pages/cart/childrenComponent/GoodItem";

	import { mapGetters } from "vuex";
	export default {
		components: {
			GoodItem
		},
		computed: {
			...mapGetters(["cartList"])
		},
		methods: {
			checkedChange(index) {
				this.cartList[index].checked = !this.cartList[index].checked;
				// this.itemInfo.checked = !this.itemInfo.checked;
			}
		}
	};
</script>

<style scoped>
	.good-list {
		height: calc(100vh - 88rpx - 88rpx);
		overflow: hidden;
	}
</style>