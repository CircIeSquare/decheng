/***************************************************************************************
 侧边栏
****************************************************************************************/
;(function ($) {
    $.fn.extend({
        "sliderBar": function (options) {
            // 使用传入参数和默认参数合并后的参数
            var opts = $.extend({},$.fn.sliderBar.defalutPublic,options);

            // 这里的this 就是 jQuery对象，遍历页面元素对象
            // 加个return可以链式调用
            return this.each(function (){
                //获取当前元素 的this对象 
                var $this = $(this);
                //obj上data方法设置key,value
                $this.data('open',opts.open);

                //初始化obj,obj下body,obj下title样式
                privateMethods.initSliderBarCss($this,opts);
                //根据方向调用方法
                switch(opts.position){
                    case 'right' : privateMethods.showAtRight($this,opts);break;
                    case 'left'  : privateMethods.showAtLeft($this,opts);break;
                };
                
            });
        }
    });

    // 默认公有参数
    $.fn.sliderBar.defalutPublic = {
        open : true,           // 默认是否打开，true打开，false关闭
        top : 200,             // 距离顶部多高
        width : 260,           // body内容宽度
        height : 200,          // body内容高度
        theme : 'green',       // 主题颜色
        position : 'left',     //显示位置，有left和right两种
        bgColor:'#fff',         //body背景白色
        titleWidth:60,          //title宽度
        titleHeight:120,         //title高度
        titleTop:0               //title的top
    };

    //执行方法
    var privateMethods = {
        //初始化obj的样式，obj下的body的样式
        initSliderBarCss : function(obj, opts){
            obj.css({
                'width': opts.width+'px',
                'height' : opts.height+'px',
                'top' : opts.top+'px',
                'border': '1px solid '+opts.theme,
                'position':'fixed',
                'font-family':'Microsoft YaHei',
                'z-index': "9999",
                'display':"block !important"
            }).find('.body').css({
                'width': opts.width+'px',
                'height' : opts.height+'px',
                'position':'relative',
                'padding':'10px 30px',
                'overflow-x':'hidden',
                'overflow-y':'auto',
                'font-family':'Microsoft YaHei',
                'font-size': '12px',
                'margin':'0px',
                'background':opts.bgColor
            });

            //初始化obj下的title的样式
            var titleCss = {
                'width':opts.titleWidth+'px',
                'height':opts.titleHeight+'px',
                'position':'absolute',
                'top':opts.titleTop+'px',
                'display':'block',
                /*'background-color':opts.theme,*/
                'font-size': '16px',
                /*'padding':'8px 4px 0px 5px',*/
                'color':'#6ba7f5',
                'cursor': 'pointer',
                'font-family':'Microsoft Yahei',
                'z-index': "9999"
            };

            //设置标题样式
            obj.find('.title').css(titleCss);
        },

        //左侧栏样式
        showAtLeft : function(obj,opts){
            if(opts.open){
                obj.css({left:'0px'});
                obj.find('.title').css('right',(-opts.titleWidth)+'px');
            }else{
                obj.css({left:-opts.width+'px'});
                obj.find('.title').css('right',(-opts.titleWidth)+'px');
            }
            obj.find('.title').click(function(){
                if(obj.data('open')){
                    //obj.css({"display":"none"}).animate({left:-opts.width+'px'},500);
                    obj.animate({left:-opts.width+'px'},500);
                }else{
                    obj.css({"display":"block !important"}).animate({left:'0px'}, 500);
                }
                obj.data('open',obj.data('open') == true ? false : true);
            });
        },
        //右侧栏样式
        showAtRight : function(obj,opts){
            if(opts.open){
                obj.css({right:'0px'});
                obj.find('.title').css('left',(-opts.titleWidth)+'px');
            }else{
                obj.css({right:-opts.width+'px'});
                obj.find('.title').css('left',(-opts.titleWidth)+'px');
            }
            obj.find('.title').click(function(){
                if(obj.data('open')){
                    //obj.css({"display":"none"}).animate({right:-opts.width+'px'}, 500);
                    obj.animate({right:-opts.width+'px'}, 500);
                }else{
                    obj.css({"display":"block !important"}).animate({right:'0px'}, 500);
                }
                obj.data('open',obj.data('open') == true ? false : true);
            });
        }
    };
})(jQuery);
