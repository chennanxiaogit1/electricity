<template>
	<view class="goods_list">
        <good-item v-for="item in goods" :goodItem="item">
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
    width: 100vw;
    display: flex;
    justify-content: space-between;
    padding: 0 4rpx;
    flex-wrap: wrap;
}
</style>