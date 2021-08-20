<template>
	<view class="list" v-if="listData.length !== 0">
		<view class="item" v-for="item in listData">
			<text class="iconfont" :class="item.icon" :style="{'color': item.iconColor}">
			</text>
			<text class="info">{{ item.info }}</text>
		</view>
	</view>
</template>

<script>
	export default {
        props:{
            listData:{
                type:Array,
                default() {
                    return []
                }
            }
        }
    };
</script>

<style scoped>
.list {
    background-color: #fff;
    font-size: 30rpx;
    color: #333;
    margin-top: 24rpx;
  }
  .list .item {
    height: 88rpx;
    line-height: 88rpx;
    position: relative;
    padding-left: 50rpx;
     border-bottom: 2rpx solid rgba(100, 100, 100, .1);
  }
  .iconfont {
      font-size: 46rpx;
  }
  .item .info {
    margin-left: 40rpx;
    font-size: 40rpx;
  }
  .item:last-of-type  {
      border-bottom: 0;
  }
</style>