<template>
		<swiper class="detail-swiper" indicator-dots autoplay circular>
			<swiper-item v-for="item in topImages">
				<image :src="item" mode="widthFix"></image>
			</swiper-item>
		</swiper>
</template>

<script>
	export default {
		props: {
			topImages: {
				type: Array
			}
		}
	};
</script>

<style scoped>
.detail-swiper {
    height: 600rpx;
    overflow: hidden;
}
</style>