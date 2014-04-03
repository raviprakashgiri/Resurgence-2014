/*
 * Portfolio Plugin for Codrops
 * author: Marcin Dziewulski 
 * url: http://www.mobily.pl or http://playground.mobily.pl
 * inspiration: http://pauljnoble.com
 * last modified: 11.08.2011
 * MIT License
 */


(function($){
    $.fn.portfolio = function(options) {
		var d = {
				image: {
					width: 600,
					height: 400,
					margin: 20
				},
				path: {
					width: 10,
					height: 10,
					marginTop: 5,
					marginLeft: 5
				},
				animationSpeed: 400
		}; // default settings
		
		var s = $.extend({}, d, options); 
		
        return this.each(function(){
			var $t = $(this),
				plugin = {
					init: function(){
						this.set.position();
						this.paths.draw();
						this.paths.go();
						this.animate.item();
					},
					set: {
						position: function(){
							$t.find('.item').each(function(i){
								var t = $(this);
								t.css({ left: (s.image.width+s.image.margin)*i+'px' });
								t.find('div').each(function(j){
									var t = $(this);
									t.css({ top: (s.image.height+s.image.margin)*j+'px' });
								});
							});
						}
					},
					paths: {
						draw: function(){
							$t.append($('<div />').addClass('paths'));
							var path = $t.find('.paths'),
								items = $t.find('.item');
							items.each(function(i){
								var t = $(this), div = t.find('div');
								path.append($('<div />').addClass('path'+i).css({
										width: s.path.width+'px', 
										left: (s.path.width+s.path.marginLeft)*i+'px' 
									})
								);
								div.each(function(j){
									$('<a />').attr({ href: '#', rel: j }).css({ 
										width: s.path.width+'px',
										height: s.path.height+'px',
										top: (s.path.height+s.path.marginTop)*j+'px'  
									}).appendTo(path.find('.path'+i))
								});
							});
							path.find('.path0').find('a').eq(0).addClass('active');
						},
						go: function(){
							$t.find('.paths').find('a').click(function(){
								var t = $(this), all = $t.find('.paths').find('a'), column = t.parent('div').attr('class').split('path')[1], row = t.attr('rel'), 
									inside = $t.find('.inside'),
									top = row*(s.image.height+s.image.margin),
									left = column*(s.image.width+s.image.margin);
								inside.animate({
									top: -top+'px',
									left: -left+'px'
								}, s.animationSpeed, function(){
									plugin.position.get(inside);
								});	
								return false;
							});
						},
						classes: function(column, row){
							var anchors = $t.find('.paths').find('a'), anchor = anchors.filter(function(){
								var t = $(this),
									col = t.parent('div').attr('class').split('path')[1], 
									r = t.attr('rel');
								return col == column && r == row;
							});
							anchors.removeClass('active');
							anchor.addClass('active');
						}
					},
					animate: {
						item: function(){
							var down = { top: '-='+(s.image.height+s.image.margin)+'px' },
								up = { top: '+='+(s.image.height+s.image.margin)+'px' },
								next = { top: 0, left: '-='+(s.image.width+s.image.margin)+'px' },
								prev = { top: 0, left: '+='+(s.image.width+s.image.margin)+'px' }
							plugin.animate.img('.down', down, 40);
							plugin.animate.img('.up', up, 38);
							plugin.animate.img('.next', next, 39);
							plugin.animate.img('.prev', prev, 37);
						},
						img: function(element, object, key){
							var inside = $t.find('.inside'), type = $.browser.mozilla ? 'keypress' : 'keydown';
							$(element).click(function(){
								var t = $(this);
								if (!t.hasClass('active')){
									inside.animate(object, s.animationSpeed, function(){
										plugin.position.get(inside);
										t.removeClass('active');
									});	
								}
								t.addClass('active');
								return false;
							});
							$(document).bind(type, function(e) {
						        var code = e.keyCode ? e.keyCode : e.which;
								if(code == key && $(element).is(':visible')) { 
									if (!inside.is(':animated')) {
										inside.animate(object, s.animationSpeed, function(){
											plugin.position.get(inside);
										});
									}
								}
								return false;
							});	
						
						}
					},
					position: {
						get: function(element){
							var top = element.position().top,
								left = element.position().left;
							plugin.position.check(top, left);
						},
						check: function(top, left){
							top = ($.browser.msie && parseInt($.browser.version) == 8 && top != 0) ? top-1 : top;
							var items = $t.find('.item'),
								size_left = items.length-1,
								max_left = -size_left*(s.image.width+s.image.margin),
								column = left*size_left/max_left,
								current = items.filter(function(){
									return parseInt($(this).css('left')) == -left;
								}),
								size_top = current.find('div').length-1,
								max_top = -size_top*(s.image.height+s.image.margin),
								row = top*size_top/max_top,
								arrows = $t.find('.arrows'), 
								up = arrows.find('.up'), down = arrows.find('.down'),
								next = arrows.find('.next'), prev = arrows.find('.prev');
							if (left==max_left){ next.hide(); } else { next.show(); }
							if (left<0) { prev.show(); } else { prev.hide(); }
							if (top==max_top){ down.hide(); } else { down.show(); }
							if (top<0) { up.show(); } else { up.hide(); }
							plugin.paths.classes(column, row);
						}
					}
				}
			plugin.init();
        });
    };
}(jQuery));