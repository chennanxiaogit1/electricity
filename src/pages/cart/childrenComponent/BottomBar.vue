<template>
	<view class="bottom-menu">
		<checkbox-group>
			<checkbox @click="checkBtnClick" :checked="isSelectAll"></checkbox>
		</checkbox-group>
		<span class="all">全选</span>
		<span class="total-price">合计: ¥{{ totalPrice }}</span>
		<span class="buy-product">去结算({{ totalNum }})</span>
	</view>
</template>

<script>
	export default {
		computed: {
			totalPrice() {
				const cartList = this.$store.getters.cartList;
				return cartList
					.filter(item => {
						return item.checked;
					})
					.reduce((preValue, item) => {
						return (preValue += item.count * item.newPrice);
					}, 0)
					.toFixed(2);
			},
			totalNum() {
				return this.$store.getters.cartCount;
			},
			isSelectAll() {
				return (
					this.$store.getters.cartList.find(item => item.checked == false) ==
					undefined
				);
			}
		},
		methods: {
			checkBtnClick() {
				let isSelectAll = this.$store.getters.cartList.find(
					item => !item.checked
				);
				if (isSelectAll) {
					this.$store.getters.cartList.map(item => (item.checked = true));
				} else {
					this.$store.getters.cartList.map(item => (item.checked = false));
				}
			}
		}
	};
</script>

<style scoped>
	.bottom-menu {
		width: 100%;
		height: 88rpx;
		background-color: #fff;
		box-shadow: 0 -2px 3px rgba(0, 0, 0, 0.2);
		font-size: 28rpx;
		color: #888;
		line-height: 88rpx;
		padding-left: 70rpx;
		box-sizing: border-box;
		position: relative;
	}

	.bottom-menu checkbox-group {
		position: absolute;
		line-height: 0;
		left: 22rpx;
		top: 16rpx;
	}
	.all {
		margin-left: 20rpx;
	}
	.bottom-menu .total-price {
		margin-left: 30rpx;
		font-size: 32rpx;
		color: #666;
	}

	.bottom-menu .buy-product {
		background-color: orangered;
		color: #fff;
		width: 200rpx;
		height: 88rpx;
		text-align: center;
		line-height: 88rpx;
		float: right;
	}
</style>