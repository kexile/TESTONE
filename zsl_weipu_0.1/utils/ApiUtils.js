import CommonUtils from "CommonUtils"

/**
 * 小程序api工具
 */
class ApiUtils {

    static request = CommonUtils.promise(wx.request)//请求
    static login=CommonUtils.promise(wx.login)//登录
    static checkSession = CommonUtils.promise(wx.checkSession)//检测登录
    static getUserInfo = CommonUtils.promise(wx.getUserInfo)//获取用户信息
    static getNetworkType = CommonUtils.promise(wx.getNetworkType)//获取网络类型

}

export default ApiUtils