
export default {
	data() {

		return {

			sysInfo: {
				statusbarHeight: 0,
				navHeight: 0,
			},
			list1: [{
					name: '推荐'
				},
				{
					name: '资讯'
				},
				{
					name: '相亲'
				},
				{
					name: '活动'
				}
			]
		}
	},
	methods: {
		click(item) {
			console.log('item', item);
		}
	},
	onLoad() {
		this.sysInfo = getApp().globalData.sysInfo
		console.log(getApp());

	}
}