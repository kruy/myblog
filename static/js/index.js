new Vue({
    el: '#x_body',
    data: {
        show: true,
        wd: '',//搜索的关键词
        arr: [],//用于储存关键词的搜索词条
        listIndex: -1//设置初始索引，数组从0开始，因此初始成-1
    },
    // 在 `methods` 对象中定义方法
    methods: {
        index_change: function (event) {
            this.show = !this.show;
        },

        //这个函数我们在input标签输入关键词的时候不断的给百度服务器发送请求获取搜索词条，并且不断的复制给data中的数组arr
        input_func: function () {
            var url = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su"
            this.$http.jsonp(url, {
                params: {
                    wd: this.wd
                },
                jsonp: 'cb'
            }).then(res => {
                this.arr = res.data.s;//把百度服务器返回的数据传给arr数组
            })
        },

        //监听键盘的事件
        keydown_up: function () {
            this.listIndex--;
            if (this.listIndex < 0) {
                this.listIndex = this.arr.length - 1;
            }
            this.wd = this.arr[this.listIndex];
        },
        keydown_down: function () {
            this.listIndex++;
            if (this.listIndex > this.arr.length - 1) {
                this.listIndex = 0;
            }
            this.wd = this.arr[this.listIndex];
        },
        keydown_enter: function () {
            window.open("https://www.baidu.com/s?wd=" + this.wd);
        },
    }

});