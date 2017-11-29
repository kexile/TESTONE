import Promise from "../libs/es6-promise.min"
import DialogUtils from "DialogUtils"

Promise.prototype.finally = function (callback) {
    let c = this.constructor
    return this.then(
        value => c.resolve(callback()).then(() => value),
        reason => c.resolve(callback()).then(() => { throw reason })
    )
}

/**
 * 通用工具
 */
class CommonUtils {

    /**
     * 异步方法promise化
     */
    static promise(fn) {
        return function (obj = {}) {
            return new Promise((resolve, reject) => {
                obj.success = res => resolve(res)
                obj.fail = (res) => reject(res)
                fn(obj)
            })
        }
    }

    /**
     * 获取全局数据值
     */
    static getConfig(key) {
        return getApp().globalData[key]
    }

    /**
     * 显示消息
     */
    static showMsg(option) {
        DialogUtils.msg(option)
    }

}

export default CommonUtils