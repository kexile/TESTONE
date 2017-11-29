import Promise from "../libs/es6-promise.min"
import CommonUtils from "../utils/CommonUtils"

var rootUrl = "https://app2.zhaosuliao.com"

/**
 * http请求promise化
 */
export const request = (method = "GET", mode) => (url, data) => {
    return new Promise((resolve, reject) => {
        var header
        if(mode == "WX"){
            header = {
                "Content-Type": "application/json"
            }
        } else {
            url = rootUrl + url
            header={
                "Content-Type": "application/x-www-form-urlencoded",
                "token": wx.getStorageSync("token")
            }
        }
        wx.request({
            url: url,
            data,
            method,
            header: header,
            success: function (res) {
                resolve(res.data)
                if (res.data.status < 0) {
                    CommonUtils.showMsg(res.data.msg)
                }
            },
            fail: function (e) {
                reject(e)
                CommonUtils.showMsg("操作失败")
            }
        })
    })
}

export const get = request("GET")
export const post = request("POST")
export const put = request("PUT")
export const del = request("DELETE")

export const wxGet = request("GET","WX")
export const wxPost = request("POST", "WX")
export const wxPut = request("PUT", "WX")
export const wxDel = request("DELETE", "WX")