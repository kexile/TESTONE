import EditUtils from '../../../utils/EditUtils'
import AMapFile from '../../../libs/amap-wx'

Page({

    /**
     * 页面数据
     */
    data: {
        name:"广州塑料有限公司",
        linkman: "张三",
        typeArray:["终端","贸易商","上游厂家"],
        type:"终端",
        registerDate: "2017-07-01",
        region: ["广东省","广州市","天河区"],
        addressDetail:"广东省广州市天河区东圃镇黄村名圃新村",        
        editText: EditUtils.editText,
        map: {
            markers: [],
            latitude: '',
            longitude: '',
            text: {}
        },
    },

    /**
     * 页面加载
     */
    onLoad: function (options) {
        var that = this;

        //在地图上显示地址
        var map = new  AMapFile.AMapWX({ key: "8abf6ee24507c67a1c037b9b4ea9a1e5"})
        map.getPoiAround({
            querykeywords:that.data.addressDetail,
            success: function (data) {
                var markers = data.markers;
                that.setData({
                    map:{
                        markers: [markers[0]],
                        latitude: markers[0].latitude,
                        longitude: markers[0].longitude,
                    }
                });
                that.showMarkerInfo(markers[0]);
            },
            fail: function (e) {
                wx.showModal({ title: e })
            }
        })

    },

    /**
     * 类型选择
     */
    typeChange: function (e) {
        var that=this
        this.setData({
            type: that.data.typeArray[e.detail.value]
        })
    },

    /**
     * 地区选择
     */
    regionChange:function(e){
        this.setData({
            region: e.detail.value
        })
    },

    /**
     * 注册时间选择
     */
    registerDateChange:function(e){
        this.setData({
            registerDate: e.detail.value
        })
    },

    /**
     * 修改
     */
    editText:function(e){
        EditUtils.editText(e)
    },

    /**
     * 显示地图标记信息
     */
    showMarkerInfo: function (data) {
        var that = this
        that.setData({
            ["map.text"]: {
                name: data.name,
                address: data.address
            }
        })
    },

})