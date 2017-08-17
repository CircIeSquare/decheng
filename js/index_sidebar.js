/**
 * Created by Administrator on 2017/8/19.
 */
$(function(){

    $("#sidebar-left .nav .li-has").each(function(index){
         $(this).on("click",function(){
             $(this).toggleClass("currentMenu").siblings(".li-has").removeClass("currentMenu");
             $("#sidebar-left .nav .navContent").eq(index).slideToggle(300).siblings(".navContent").slideUp(300);
         });
    });
});