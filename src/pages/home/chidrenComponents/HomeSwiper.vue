<template>
	<view>
		<swiper indicator-dots autoplay circular>
			<swiper-item v-for="item in banner" :key="item.acm">
				<image :src="item.image" mode="widthFix"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		props: {
			banner: {
				type: Array
			}
		},
	};
</script>

<style>
</style>