/**
 * Created by Administrator on 2017/9/12.
 */
$(function(){

    var anli=$("#time .content");
    var timeLine=$("#time .time-line");
    var line=$("#time .time-line li");

    anli.eq(0).show();
    var n=0;

    line.each(function(index){
        $(this).on("mouseover",function(){
            clearInterval(timer);
            timeLine.css("background-image","url('images/anli-timeLine"+index+".png')");
            $(this).addClass("active").siblings().removeClass("active");
            anli.eq(index).fadeIn().siblings(".content").fadeOut();
        });
        $(this).on("mouseout",function(){
            n=index;
            timer=setInterval(run,2000);
        });
    });

    var timer=setInterval(run,2000);
    function run(){
        if(n>=3) n=0;
        timeLine.css("background-image","url('images/anli-timeLine"+n+".png')");
        line.eq(n).addClass("active").siblings().removeClass("active");
        anli.eq(n).fadeIn().siblings(".content").fadeOut();
        n++;
    };

});