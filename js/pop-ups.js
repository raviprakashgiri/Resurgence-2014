
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
					disablePopupContact();
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

//Contact Page Pop Up
			var popupContactStatus = 0;
			
			function loadPopupContact(){
				if(popupContactStatus==0){
					$("#popupContact").fadeIn("slow");
					popupContactStatus = 1;
				}
			}
			
			function disablePopupContact(){
				if(popupContactStatus==1){
					$("#popupContact").fadeOut("slow");
					popupContactStatus = 0;
				}
			}
			
			function centerPopupContact(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupContactHeight = $("#popupContact").height();
				var popupContactWidth = $("#popupContact").width();
				$("#popupContact").css({
					"position": "absolute",
					"top": windowHeight/2-popupContactHeight/2,
					"left": windowWidth/2-popupContactWidth/2
				});
			}
			
			
			$(document).ready(function(){
				$("#popupContact").fadeOut();
				popupContactStatus = 0;
				$("#contact").click(function(){
				$("#popupContact").css({
					"visibility": "visible"	});
					disablePopupAbout();
//					disablePopupProjects();
					disablePopupArchives();
					disablePopupEvents(),
					disablePopupCS();					
					centerPopupContact();
					loadPopupContact();
				    $("#popupContact").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10);						
				});
				$("#popupContactClose").click(function(){
					disablePopupContact();
				});
				$("#bg").click(function(){
					disablePopupContact();
				});
				$(document).keyup(function(e){
				if(e.keyCode === 27)
					disablePopupContact();
			});
			});


//Archives pop up
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
					"top": windowHeight/2-popupArchivesHeight/2,
					"left": windowWidth/2-popupArchivesWidth/2
				});
			}
			
			
			$(document).ready(function(){
				$("#popupArchives").fadeOut();
				popupArchivesStatus = 0;
				$("#archives").click(function(){
				$("#popupArchives").css({
					"visibility": "visible"	});
					disablePopupAbout();
//					disablePopupProjects();	
					disablePopupContact();			
					disablePopupCS();
					centerPopupArchives();
					loadPopupArchives();
				    $("#popupArchives").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10);						
				});
				$("#popupArchivesClose").click(function(){
					disablePopupArchives();
				});
				$("#bg").click(function(){
					disablePopupArchives();
				});
				$(document).keyup(function(e){
				if(e.keyCode === 27)
					disablePopupArchives();
			});
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
					disablePopupContact();			
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
    disablePopupContact();
    centerPopupCS();
    loadPopupCS();
    $("#popupCS").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10);

}

			$(document).ready(function(){
				$("#popupCS").fadeOut();
				popupCSStatus = 0;
                $("#sponsors").click(function(){assignpopup()});
                $("#events").click(function(){assignpopup()});
                $("#pronites").click(function(){assignpopup()});
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