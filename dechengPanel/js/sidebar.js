/**
 * Created by Administrator on 2017/10/7.
 */
$(function(){

    //sidebar
    var $hasMenu=$("#sidebar .hasMenu");
    var $navContent=$("#sidebar .navContent");
    var $navContentItem=$("#sidebar .navContent li");
    var $main=$("#main .main-title");
    $hasMenu.each(function(index){
        $(this).on("click",function(){
            $(this).toggleClass("hasMenuOpen").siblings(".hasMenu").removeClass("hasMenuOpen");
            $navContent.eq(index).slideToggle(300).siblings(".navContent").slideUp(300);
        });
    });
    $navContentItem.each(function(){
        $(this).on("click",function(){
            //var inner=$(this).text();
            $(this).addClass("active").siblings().removeClass("active");
            //$main.text(inner);
        });
    });

    //width min-width:960
    //height 984 915
    function setWH(){
        var winWidth=$(window).width();
        var winHeight=$(window).height();
        //var setHeight=winHeight*0.9298780487804878048780487804878;
        //var setHeight=winHeight*0.92;
        var setHeight=winHeight-69;
        var setWidth=winWidth-220;

        if(winWidth==960){
            winWidth=960;
            setWidth=960;
        };
        console.log("winWidth:"+winWidth);
        console.log("winHeight:"+winHeight);
        $("#wrap").css("height",setHeight+"px");
        $("#main").css({"width":setWidth+"px","height":setHeight+"px"});
        //$("#main").css("width",setWidth+"px");
        //$("#main .main-content").css("height",(setHeight-40)+"px");
    };
    setWH();
    $(window,document).on("resize",function(){
        setWH();
    });

    //滚动条
   /* $("#sidebar").rollbar({scroll:"vertical",zIndex:"50"});
    $("#main").rollbar({scroll:"vertical",zIndex:"50"});*/
});