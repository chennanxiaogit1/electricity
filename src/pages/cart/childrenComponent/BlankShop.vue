<template>
	<view class="blank">
		<view class="img">
			<image
				src="http://bpic.588ku.com/element_origin_min_pic/18/06/10/d72a5238ac934f314517621b91cc4f37.jpg"
				mode="widthFix"
			></image>
		</view>
		<view class="text">购物车空空如也,去逛逛吧</view>
	</view>
</template>

<script>
	export default {};
</script>

<style scoped>
	.blank {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		height: 80vh;
	}
	.img {
		width: 200rpx;
		height: 200rpx;
	}
	.img image {
		border-radius: 50%;
	}
    .text {
        margin-top: 15rpx;
        font-size: 30rpx;
        color: #878787;
    }
</style>