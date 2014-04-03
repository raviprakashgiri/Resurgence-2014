window.onload = init;
var a;
var temp1,temp2;
function init(){

	$('.flipper').click($(this).flip);

}
function loaded(x){
    var w = $(x).width();
    var h = $(x).height();
    var par = $(x).parents('.flipper');
    var widthset = par.parents('.flip-container');
    widthset.css({'width':w,'height':h+25});
    var r = Math.random()*10;
    setTimeout(function(){par.flip();},r*100);

}

$.fn.flip = function(){
	var angle=$(this).getY();
	a = $(this).css('-webkit-transform');
   	if(angle=='0'){
   	$(this).css({'-webkit-transform':'perspective(800px) rotateY(-180deg) translateZ(-1px)',
                 '-moz-transform':'perspective(800px) rotateY(-180deg) translateZ(-1px)',
                 '-ms-transform':'perspective(800px) rotateY(-180deg) translateZ(-1px)',
                 'transform':'perspective(800px) rotateY(-180deg) translateZ(-1px)'});
         }
   	else{
   	     $(this).css({'-webkit-transform':'perspective(800px) rotateY(0deg) translateZ(1px)',
                      '-moz-transform':'perspective(800px) rotateY(0deg) translateZ(1px)',
                      '-ms-transform':'perspective(800px) rotateY(0deg) translateZ(1px)',
                      'transform':'perspective(800px) rotateY(0deg) translateZ(1px)'});
   	    }
    return this;

}
$.fn.getY = function(){
	var agl;
    var set = $(this).css("-webkit-transform")||
                 $(this).css("-moz-transform")||
                 $(this).css("-ms-transform") ||
                 $(this).css("-o-transform")  ||
                 $(this).css("transform");
    if(set !== 'none') {
        var elem = set.split('(')[1].split(')')[0].split(',');
        var a = elem[0];
        var b = elem[1];
        agl = Math.round(Math.atan2(b, a) * (180/Math.PI));
        }
    else{agl = 0; }

    if(agl<0){agl = agl+360;}
    return agl;
    }