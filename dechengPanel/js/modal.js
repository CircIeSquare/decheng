/**
 * Created by Administrator on 2017/10/8.
 */
$(function(){

    var modal_open=$("#main table .modal-open");
    var modal_wrap=$("#modal");
    var modal=$("#modal-Box")[0];
    var modal_title=$("#modal .Box-title")[0];
    var BtnTrue=$("#modal .BtnTrue");
    var BtnFalse=$("#modal .BtnFalse");
    var closeBtn=$("#modalCloseBtn");

    var modalBox_=$("#modal-Box");

    modal_open.each(function(index){
        $(this).on("click",function(){
            modal_wrap.fadeIn(100);
            var modal_width=$("#modal-Box .modal-img").width();
            var modal_height=$("#modal-Box .modal-img").height();

            /*if(modal_width>=1000){
                modal_width=1000;
            }else{
                modal_width=modal_width;
            }
            if(modal_height>=900){
                modal_height=900;
            }else{
                modal_height=modal_height;
            }*/
            modal_width>=1000?modal_width=1000:modal_width=modal_width;
            modal_height>=800?modal_height=800:modal_height=modal_height;
            modalBox_.css({"width":modal_width+"px","height":modal_height+"px","padding":"15px"});
            $("#modal-Box .modal-img").css({"width":modal_width+"px","height":modal_height+"px"});

            /*var scale,scale1,scale2;
            scale1=modal_width/1000;
            scale2=modal_height/800;*/
            //modal_width>=1000?scale1=modal_width/1000:modal_width=modal_width;
            //modal_height>=800?scale2=modal_height/800:modal_height=modal_height;

           /* scale1>scale2?scale=scale1:scale=scale2;
            var w_,h_;
            w_=modal_width>=1000?modal_width/scale:modal_width=modal_width;
            h_=modal_height>=800?modal_height/scale:modal_height=modal_height;*/

           /* modalBox_.css({"width":modal_width/scale+"px","height":modal_height/scale+"px","padding":"15px"});
            $("#modal-Box .modal-img").css({"width":modal_width/scale+"px","height":modal_height/scale+"px"});*/

            center();
            drag(modal_title,modal);

            $(window).on("resize",function(){
                var percent_w=modal_width/$(window).width();
                var percent_h=modal_height/$(window).height();
                modalBox_.css({"width":modal_width*percent_w+"px","height":modal_height*percent_h+"px","padding":"15px"});
                $("#modal-Box .modal-img").css({"width":modal_width*percent_w+"px","height":modal_height*percent_h+"px"});
               /* modalBox_.css({"width":modal_width/scale*percent_w+"px","height":modal_height/scale*percent_h+"px","padding":"15px"});
                $("#modal-Box .modal-img").css({"width":modal_width/scale*percent_w+"px","height":modal_height/scale*percent_h+"px"});*/
            });

            BtnTrue.on("click",function(){
                modal_wrap.fadeOut(100,"linear",function(){
                    $("#main table .delete").eq(index).parents("tr").remove();
                });
            });
        });
    });
    closeBtn.on("click",function(){
        modal_wrap.fadeOut(100);
    });
    BtnFalse.on("click",function(){
        modal_wrap.fadeOut(100);
    });

    function center(){
        var $modalBox=$("#modal-Box");
        modal.style.left=(document.documentElement.clientWidth-$modalBox.width())/2+"px";
        modal.style.top=(document.documentElement.clientHeight-$modalBox.height())/2+"px";
        window.onresize=function(){
            center();
        };
    };
    function drag(title,obj){
        var title=title||obj;
        title.onmousedown=function(ev){
            var oEv=ev||event;
            var disX=oEv.clientX-obj.offsetLeft;
            var disY=oEv.clientY-obj.offsetTop;
            document.onmousemove=function(ev){
                var oEv=ev||event;
                var l=oEv.clientX-disX;
                var t=oEv.clientY-disY;
                if(l<0){l=0;};
                if(t<0){t=0;};
                if(l>document.documentElement.clientWidth-obj.offsetWidth){l=document.documentElement.clientWidth-obj.offsetWidth;};
                if(t>document.documentElement.clientHeight-obj.offsetHeight){t=document.documentElement.clientHeight-obj.offsetHeight;};
                obj.style.left=l+"px";
                obj.style.top=t+"px";
            };
        };
        document.onmouseup=function(){
            document.onmousedown=document.onmousemove=null;
        };
        return false;
    };

});