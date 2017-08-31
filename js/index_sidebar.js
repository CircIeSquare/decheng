/**
 * Created by Administrator on 2017/8/19.
 */
$(function(){

    //左导航
    $("#sidebar-left .nav .li-has").each(function(index){
         $(this).on("click",function(){
             $(this).toggleClass("currentMenu").siblings(".li-has").removeClass("currentMenu");
             $("#sidebar-left .nav .navContent").eq(index).slideToggle(300).siblings(".navContent").slideUp(300);
         });
    });
    //上导航
    $("#nav .hasMenu").each(function(index){
        $(this).on("click",function(){
            $(this).find(".subMenu").slideToggle(300,"linear");
            //$(this).find(".subMenu").siblings(".subMenu").slideUp(300,"linear");
        });
    });


    //移动导航
    $("#NewNav-ctr").on("click",function(){
        $("#sidebar-left .title").trigger("click");
    });
    $("#sidebar-left .body .search .close").on("click",function(){
        $("#sidebar-left .title").trigger("click");
    });
});