(function () {
	let tem = '<div class="pagination">' +
				'<ul>' +
					'<li @click="controlPage(1)"><a class="lastPage" :class="{darkLight: curPage === 1}">首页</a></li>' +
					'<li @click="controlPage(curPage-1)"><a class="lastPage" :class="{darkLight: curPage === 1}">上一页</a></li>' +
					'<li v-for="page in pages" @click="controlPage(page)">' +
						'<a class="page" :class="{highLight: curPage === page}" >{{ page }}</a>' +
					'</li>' +
					'<li @click="controlPage(curPage+1)"><a :class="{darkLight: curPage === totalpages}" class="nextPage">下一页</a></li>' +
					'<li @click="controlPage(totalpages)"><a :class="{darkLight: curPage === totalpages}" class="nextPage">尾页</a></li>' +
				'</ul>' +
			  '</div>'
	let pagination = Vue.extend({
		template: tem,
		props: {
			showpages: {//要显示的页码数
				type: Number,
				default: 5,
				required: true
			},
			totalpages: {
				type: Number,
				default: 20,
				required: true
			},
			type:{
				default:"",
			}
		},
		data () {
			return {
				curPage: 1
			}
		},
		computed: {
			pages () {
				let left = 1,
					right = this.totalpages,
					movePoint = Math.ceil(this.showpages / 2),
					pages = [];
				if (this.curPage > movePoint && this.curPage < this.totalpages - movePoint + 1) {
					left = this.showpages % 2 === 0 ? this.curPage - movePoint : this.curPage - movePoint + 1;
					right = this.curPage + movePoint - 1;
				} else if (this.curPage <= movePoint) {
					left = 1;
					right = this.showpages;
				} else {
					left = this.totalpages - this.showpages + 1;
					right = this.totalpages;
				}

				while (left <= right) {
					pages.push(left);
					left++;
				}
				return pages;
			}
		},
		methods: {
			controlPage (page) {
				if (page > this.totalpages) {
					return false;
				} else if (page < 1) {
					return false;
				}
				if (this.curPage != page) {
					this.curPage = page;
 				};
				this.$emit('topage',page,this.type);
			}
		}
	})

	window.pagination = pagination;
})()
