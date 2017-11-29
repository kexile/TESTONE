import * as Http from "Http"


/**
 * 通用服务
 */
export default {
    config: (data) => Http.get("/config",data)//全局配置
}