window.onload = function(){
	window.onhashchange();
};

window.onhashchange = function(){
	var a = '';
	var b = '';
	var which = location.hash.slice(1).split('/');
	if(which[0]) a = which[0];
	else{
		a = events.data[0].eventid;
		window.open("events.html#"+a,"_self");
		return;
	}
	if(which[1]){
		b = which[1];
		if((!events.current||!events.currentEvent)||(events.current!=a||events.currentEvent!=b)){
			$("#events .img")[0].src='';
			$("#events .abst").html('');
			$("#events .title").html('');
			console.log(211);
			events.open(a,b);
			for (var i = 0; i < $("#navbar ul a").length; i++) {
				if($("#navbar ul a li")[i].dataset.name==a) {$($("#navbar ul a")[i]).addClass('active'); }
				else {$($("#navbar ul a")[i]).removeClass('active'); }
			};
		}
	}else{
		events.current = a;
		events.loadJSON(function(){
			window.open("events.html#"+events.current+"/"+events.currentJSON[0].eventid,"_self");
		});
	}
}

var animateOnce = function(a,b,c){
	$(a).addClass('animated '+b).one('animationend webkitAnimationEnd oAnimationEnd', function(){
		$(this).removeClass('animated '+b);
		if(c!=undefined) c();
	});
};
var exceptionalevents=["aadc","kreatrix"];
var events = {
	data: [
		{
			"title" : "Theatre",
			"eventid" : "cult"
		},
		{
			"title" : "Dance",
			"eventid" : "dance"
		},
		{
			"title" : "Literary",
			"eventid" : "literary"
		},
		{
			"title" : "Music",
			"eventid" : "music"
		},
		{
			"title" : "Fine Arts",
			"eventid" : "arts"
		},
        {
			"title" : "Sports",
			"eventid" : "sports"
		},
        {
			"title" : "Special",
			"eventid" : "special"
		},
		{
			"title" : "Inter",
			"eventid" : "inter"
		}
	],
	current: '',
	currentEvent: '',
	currentJSON: '',
	fillDetails: function(){
		var w;
		for (var i = 0; i < events.currentJSON.length; i++) {
			if(events.currentJSON[i].eventid==events.currentEvent){
				w = events.currentJSON[i];
				break;
			}
		}
		var loadingimg = '';
		var nimgload = false;
		var nimg = new Image();
		nimg.src = w.img;
		nimg.onload = function(){
			nimgload = true;
			if(($("#events .img")[0].src == loadingimg)||($("#events .img")[0].src == 'http://resurgence.smvdu.net.in/events.html'))
				$("#events .img")[0].src = w.img;
		};
		if(w.img=='') {console.log('sa');nimg.onload();}
		animateOnce("#events .details",'slideOutUp',function(){
			if(nimgload) $("#events .img")[0].src = w.img;
			else $("#events .img")[0].src = loadingimg;
			$("#events .title").html(w.title);
			$("#events .abst").html("");
			if(w.hasOwnProperty('timing')&&w.timing)
				$("#events .abst").append("Timings: "+w.timing+"<br>");
			$("#events .abst").append("For timings on all events, refer the <a href='#' download>Schedule</a><br><br>");
				$("#events .abst").append(w.abstract);
			if(w.rules) $("#events .abst").append('<br><br><div style="font: 120% Carnevalee;color:rgb(236,220,136);">RULES</div>'+w.rules);
			$("#events .abst").append(w.etc);
			animateOnce("#events .imgdiv",'slideInLeft');
			animateOnce("#events .abst",'slideInRight');
		});
	},
	open: function(a,b){
		if(events.current){events.current=events.currentJSON[0].eventid}
		if(events.current!=a){
			events.current=a;
			events.currentEvent=b;
			animateOnce("#events .sidebar",'slideOutLeft',function(){
				events.load(a,b);
				$("#events .sidebar")[0].style.cssFloat='left';
				$("#events .details")[0].style.cssFloat='right';
				$("#events .sidebar")[0].style.backgroundImage = 'url(img/sidebarbg.png)';
				animateOnce("#events .sidebar",'slideInLeft');
			});
		}
		events.current=a;
		events.currentEvent=b;
	},
	loadJSON: function(f){
		var jsonfile = '';
		switch(events.current){
			case "literary":
				$("#events")[0].style.background="rgba(5,10,10,0.85)";
				jsonfile = 'https://dl.dropboxusercontent.com/u/83227438/literary.json';
				break;
			case "dance":
				$("#events")[0].style.background="rgba(5,0,10,0.85)";
				jsonfile = 'https://dl.dropboxusercontent.com/u/83227438/cult.json';
				break;
			case "cult":
				$("#events")[0].style.background="rgba(15,0,0,0.85)";
				jsonfile = 'https://dl.dropboxusercontent.com/u/83227438/theatre.json';
				break;
			case "inter":
				$("#events")[0].style.background="rgba(15,15,0,0.85)";
				jsonfile = 'https://dl.dropboxusercontent.com/u/83227438/langames.json';
				break;
			case "arts":
				$("#events")[0].style.background="rgba(15,15,0,0.85)";
				jsonfile = 'https://dl.dropboxusercontent.com/u/83227438/finearts.json';
				break;
			case "special":
				$("#events")[0].style.background="rgba(15,15,0,0.85)";
				jsonfile = 'https://dl.dropboxusercontent.com/u/83227438/special.json';
				break;
            case "sports":
				$("#events")[0].style.background="rgba(15,15,0,0.85)";
				jsonfile = 'https://dl.dropboxusercontent.com/u/83227438/sports.json';
				break;    
			case "music":
			default:
				events.current = "music";
				$("#events")[0].style.background="rgba(5,10,0,0.85)";
				jsonfile = 'https://dl.dropboxusercontent.com/u/83227438/music.json';
				break;
		}
		$.ajax({
			dataType: "json",
			url: jsonfile,
			data: {},
			success: function(data){
				events.currentJSON=data;
				if(f) f();
			}
		});
	},
	load: function(a,b){
		$("#events .sidebar").html("<ul></ul>");
		events.loadJSON(function(){
			for(var i=0;i<events.currentJSON.length;i++){
				$("#events .sidebar ul").append('<li data-eventid="'+events.currentJSON[i].eventid+'">'+events.currentJSON[i].title+'</li>');
			};
			events.currentEvent = b;
			events.fillDetails();
			var t = 0;
			for (var i = 0; i < events.currentJSON.length; i++) {
				if(events.currentJSON[i].eventid==b)
					break;
				t++;
			};
			$($("#events .sidebar ul li")[t]).addClass('evt-sel');
			$("#events .sidebar ul li").click(function(){
				$("#events .sidebar ul li").removeClass('evt-sel');
				var t = $(this);
				t.addClass('evt-sel');
				events.currentEvent = t[0].dataset.eventid;
				events.fillDetails();
				window.open("events.html#"+events.current+"/"+t[0].dataset.eventid,"_self");
				return;
			});
		});
	}
};
