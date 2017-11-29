var msgTimer = null

/**
 * 对话框工具
 */
class DialogUtils {

    /**
     * 消息提示
     */
    static msg(option) {

        //清除计时器
        if(msgTimer){
            clearTimeout(msgTimer);
        }

        //初始化
        var that = getCurrentPages()[getCurrentPages().length - 1];
        var content=""
        var time=2000

        //处理选项
        if (typeof option == "string"){
            content=option
        } else if (typeof option == "object"){
            content = option.content
            if (option.time){
                time = option.time
            }
        }
        
        //设置数据
        that.setData({
            "dialog.msg":{
                isShow:true,
                content:content
            }
        })

        //定时隐藏
        msgTimer=setTimeout(function(){
            that.setData({
                "dialog.msg.isShow":false
            })
        }, time)
        
    }

}

export default DialogUtils