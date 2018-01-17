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
    //移动导航
    $("#NewNav-ctr").on("click",function(){
        $("#sidebar-left .title").trigger("click");
    });
    $("#sidebar-left .body .search .close").on("click",function(){
        $("#sidebar-left .title").trigger("click");
    });
    
    //Window Resize DOM重载
    $(window).bind("resize",function(){
        window.location.reload();
    });   
});

//Window Resize DOM重载
$(window).bind("resize",function(){
    window.location.reload();
});  
