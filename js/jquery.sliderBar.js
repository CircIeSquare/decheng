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
         
           //填充导航内容,消除页面加载时候，左边导航文字排版混乱Bug
            var tmp='<div class="top"></div>'+
                '<div class="search">'+
                '<input type="text" maxlength="12"/>'+
                '<img src="images/sidebar-search.png"/>'+
                '<div class="close">'+
                '<img src="images/icon/close.svg"/>'+
                '</div>'+
                '</div>'+
                '<div class="sidebar-nav">'+
                '<div class="nav">'+
                '<div class="li"><a href="index.html">首页</a></div>'+
                '<div class="li li-has hasMenu"><a href="anli.html">项目案例</a></div>'+
                '<ul class="navContent">'+
                '<li><a href="#">现代风格</a></li>'+
                '<li><a href="#">简约风格</a></li>'+
                '<li><a href="#">美式风格</a></li>'+
                '<li><a href="#">欧式风格</a></li>'+
                '</ul>'+
                '<div class="li li-has hasMenu"><a href="#">集团概况</a></div>'+
                '<ul class="navContent">'+
                '<li><a href="#">发展历程</a></li>'+
                '<li><a href="#">招聘信息</a></li>'+
                '<li><a href="#">关于我们</a></li>'+
                '</ul>'+
                '<div class="li li-has hasMenu"><a href="#">服务范围</a></div>'+
                '<ul class="navContent">'+
                '<li><a href="#">新房装修</a></li>'+
                '<li><a href="#">老房改造</a></li>'+
                '<li><a href="#">室内设计</a></li>'+
                '</ul>'+
                '<div class="li"><a href="product.html">产品手册</a></div>'+
                '<div class="li li-has hasMenu"><a href="#">资讯中心</a></div>'+
                '<ul class="navContent">'+
                '<li><a href="#">装修大降价</a></li>'+
                '<li><a href="#">装修课堂</a></li>'+
                '<li><a href="#">装修问答</a></li>'+
                '</ul>'+
                '<div class="li"><a href="about.html">联系我们</a></div>'+
                '</div>'+
                '</div>'+
                '<div class="address">'+
                '<ul>'+
                '<li>德诚智慧家</li>'+
                '<li>武汉市武昌区楚商大厦三楼</li>'+
                '<li><a href="mailto:123456789@qq.com">12345678@qq.com</a></li>'+
                '<li><a href="tel:027012345678">027-12345678</a></li>'+
                '</ul>'+
                '</div>';
            obj.find('.body').html(tmp);
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
