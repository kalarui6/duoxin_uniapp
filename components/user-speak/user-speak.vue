<template>
	<view class="wrapper">
		<view class="desc-wrap" ref="descWrapRef">
			<text class="desc-text" ref="descTextRef">{{desc}}</text>
			<view :v-if="isShowViewMore" class="viewMore">
				<text class="desc-text" ref="descTextRef">全文</text>
			</view>
		</view>
		<up-album class="album-wrap" :urls="urls" maxCount="6" singleSize="100" :space="imgGap"
			:multipleSize="mutiImgWidth"></up-album>
		<up-line margin="0.06rem 0" color="#2979ff" hairline></up-line>

		<view class="operate-wrap">
			<view class="operate">
				<up-icon name="share-square" color="#000000" size="16"></up-icon>
				<text class="text">20</text>

			</view>
			<up-line color="#2979ff" style="height: 0.14rem;" direction="col" hairline></up-line>

			<view class="operate">
				<up-icon name="chat-fill" color="#000000" size="16"></up-icon>
				<text class="text">1000</text>
				

			</view>
			<up-line color="#2979ff" style="height: 0.14rem;" direction="col" hairline></up-line>

			<view class="operate">
				<up-icon name="thumb-up-fill" color="#000000" size="16"></up-icon>
				
				<text class="text">50</text>
			</view>
		</view>
	</view>
</template>

<script>
	import index from './index';
	export default index;
</script>

<style lang="scss">
	@import "./index.scss"
</style>