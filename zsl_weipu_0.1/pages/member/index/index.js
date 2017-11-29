Page({

    /**
     * 页面数据
     */
    data: {
        user: null,
        serviceNumber: "020-83939808",
        companyName:"广州塑料有限公司"
    },

    /**
     * 页面加载
     */
    onLoad: function (options) {
        var that = this
        var user = wx.getStorageSync("user")
        if (user) {
            that.setData({
                "user": user
            })
        }
    },

    /**
     * 退出
     */
    logoutTap: function () {
        wx.removeStorageSync('token')
        wx.removeStorageSync('user')
        wx.reLaunch({
            url: '/pages/member/index/index'
        })
    },

    /**
     * 拨打电话
     */
    goDial: function () {
        var that = this
        wx.makePhoneCall({
            phoneNumber: that.data.serviceNumber
        })
    },

    /**
     * 分享
     */
    onShareAppMessage: function (e) {
        var that=this
        return {
            title: that.companyName,
            path: "/pages/member/index/index",
            success: function (e) {
                wx.showToast({
                    title:"转发成功"
                })
            },
            fail: function (e) {
                console.log(e.message)
            }
        }
    }

})