<script>
	export default {
		globalData: {
			sysInfo: {
				rootFontSize:100
			}
		},
		onLaunch: function() {
			console.log('App Launch')
			try{
				const menuButtonObject = uni.getMenuButtonBoundingClientRect(); //获取菜单按钮（右上角胶囊按钮）的布局位置信息。坐标信息以屏幕左上角为原点。
				
				uni.getSystemInfo().then(res => {
					const navHeight = menuButtonObject.height + (menuButtonObject.top - res.statusBarHeight) *
						2; //导航栏高度=菜单按钮高度+（菜单按钮与顶部距离-状态栏高度）*2
					// 导航栏（胶囊）高度
					const rootFontSize = 100*res.windowWidth/375;
					this.globalData.sysInfo = {
						statusbarHeight: res.statusBarHeight,
						navHeight,
						rootFontSize
					};
				})
			}catch(e){
				console.log(e);
			}
		
		},
		onShow: function() {
			console.log('App Show')

		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "uview-plus/index.scss";
	view{
		font-size: 0.12rem;
	}
	

</style>