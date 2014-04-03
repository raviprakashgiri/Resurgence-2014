
//About Page Pop Up
			var popupAboutStatus = 0;
			
			function loadPopupAbout(){
				if(popupAboutStatus==0){
					$("#popupAbout").fadeIn("slow");
					popupAboutStatus = 1;
				}
			}
			
			function disablePopupAbout(){
				if(popupAboutStatus==1){
					$("#popupAbout").fadeOut("slow");
					popupAboutStatus = 0;
				}
			}
			
			function centerPopupAbout(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupAboutHeight = $("#popupAbout").height();
				var popupAboutWidth = $("#popupAbout").width();
				$("#popupAbout").css({
					"position": "absolute",
					"top": windowHeight/2-popupAboutHeight/2,
					"left": windowWidth/2-popupAboutWidth/2
				});
			}
			
			
			$(document).ready(function(){
				$("#popupAbout").fadeOut();
				popupAboutStatus = 0;
				$("#about").click(function(){
				$("#popupAbout").css({
					"visibility": "visible"	});
//					disablePopupProjects();
					disablePopuptoday();
					disablePopupArchives();
					disablePopupEvents();
					disablePopupCS();
					centerPopupAbout();
					loadPopupAbout();
				    $("#popupAbout").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10);	
				});
				$("#popupAboutClose").click(function(){
					disablePopupAbout();
				});
				$("#bg").click(function(){
					disablePopupAbout();
				});
				$(document).keyup(function(e){
				if(e.keyCode === 27)
					disablePopupAbout();
			});
			});

//Todays Page Pop Up
			var popuptodayStatus = 0;
			
			function loadPopuptoday(){
				if(popuptodayStatus==0){
					$("#popuptoday").fadeIn("slow");
					popuptodayStatus = 1;
				}
			}
			
			function disablePopuptoday(){
				if(popuptodayStatus==1){
					$("#popuptoday").fadeOut("slow");
					popuptodayStatus = 0;
				}
			}
			
			function centerPopuptoday(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popuptodayHeight = $("#popuptoday").height();
				var popuptodayWidth = $("#popuptoday").width();
				$("#popuptoday").css({
					"position": "absolute",
					"top": windowHeight/2-popuptodayHeight/2,
					"left": windowWidth/2-popuptodayWidth/2
				});
			}
			
			
			$(document).ready(function(){
				$("#popuptoday").fadeOut();
				popuptodayStatus = 0;
				$("#today").click(function(){
				$("#popuptoday").css({
					"visibility": "visible"	});
					disablePopupAbout();
//					disablePopupProjects();
					disablePopupArchives();
					disablePopupEvents(),
					disablePopupCS();					
					centerPopuptoday();
					loadPopuptoday();
				    $("#popuptoday").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10);						
				});
				$("#popuptodayClose").click(function(){
					disablePopuptoday();
				});
				$("#bg").click(function(){
					disablePopuptoday();
				});
				$(document).keyup(function(e){
				if(e.keyCode === 27)
					disablePopuptoday();
			});
			});


