// ==================
// = Backbone Start =
// ==================

var SemesterApp = Backbone.View.extend ({
	el : "body",
	
	semester : window.semester, 
	
	name : "Semesterplan",
	about:  "WS 12/13",  
	
	student: "Hallo! "+ semester.student.name,					


	
	initialize : function(){
		this.template = _.template($('#app-view').html());
		console.log("Ich bin eine View des Semsesters",this);
		this.render();
	},
	
	render: function(){
		var viewHtml = this.template(this);
		this.$el.html(viewHtml);
		
	}
 });

$(function(){
	var app = new SemesterApp();
	console.log(app);
});

