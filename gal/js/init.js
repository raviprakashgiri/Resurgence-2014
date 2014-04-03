var o = {
	init: function(){
		this.portfolio.init();
	},
	portfolio: {
		data: {
		},
		init: function(){
			$('#portfolio').portfolio(o.portfolio.data);
		}
	}
}

$(function(){ o.init(); });
