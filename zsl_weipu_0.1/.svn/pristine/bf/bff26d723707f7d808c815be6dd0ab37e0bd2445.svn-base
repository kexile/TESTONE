import CommonUtils from "utils/CommonUtils"
import ApiUtils from "utils/ApiUtils"
import AppUtils from "utils/AppUtils"
import WxService from 'services/WxService'

App({

    /**
     * 全局数据
     */
    globalData: {
        wxUserInfo: {},
        wxSession:{},
        weappInfo:{
            appid: "wx2bd72385b7395c1e",
            appsecret:"53ac5d60ee35f5e5df98c04f37bfa51f"
        },
        appInfo:{
            versionName:"1.0",
            versionCode:1
        }
    },

    onLaunch: function (options) {

        var that=this

        //检查网络
        ApiUtils.getNetworkType().then((res)=>{
            if (!res.isConnected){
                CommonUtils.showMsg("没有网络连接，请检查您的网络")
            }
        })

        //监控网络
        wx.onNetworkStatusChange((res) => {
            if (!res.isConnected) {
                CommonUtils.showMsg("您的网络已断开")
            }
        })

        //获取微信用户信息
        ApiUtils.getUserInfo().then((res) => {
            that.globalData.wxUserInfo=res.userInfo
        })

        //获取微信会话
        that.getWxSession()
       
    },

    onShow: function (options) {
    },

    /**初始化操作**************************************************/
    /**
     * 获取微信session
     */
    getWxSession:function() {
        var that=this
        ApiUtils.login().then((res) => {
            var data = {
                appid: that.globalData.weappInfo.appid,
                secret: that.globalData.weappInfo.appsecret,
                js_code: res.code,
                grant_type: "authorization_code"
            }
            return WxService.getSession(data)
        }).then((res) => {
            that.globalData.wxSession = res
        })
    }

})
