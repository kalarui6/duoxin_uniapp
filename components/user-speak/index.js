export default {
	data() {
		return {
			desc: '关于uview-plus的取名来由，首字母u来自于uni-app首字母，uni-app是基Vuejs，Vue和View(延伸为UI、视图之意)同音，同时view组件uni-app中础最重要的组件，故取名uview-plus，表达源于uni-app和Vue之意，同时在此也对它示感谢。',
			imgsList: [
				'', ''
			],
			isShowViewMore: false,
			urls: [
				'https://uview-plus.jiangruyi.com/uview-plus/album/1.jpg',
				'https://uview-plus.jiangruyi.com/uview-plus/album/2.jpg',
				'https://uview-plus.jiangruyi.com/uview-plus/album/3.jpg',
				'https://uview-plus.jiangruyi.com/uview-plus/album/4.jpg',
				'https://uview-plus.jiangruyi.com/uview-plus/album/5.jpg',
				'https://uview-plus.jiangruyi.com/uview-plus/album/6.jpg',
				'https://uview-plus.jiangruyi.com/uview-plus/album/7.jpg',
				'https://uview-plus.jiangruyi.com/uview-plus/album/8.jpg',
				'https://uview-plus.jiangruyi.com/uview-plus/album/9.jpg',
				'https://uview-plus.jiangruyi.com/uview-plus/album/10.jpg',
			],
			mutiImgWidth: 80,
			imgGap: 8,
		}
	},
	mounted() {
		const wrapHeight = this.$refs.descWrapRef.$el.clientHeight;
		const textHeight = this.$refs.descTextRef.$el.clientHeight;
		// console.log(111222, height);
		if (wrapHeight < textHeight) {
			this.isShowViewMore = true;
		}
		const width = this.$refs.descWrapRef.$el.clientWidth
		this.mutiImgWidth = Math.floor((width - 16) / 3);
		this.imgGap = Math.floor((width - this.mutiImgWidth * 3) / 2);
	},
	methods: {}
}