
        $(document).ready( function(){



            function naveffect(){
                $('#menu > li').bind('mouseenter',function () {
                    var $elem = $(this);
                    $elem.find('img')
                        .stop(true)
                        .animate({
                            'width': '100%',
                            'height': '170px',
                            'left': '0px'
                        }, 300, 'linear')
                        .andSelf()
                        .find('.wrap')
                        .stop(true)
                        .animate({'top': '200px'}, 500, 'easeOutBack')
                        .andSelf()
                        .find('.active')
                        .stop(true)
                        .animate({'height': '240px'}, 300, 'easeOutBack', function () {
                            /*var $sub_menu = $elem.find('.box');
                             if($sub_menu.length){
                             var left = '170px';
                             if($elem.parent().children().length == $elem.index()+1)
                             left = '-170px';
                             $sub_menu.show().animate({'left':left},200);
                             }*/
                        });
                }).bind('mouseleave',function () {
                        var $elem = $(this);
                        /*	var $sub_menu = $elem.find('.box');
                         if($sub_menu.length)
                         $sub_menu.hide().css('left','0px');*/

                        $elem.find('.active')
                            .stop(true)
                            .animate({'height': '0px'}, 750)
                            .andSelf().find('img')
                            .stop(true)
                            .animate({
                                'width': '0px',
                                'height': '0px',
                                'left': '85px'}, 400)
                            .andSelf()
                            .find('.wrap')
                            .stop(true)
                            .animate({'top': '25px'}, 500);
//                    }).bind('click', function () {
//                        var $elem = $(this);
//
//                        var left = $elem.index() * $elem.width()
//                        $elem.unbind('mouseleave')
//                            .unbind('mouseenter')
//                            .find('.active')
//                            .stop(true)
//                            .animate({'left': -left }, 750)
//                            .andSelf().find('img')
//                            .stop(true)
//                            .animate({
//
//                                'left': -left
//                            }, 750)
//                            .andSelf()
//                            .find('.wrap')
//                            .stop(true)
//                            .animate({'left': -left}, 750, function () {
//                                $(this).animate({'top': '20px'}, 300, 'easeInBack')
//                                    .parent()
//                                    .find('.active')
//                                    .stop(true)
//                                    .animate({'height': '55px'}, 300, 'easeInBack')
//                                    .andSelf().find('img')
//                                    .stop(true)
//                                    .animate({
//                                        'width': '0px',
//                                        'height': '0px',
//                                        'left': -left + 85
//                                    }, 300);
//                            })
//
                    });


                $("#menu > li").each(function(i){
                    $(this).find(".wrap").animate({
                        "top":"25px"
                    },320*(i+1),'easeInBack')
                });
            }
            var newHash     = '',
                $mainContent = $('#container');
            //TODO

//            $("#menu li").delegate('a', 'click', function() {
//                window.location.hash = $(this).attr('href');
////                alert(window.location.hash);
//                return false;
//            });
//            $(window).bind('hashchange', function() {
//
//                newHash = window.location.hash.substr(1);
//                $mainContent.load(newHash + "#container",function(){
//                    naveffect();
//
//                });
//
//            }) ;

            naveffect();
           // $(window).trigger('hashchange');




        });




