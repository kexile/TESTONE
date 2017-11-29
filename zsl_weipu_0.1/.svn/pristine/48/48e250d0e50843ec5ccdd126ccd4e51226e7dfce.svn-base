import CommonUtils from "../../../utils/CommonUtils"
import ApiUtils from "../../../utils/ApiUtils"

var app = getApp()

Page({

    /**
     * 页面数据
     */
    data: {
        wxUserInfo: {},
        gallery: {
            imageUrls: [
                '/resources/image/gallery/1.jpg',
                '/resources/image/gallery/2.jpg',
                '/resources/image/gallery/3.jpg'
            ],
            indicatorDots: true,
            autoplay: true,
            circular: true,
            interval: 3000,
            duration: 1000
        },
        tab:{
            currentIndex:0,
            count:3,
            xOld:0,
            xNew:0
        }
    },

    /**
     * 页面加载
     */
    onLoad: function () {
        var that=this
        that.setData({
            wxUserInfo: app.globalData.wxUserInfo
        })
    },

    /**
     * 搜索
     */
    search:function(){
        CommonUtils.showMsg("搜索")
    },

    /**
     * 切换选项卡
     */
    switchTab:function(e){
        var index = e.target.dataset.index
        if (index != undefined){
            this.setData({
                "tab.currentIndex":index
            })
        }
    },

    /**
     * 选项卡开始滑动
     */
    touchStartTab:function(e){
        var that = this
        that.data.tab.xOld = that.data.tab.xNew = e.touches[0].pageX
    },

    /**
     * 选项卡滑动中
     */
    touchMoveTab: function (e) {
        var that = this
        that.data.tab.xNew = e.touches[0].pageX
    },

    /**
     * 选项卡结束滑动
     */
    touchEndTab: function (e) {
        var that=this
        var next = that.data.tab.currentIndex >= that.data.tab.count - 1 ? 0 : that.data.tab.currentIndex+1
        var prev = that.data.tab.currentIndex <= 0 ? that.data.tab.count - 1 : that.data.tab.currentIndex-1
        if (that.data.tab.xNew > that.data.tab.xOld){
            that.setData({
                "tab.currentIndex": next
            })
        } else if(that.data.tab.xNew < that.data.tab.xOld){
            that.setData({
                "tab.currentIndex": prev
            })
        }
    }

})
