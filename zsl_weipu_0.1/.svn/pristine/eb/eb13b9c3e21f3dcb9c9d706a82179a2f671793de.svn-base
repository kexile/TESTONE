import UserService from '../../../services/UserService'

Page({

    /**
     * 提交表单
     */
    formSubmit: function (e) {

        UserService.login(e.detail.value).then((rs) => {
            if (rs.status > 0) {
                wx.setStorageSync("token", rs.data.token)
                wx.setStorageSync("user", rs.data)
                wx.reLaunch({
                    url: '/pages/member/index/index',
                })
            }
        })

    }

})