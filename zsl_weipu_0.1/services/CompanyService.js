import * as Http from 'Http'

/**
 * 公司服务
 */
export default {
    productList: (data) => Http.get('/product',data)
}