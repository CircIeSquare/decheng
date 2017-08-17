/**
 * Created by Administrator on 2017/8/17.
 */

$(function(){
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
            },"1000","swing")
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

});