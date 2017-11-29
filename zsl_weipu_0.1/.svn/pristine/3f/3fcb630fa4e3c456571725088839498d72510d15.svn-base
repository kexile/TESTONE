import CompanyService from '../../../services/CompanyService'

Page({

    /**
     * 页面数据
     */
    data: {
        showLoadMore: false,
        showRefesh: false,
        showNoMore: false,
        isLoading: false,
        scrollHeight:0,
        list: [],
        pageCount: 1,
        param: {
            page: 1,
            pageSize: 10
        }
    },

    /**
     * 页面加载
     */
    onLoad: function (options) {
        var that = this
        wx.getSystemInfo({
            success: function (rs) {
                that.setData({
                    scrollHeight: rs.windowHeight
                });
            }
        });
        that.loadMore();
    },

    /**
     * 加载更多
     */
    loadMore: function (e) {

        var that = this

        if (that.data.isLoading) {
            return false
        }

        that.setData({
            showLoadMore: true,
            isLoading: true
        })

        ++that.data.param.page
        CompanyService.productList(that.data.param).then((rs) => that.setData({
            list: that.data.list.concat(rs.data)
        })).catch((err) => {
            --that.data.param.page
            console.log(err)
        }).finally(() => that.setData({
            showLoadMore: false,
            isLoading: false
        }))

    },

    /**
     * 刷新
     */
    refesh: function (e) {

        var that = this

        if (that.data.isLoading) {
            return false
        }

        that.setData({
            showRefesh: true,
            isLoading: true
        })

        var oldPage = that.data.param.page
        that.data.param.page = 1
        console.log(oldPage)
        CompanyService.productList(that.data.param).then((rs) => that.setData({
            list: rs.data
        })).catch((err) => {
            that.data.param.page = oldPage
            console.log(err)
        }).finally(() => that.setData({
            showRefesh: false,
            isLoading: false
        }))

    }

})