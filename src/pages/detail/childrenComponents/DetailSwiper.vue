<template>
	<swiper class="detail-swiper" indicator-dots autoplay circular>
		<swiper-item v-for="(item, index) in topImages" @click="imageClick(index)">
			<image :src="item" mode="widthFix" @load="imageLoad"></image>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		props: {
			topImages: {
				type: Array
			}
		},
		data() {
			return {
				topImage: [],
				imageLength: 0,
				counter: 0
			};
		},

		methods: {
			imageClick(index) {
				wx.previewImage({
					current: this.topImage[0], // 当前显示图片的http链接
					urls: this.topImage // 需要预览的图片http链接列表
				});
			},
			imageLoad() {
				if (++this.counter == this.imageLength) {
					this.topImage = this.topImages;
					this.topImage = this.topImage.map(item => (item = "http:" + item));
				}
			}
		},
		watch: {
			topImages() {
				this.imageLength = this.topImages.length;
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