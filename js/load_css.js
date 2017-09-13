/**
 * Created by Administrator on 2017/9/20.
 */

/**
 *
 *FF、WebKit、Safari可通过判断node.sheet.cssRules属性判断css文件是否加载完毕
 *IE6-9、opeara通过onload事件判断
 *其他浏览器通过设置定时器任务判断
 *
 * */

function styleOnload(node, callback) {
    // for IE6-9 and Opera
    if (node.attachEvent){
        node.attachEvent('onload', callback);
        // NOTICE:
        // 1. "onload" will be fired in IE6-9 when the file is 404, but in
        // this situation, Opera does nothing, so fallback to timeout.
        // 2. "onerror" doesn't fire in any browsers!
    }else{
        // polling for Firefox, Chrome, Safari
        setTimeout(function() {
            poll(node, callback);
        }, 0); // for cache
    };
};

function poll(node, callback) {
    if (callback.isCalled) {
        return;
    };

    var isLoaded = false;

    if (/webkit/i.test(navigator.userAgent)){//webkit
        if (node['sheet']){
            isLoaded = true;
        };
    }else if(node['sheet']){  // for Firefox
        try{
            if (node['sheet'].cssRules) {
                isLoaded = true;
            }
        }catch(ex){
            // NS_ERROR_DOM_SECURITY_ERR
            if (ex.code === 1000){
                isLoaded = true;
            };
        };
    };

    if (isLoaded){
        // give time to render.
        setTimeout(function(){
            callback();
        }, 1);
    }else{
        setTimeout(function(){
            poll(node, callback);
        }, 1);
    };
}


function loadcss(){
    var node = document.createElement("link");
    node.setAttribute("rel","stylesheet");
    node.setAttribute("type","text/css");
    node.setAttribute("href","xx.css");
    document.head.appendChild(node);
    styleOnload(node,function(){
        alert("loaded");
    });
};