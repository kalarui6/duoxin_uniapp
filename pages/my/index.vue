<template>
	<view class="content">
		<!-- <image class="logo" src="/static/logo.png"></image> -->
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<view>
			<text class="title" @click="login">登录</text>
			<text class="title" @click="login">hahah </text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			login: () => {
				
				uni.getUserProfile({
								lang: 'zh_CN',
								desc: '用户登录', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，
								success: (res) => {
									console.log(res, 'resss')
									// resolve(res.userInfo)
								},
								fail: (err) => {
									// reject(err)
								}
							})
				
				
				
			// 	uni.login({
			// 		provider: 'weixin',
			// 		success: function(res) {
			// 				console.log("111",res)
			
			// 		},
			// 		fail: function(err) {
			// 			// 登录授权失败
			// 			// err.code是错误码
			// 			console.log("222",err)
						
			// 		}
			// 	});
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
