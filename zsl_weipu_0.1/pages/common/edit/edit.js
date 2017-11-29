Page({

    /**
     * 页面数据
     */
    data: {
        name: "",
        value:"",
        prevPage:null
    },

    /**
     * 页面加载
     */
    onLoad: function (options) {
        var pages = getCurrentPages()
        this.setData({
            name: options.name,
            value: options.value,
            prevPage: pages[pages.length - 2]
        })
    },

    /**
     * 输入
     */
    input: function (e) {
        var that = this
        var param={}
        this.setData({
            value: e.detail.value
        })
        param[that.data.name] = that.data.value
        that.data.prevPage.setData(param)
    },

    /**
     * 确定
     */
    confirm:function(){
        wx.navigateBack(1)
    }

})