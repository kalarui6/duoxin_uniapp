<template>
	<view class="wrapper">
		<view class="header">
			<up-avatar :src="avatar" class="avatar" text="北"></up-avatar>
			<view class="user-info">
				<text class="name">{{nickName}}</text>
				<view class="desc-wrap">
					<view  class="tag" v-for="item in tagList">
						<text>{{item.name}}</text>
					</view>
				</view>

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