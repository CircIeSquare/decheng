/**
 * Created by Administrator on 2017/7/18.
 */
$(function(){
    //向下滚动时
    function toBottom(ele,clsName){
        var winHeight=$(window).height()*0.5;//可视窗口的高度的一半，更改0.5可以调整滚动到底部、中部、顶部时候开始加载
        var winScrollTop=$(window).scrollTop();//文档的滚动高度
        var ele_top=$(ele).offset().top;//内容区元素的top
        var ele_height=$(ele).height();//内容区元素的高
        //判断条件
        /*if(winScrollTop<ele_top-winHeight){
         $(ele).removeClass(clsName);
         }else */if((winScrollTop>ele_top-winHeight)&&(winScrollTop<ele_top+ele_height)){
            $(ele).addClass(clsName);
        }/*else{
         $(ele).removeClass(clsName);
         }*/
    };

    //获取前一次的滚动高度（这里是第一次）
    var firstTop=$(window).scrollTop();
    $(window,document).on("scroll",function(){
        //每次滚动重新获取滚动高度
        var lastTop=$(this).scrollTop();
        //后一次滚动高度大于前一次滚动高，说明向下滚动，否则向上滚动！
        if(lastTop>firstTop){
            //加载对应的内容区域

            //案例
            toBottom(".anli .title","animated fadeInUp");
            toBottom(".anli .content .li:eq(0)","animated fadeInUp pt-page-delay100");
            toBottom(".anli .content .li:eq(1)","animated fadeInUp pt-page-delay200");
            toBottom(".anli .content .li:eq(2)","animated fadeInUp pt-page-delay300");
            toBottom(".anli .content .li:eq(3)","animated fadeInUp pt-page-delay400");
            toBottom(".anli .content .li:eq(4)","animated fadeInUp pt-page-delay100");
            toBottom(".anli .content .li:eq(5)","animated fadeInUp pt-page-delay200");
            toBottom(".anli .content .li:eq(6)","animated fadeInUp pt-page-delay300");
            toBottom(".anli .content .li:eq(7)","animated fadeInUp pt-page-delay400");
            //视频
            toBottom(".shipin .shipin_wrap .media","animated fadeInLeft pt-page-delay100");
            toBottom(".shipin .shipin_wrap .text","animated fadeInRight pt-page-delay100");
            toBottom(".shipin .chanpin .text-wrap","animated fadeInLeft pt-page-delay100");
            toBottom(".shipin .chanpin .pic","animated fadeInRight pt-page-delay100");
            //智能
            toBottom(".zhineng .title","animated fadeInUp");
            toBottom(".zhineng .content li:eq(0)","animated fadeInUp pt-page-delay100");
            toBottom(".zhineng .content li:eq(1)","animated fadeInUp pt-page-delay200");
            toBottom(".zhineng .content li:eq(2)","animated fadeInUp pt-page-delay300");
            toBottom(".zhineng .content li:eq(3)","animated fadeInUp pt-page-delay400");
            //介绍
            toBottom(".jieshao .content .pic","animated fadeInLeft pt-page-delay100");
            toBottom(".jieshao .content .text","animated fadeInLeft pt-page-delay100");
            //设计师
            toBottom(".shejishi .swiper .swiper-slide1","animated fadeInUp pt-page-delay100");
            toBottom(".shejishi .swiper .swiper-slide2","animated fadeInUp pt-page-delay200");
            toBottom(".shejishi .swiper .swiper-slide3","animated fadeInUp pt-page-delay300");
            //品牌
            toBottom(".pinpai .title","animated fadeInUp");
            toBottom(".pinpai .picture li:eq(0)"," animated fadeInLeft pt-page-delay100");
            toBottom(".pinpai .picture li:eq(1)","animated fadeInLeft pt-page-delay200");
            toBottom(".pinpai .picture li:eq(2)","animated fadeInLeft pt-page-delay300");
            toBottom(".pinpai .picture li:eq(3)","animated fadeInLeft pt-page-delay400");
            toBottom(".pinpai .picture li:eq(4)","animated fadeInLeft pt-page-delay500");
            toBottom(".pinpai .picture li:eq(5)","animated fadeInRight pt-page-delay100");
            toBottom(".pinpai .picture li:eq(6)","animated fadeInRight pt-page-delay200");
            toBottom(".pinpai .picture li:eq(7)","animated fadeInRight pt-page-delay300");
            toBottom(".pinpai .picture li:eq(8)","animated fadeInRight pt-page-delay400");
            toBottom(".pinpai .picture li:eq(9)","animated fadeInRight pt-page-delay500");
            //资讯
            toBottom(".zixun .title"," animated fadeInUp");
            toBottom(".zixun .content .swiper-slide1"," animated fadeInLeft pt-page-delay100");
            toBottom(".zixun .content .swiper-slide2","animated fadeInRight pt-page-delay100");
        }/*else{
         //toUp('.banner');
         //toUp('.con');
         }*/
        //每次都将后一次的滚动高度赋值给前一次的滚动高度
        firstTop=lastTop;

        /*console.log("$(document).height()："+$(document).height());
        console.log("------------------------------------------");
        console.log("$(document).scrollTop()："+$(document).scrollTop());*/
    });

});