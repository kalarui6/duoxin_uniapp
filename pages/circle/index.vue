<template>
	<page-meta :page-font-size="sysInfo.rootFontSize+'px'" :root-font-size="sysInfo.rootFontSize+'px'"></page-meta>

	<view class="content">
		<view :style="{height:sysInfo.statusbarHeight+'px'}"><text></text></view>
		<view :style="{height:sysInfo.navHeight+'px'}" class="tab-wrapper">
			<text class="tab-item">同事圈</text>
			<text class="tab-item">校友圈</text>
			<text class="tab-item">推荐</text>
			<text class="tab-item">关注</text>

		</view>

		<!-- <up-sticky bgColor="#fff"> -->
		<up-tabs :list="list1"></up-tabs>
		<!-- </up-sticky> -->

		<user-header />
		<user-speak />
	</view>
</template>

<script>
	import index from './index';
	export default index;
</script>

<style lang="scss">
	@import "./index.scss"
</style>