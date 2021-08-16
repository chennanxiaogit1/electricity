<template>
	<view>
		<swiper indicator-dots autoplay circular>
			<swiper-item v-for="item in banner" :key="item.acm">
				<image :src="item.image" mode="widthFix" @load="ImageLoad"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		emits:["ImageLoad"],
		props: {
			banner: {
				type: Array
			}
		},
		methods: {
			ImageLoad() {
				this.$emit("ImageLoad");
			}
		}
	};
</script>

<style>
</style>