//Wrapper_startup pop up
			var popupArchivesStatus = 0;
			
			function loadPopupArchives(){
				if(popupArchivesStatus==0){
					$("#popupArchives").fadeIn("slow");
					popupArchivesStatus = 1;
				}
			}
			
			function disablePopupArchives(){
				if(popupArchivesStatus==1){
					$("#popupArchives").fadeOut("slow");
					popupArchivesStatus = 0;
				}
			}
			
			function centerPopupArchives(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupArchivesHeight = $("#popupArchives").height();
				var popupArchivesWidth = $("#popupArchives").width();
				$("#popupArchives").css({
					"position": "absolute",
					"top": 0,
					"left": 0
				});
			}
			
			
			$(document).ready(function(){
				$("#popupArchives").fadeIn();
                $("#popupArchives").css({
					"visibility": "visible"	});
					disablePopupAbout();
//					disablePopupProjects();	
					disablePopuptoday();			
					disablePopupCS();
					centerPopupArchives();
					loadPopupArchives();
				  //  $("#popupArchives").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10);	
				popupArchivesStatus = 1;
			/*	$("#archives").click(function(){
				$("#popupArchives").css({
					"visibility": "visible"	});
					disablePopupAbout();
//					disablePopupProjects();	
					disablePopuptoday();			
					disablePopupCS();
					centerPopupArchives();
					loadPopupArchives();
				    $("#popupArchives").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10);						
				});*/
				$("#popupArchivesClose").click(function(){
					disablePopupArchives();
				});
			/*	$("#bg").click(function(){
					disablePopupArchives();
				});
				$(document).keyup(function(e){
				if(e.keyCode === 27)
					disablePopupArchives();
			});*/
			});
			
			
//Events pop up

	/*		var popupEventsStatus = 0;
			
			function loadPopupEvents(){
				if(popupEventsStatus==0){
					$("#popupEvents").fadeIn("slow");
					popupEventsStatus = 1;
				}
			}
			
			function disablePopupEvents(){
				if(popupEventsStatus==1){
					$("#popupEvents").fadeOut("slow");
					popupEventsStatus = 0;
				}
			}
			
			function centerPopupEvents(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupEventsHeight = $("#popupEvents").height();
				var popupEventsWidth = $("#popupEvents").width();
				$("#popupEvents").css({
					"position": "absolute",
					"top": windowHeight/2-popupEventsHeight/2,
					"left": windowWidth/2-popupEventsWidth/2
				});
			}
			
			
			$(document).ready(function(){
				$("#popupEvents").fadeOut();
				popupEventsStatus = 0;
				$("#events").click(function(){
				$("#popupEvents").css({
					"visibility": "visible"	});
					disablePopupAbout();
//					disablePopupProjects();	
					disablePopuptoday();			
					disablePopupCS();
					centerPopupEvents();
					loadPopupEvents();
				    $("#popupEvents").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10);						
				});
				$("#popupEventsClose").click(function(){
					disablePopupEvents();
				});
				$("#bg").click(function(){
					disablePopupEvents();
				});
				$(document).keyup(function(e){
				if(e.keyCode === 27)
					disablePopupEvents();
			});
			});

*/
//coming soon Page Pop Up
			var popupCSStatus = 0;
			
			function loadPopupCS(){
				if(popupCSStatus==0){
					$("#popupCS").fadeIn("slow");
					popupCSStatus = 1;
				}
			}
			
			function disablePopupCS(){
				if(popupCSStatus==1){
					$("#popupCS").fadeOut("slow");
					popupCSStatus = 0;
				}
			}
			
			function centerPopupCS(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupCSHeight = $("#popupCS").height();
				var popupCSWidth = $("#popupCS").width();
				$("#popupCS").css({
					"position": "absolute",
					"top": windowHeight/2-popupCSHeight/2,
					"left": windowWidth/2-popupCSWidth/2
				});
			}

function assignpopup(){
    $("#popupCS").css({
        "visibility": "visible"	});
    disablePopupAbout();
//    disablePopupProjects();
    disablePopuptoday();
    centerPopupCS();
    loadPopupCS();
    $("#popupCS").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10);

}

			$(document).ready(function(){
				$("#popupCS").fadeOut();
				popupCSStatus = 0;
              /*  $("#sponsors").click(function(){assignpopup()});*/
                $("#events").click(function(){assignpopup()});
             /*   $("#pronites").click(function(){assignpopup()});*/
                $("#Schedule").click(function(){assignpopup()});
				$("#popupCSClose").click(function(){
					disablePopupCS();
				});
				$("#bg").click(function(){
					disablePopupCS();
				});
				$(document).keyup(function(e){
				if(e.keyCode === 27)
					disablePopupCS();
			});
			});

