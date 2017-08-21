/**
 * Created by Administrator on 2017/8/19.
 */
$(function(){

    //左
    $("#sidebar-left .nav .li-has").each(function(index){
         $(this).on("click",function(){
             $(this).toggleClass("currentMenu").siblings(".li-has").removeClass("currentMenu");
             $("#sidebar-left .nav .navContent").eq(index).slideToggle(300).siblings(".navContent").slideUp(300);
         });
    });
    //上
    $("#nav .hasMenu").each(function(){
        $(this).on("click",function(){
            $(this).find(".subMenu").slideToggle(300,"linear");
            //$(this).siblings(".hasMenu").children(".subMenu").slideUp(300,"linear");
        });
        /*$(this).on("mouseout",function(){
            $(this).find(".subMenu").slideUp(300,"linear");
            //$(this).siblings(".hasMenu").children(".subMenu").slideDown(300,"linear");
        });*/
    });

    //移动
    $("#NewNav-ctr").on("click",function(){
        $("#mobile-nav").slideToggle("1000","swing");
    });
    $("#mobile-nav .nav .li-has").each(function(index){
        $(this).on("click",function(){
            $(this).toggleClass("currentMenu").siblings(".li-has").removeClass("currentMenu");
            $("#mobile-nav .nav .navContent").eq(index).slideToggle(300).siblings(".navContent").slideUp(300);
        });
    });




});