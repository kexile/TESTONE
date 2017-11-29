import UserService from '../../../services/UserService'

Page({

    /**
     * 页面数据
     */
    data: {
        isEyeOn: false
    },

    /**
     * 提交表单
     */
    formSubmit: function (e) {

        UserService.register(e.detail.value).then((rs) => {
            if (rs.status > 0) {
                wx.setStorageSync("token", rs.data.token)
                wx.setStorageSync("user", rs.data)
                wx.reLaunch({
                    url: '/pages/member/index/index',
                })
            }
        })

    },

    /**
     * 密码查看
     */
    eyeTouchStart:function(){
        var that = this
        that.setData({
            "isEyeOn": true
        })
    },
    eyeTouchEnd: function () {
        var that = this
        that.setData({
            "isEyeOn": false
        })
    }

})