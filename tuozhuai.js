function tuozhuai(id){
    var useId=document.getElementById(id);
    useId.onmousedown=function(e){
        var e=e||window.event;
        var start_x=e.clientX-useId.offsetLeft;
        var start_y=e.clientY-useId.offsetTop;
        document.onmousemove=function(e){
            var e=e||window.event;
            useId.style.left=e.clientX-start_x+"px";
            useId.style.right=e.clientY-start_y+"px";
        }
        document.onmouseup = function(){
            document.onmousemove = null;
            document.onmousedown = null;
        };
    }
}