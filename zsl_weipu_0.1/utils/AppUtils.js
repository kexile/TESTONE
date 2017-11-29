import CommonUtils from "CommonUtils"
import ApiUtils from "ApiUtils"
import CommonService from '../services/CommonService'

/**
 * 小程序应用工具
 */
class AppUtils {

    /**
     * 获取微信用户基本信息
     */
    static getWxUserInfo(cb) {
        var app = getApp()
        if (app.globalData.wxUser) {
            typeof cb == "function" && cb(app.globalData.wxUser)
        } else {
            ApiUtils.getUserInfo({
                withCredentials: false,
            }).then((res) => {
                app.globalData.wxUser = res.userInfo
                typeof cb == "function" && cb(app.globalData.wxUser)
            })
        }
    }

}

export default AppUtils