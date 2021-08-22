<template>
	<view class="goods_list">
        <good-item class="good-item" v-for="item in goods" :goodItem="item">
        </good-item>
    </view>
</template>

<script>
import GoodItem from '@/components/GoodItem'
	export default {
		props: {
			goods: {
				type: Array
			}
		},
        components:{
            GoodItem
        }
	};
</script>

<style scoped>
.goods_list {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 4rpx;
    flex-wrap: wrap;
}
.good-item {
    width: 50%;
}
</style>