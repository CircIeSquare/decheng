/**
 * Created by Administrator on 2017/9/13.
 */
$(function(){

    var nav_li=$("#content .content-nav li");
    var tab_content=$("#content .content-body-wrap .content-body");

    tab_content.eq(0).show();
    nav_li.each(function(index){
        nav_li.on("click",function(){
            $(this).addClass("active").siblings().removeClass("active");
            tab_content.eq(index).fadeIn().siblings().hide();
        });
    });

});