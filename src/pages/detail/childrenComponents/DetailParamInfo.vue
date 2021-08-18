<template>
	<view class="param-info" v-if="Object.keys(paramInfo).length !== 0">
		<view
			class="info-size"
			v-for="(table, index) in paramInfo.sizes"
			:key="index"
		>
			<view v-for="(tr, indey) in table" :key="indey">
				<text v-for="(td, indez) in tr" :key="indexz">{{ td }}</text>
			</view>
		</view>
		<view class="info-param">
			<view v-for="(info, index) in paramInfo.infos">
				<text class="info-param-key">{{ info.key }}</text>
				<text class="param-value">{{ info.value }}</text>
			</view>
		</view>
		<view class="info-img" v-if="paramInfo.image.length !== 0">
			<image :src="paramInfo.image" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			paramInfo: {
				type: Object,
				default() {}
			}
		}
	};
</script>

<style scoped>
	.param-info {
		padding: 40rpx 30rpx;
		font-size: 28rpx;
		border-bottom: 10rpx solid #f2f5f8;
	}

	.param-info .info-size {
		width: 100%;
		border-collapse: collapse;
		font-size: 36rpx;
	}

	.param-info .info-size view {
		height: 80rpx;
		display: flex;
		text-align: center;
		align-items: center;
		border-bottom: 2rpx solid rgba(100, 100, 100, 0.1);
	}
	.param-info .info-size view:last-child {
		border-bottom: 0;
	}
	.param-info .info-size view text {
		flex: 1;
	}

	.info-param view {
		display: flex;
		border-bottom: 2rpx solid rgba(100, 100, 100, 0.1);
		font-size: 36rpx;
		align-items: center;
		text-indent: 1em;
		padding: 20rpx 0;
	}
	.info-param view:last-child {
		border-bottom: 0;
	}
	.info-param-key {
		flex: 1;
	}
	.param-value {
		color: #eb4868;
		flex: 3;
	}
	.info-param {
		border-top: 6rpx solid rgba(0, 0, 0, 0.1);
	}
    .info-img image {
		width: 100%;
	}
</style>