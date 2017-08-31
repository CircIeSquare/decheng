/**
 * Created by Administrator on 2017/8/17.
 */

$(function(){
    //右导航
    $(window,document).on('scroll',function(){
        var $scroll=$(this).scrollTop();
        //滚动
        $('.section').each(function(index){
            var $section_top=$('.section').eq(index).offset().top;
            if($section_top>$scroll){
                $('#sidebar-right .li').eq(index).addClass('active').siblings().removeClass('active');
                return false;//中断循环
            }
        });
    });
    //点
    var $section_ctl=$("#sidebar-right .li");
    $section_ctl.each(function(index){
        $(this).on("click",function(){
            $(this).addClass('active').siblings('li').removeClass('active');
            var $section_top=$(".section").eq(index).offset().top-200;
            $('html,body').animate({
                scrollTop:$section_top
            },"1000","swing");
        });
    });
    //顶部
    $('#sidebar-right .prev').on('click',function(){
        $('html,body').animate({
            scrollTop:0
        },"1000","swing");
    });
    //底部
    $('#sidebar-right .next').on('click',function(){
        var $dom_h=$(document).height();
        $('html,body').animate({
            scrollTop:$dom_h
        },"1000","swing");
    });

    //视频
    var shTxt=$("#shipin .txt .txt-ctr");
    var shTxt_li=$("#shipin .txt .txt-ctr li");
    var shTxtCtrBtn=$("#shipin .txt .ctr-btn li");
    var shPic=$("#shipin .pic img");
    var num_shTxt=0;
    var timer_shTxt=setInterval(sum,2000);
    function sum(){
        num_shTxt>2?num_shTxt=0:num_shTxt=num_shTxt+1;
        shTxtCtrBtn.eq(num_shTxt).addClass("active").siblings().removeClass("active");
        shTxt.eq(num_shTxt).fadeIn().siblings(".txt-ctr").fadeOut();
    };
    shTxt.eq(0).show();
    shTxtCtrBtn.each(function(index){
        $(this).on("click",function(){
            clearInterval(timer_shTxt);
            num_shTxt=index;
            $(this).addClass("active").siblings().removeClass("active");
            shTxt.eq(num_shTxt).fadeIn().siblings(".txt-ctr").fadeOut();
        });
    });
    shTxt.on("mouseover",function(){
        clearInterval(timer_shTxt);
    });
    shTxt.on("mouseout",function(){
        timer_shTxt=setInterval(sum,2000);
    });
    shPic.eq(0).show();
    shTxt_li.each(function(index){
        $(this).on("mouseover",function(){
            shPic.eq(index).fadeIn().siblings().fadeOut();
        });
    });

});