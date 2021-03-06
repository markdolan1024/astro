// Mark Dolan Astro Functions
// link_string - brings in links accordion and footer



$.fn.greenify = function(){
	this.css("color","green");
};

function displaySciencetapModal(){
	resetMainModal();
	$("#mainModalLabel").html("Sciencetap Project");
	var dataElement = '<div class="col-xs-12">' +
		'<h3>Overview</h3>' +
		'<p>' +
		'The Sciencetap Project facilitates the process of collecting field data by allowing users to create projects and sites that specify where data is being collected.  The user can then create forms for that site which specifies the data that needs to be collected. When an approved user is in the field they can view this form and submit data.  The data is stored in a server as well as the latitude, longitude, and timestamp for the data submission.' +
		'</p>' +
		'</div>' +
		'<div class="col-xs-12">' +
		'<h3>Software Used</h3>' +
		'<ul>' +
		'<li><a href="http://ionicframework.com/" target="_blank">Ionic Framework</a></li>' +
		'<li><a href="https://angularjs.org/" target="_blank">AngularJS</a></li>' +
		'<li><a href="http://php.net/" target="_blank">PHP</a></li>' +
		'<li><a href="http://www.mysql.com/" target="_blank">MySQL</a></li>' +
		'</ul>' +
		'</div>' +
		'<div class="col-xs-4">' +
		'<h3>Screenshots</h3>' +
		'<table id="screenshots">' +
		'<tr>' +
		'<td class="screenshot"><a href="images/sciencetap_1.png"><img src="images/sciencetap_1.png" class="thumb"></a></td>' +
		'<td class="screenshot"><a href="images/sciencetap_2.png"><img src="images/sciencetap_2.png" class="thumb"></a></td>' +
		'<td class="screenshot"><a href="images/sciencetap_3.png"><img src="images/sciencetap_3.png" class="thumb"></a></td>' +
		'<td class="screenshot"><a href="images/sciencetap_4.png"><img src="images/sciencetap_4.png" class="thumb"></a></td>' +
		'</tr>' +
		'</table>' +
		'</div>'+
		'<div class="col-xs-12">' +
		'<h3>Links</h3>' +
		'<ul>' +
		'<li><a href="http://sciencetap.us/" target="_blank">Sciencetap Home Page</a></li>' +
		'<li><a href="https://github.com/markdolan1024/Sciencetap.git" target="_blank">GitHub Repo</a></li>' +
		'</ul>' +
		'</div>';
	$("#mainModalBody").append(dataElement);
}

function displayYelpModal(){
	resetMainModal();
	$("#mainModalLabel").html("Yelp Redo Project");
	var dataElement = '<div class="col-xs-12">' +
		'<h3>Overview</h3>' +
		'<p>' +
		'Yelp is a great way for people to find and share information about local businesses, but it can do much more than that.  Once you create an account, you can follow people, check-in, view your order history and group reviews into your own lists.  This app is mainly concerned with storing business information and writing reviews.' +
		'</p>' +
		'<p>The source code belongs to a private repository</p>' +
		'</div>' +
		'<div class="col-xs-12">' +
		'<h3>Software Used</h3>' +
		'<ul>' +
		'<li><a href="http://ionicframework.com/" target="_blank">Ionic Framework</a></li>' +
		'<li><a href="https://angularjs.org/" target="_blank">AngularJS</a></li>' +
		'<li><a href="http://php.net/" target="_blank">PHP</a></li>' +
		'<li><a href="http://www.mysql.com/" target="_blank">MySQL</a></li>' +
		'<li><a href="https://jquery.com/" target="_blank">jQuery (website only) </a></li>' +
		'</ul>' +
		'</div>' +
		'<div class="col-xs-4">' +
		'<h3>Screenshots</h3>' +
		'<table id="screenshots">' +
		'<tr>' +
		'<td class="screenshot"><a href="images/yelp_1.jpg"><img src="images/yelp_1.jpg" class="thumb"></a></td>' +
		'</tr>' +
		'</table>' +
		'</div>';
	$("#mainModalBody").append(dataElement);
}

function displayPPModal(){
	resetMainModal();
	$("#mainModalLabel").html("Programmer's Paint");
	var dataElement = '<div class="col-xs-12">' +
		'<h3>Overview</h3>' +
		'<p>' +
		'Programmer\'s Paint is a web application that allows users to draw state machines to model their programs.  The program will add circles representing states and dynamically connect states with lines representing transition functions.  The data is stored in a MySQL database for saving changes and loading old state machines.  In the works is the ability to draw UML diagrams.' +
		'</p>' +
		'</div>' +
		'<div class="col-xs-12">' +
		'<h3>Software Used</h3>' +
		'<ul>' +
		'<li><a href="https://jquery.com/" target="_blank">jQuery</a></li>' +
		'<li><a href="http://php.net/" target="_blank">PHP</a></li>' +
		'<li><a href="http://www.mysql.com/" target="_blank">MySQL</a></li>' +
		'</ul>' +
		'</div>' +
		'<div class="col-xs-4">' +
		'<h3>Screenshots</h3>' +
		'<table id="screenshots">' +
		'<tr>' +
		'<td class="screenshot"><a href="images/pp_1.jpg"><img src="images/pp_1.jpg" class="thumb"></a></td>' +
		'<td class="screenshot"><a href="images/pp_2.jpg"><img src="images/pp_2.jpg" class="thumb"></a></td>' +
		'</tr>' +
		'</table>' +
		'</div>' +
		'<div class="col-xs-12">' +
		'<h3>Links</h3>' +
		'<ul>' +
		'<li><a href="https://github.com/markdolan1024/Programmer-s-Paint.git" target="_blank">GitHub Repo</a></li>' +
		'</ul>' +
		'</div>';
	$("#mainModalBody").append(dataElement);
}

function displayWesnothModal(){
	resetMainModal();
	$("#mainModalLabel").html("The Battle For Wesnoth");
	var dataElement = '<div class="col-xs-12">' +
		'<h3>Overview</h3>' +
		'<p>' +
		'The Battle For Wesnoth is a free, open-source, turn-based strategy game.  It has different races such as elves, orcs, and humans, and allows you to level up and recall veterans from previous scenarios.  I think it\'s really cool and addicting.  Right now I\'m just messing around with Wesnoth Markup Language (WML), but I hope to contribute to the game in the future.' +
		'</p>' +
		'</div>' +
		'<div class="col-xs-12">' +
		'<h3>Software Used</h3>' +
		'<ul>' +
		'<li><a href="http://wiki.wesnoth.org/ReferenceWML" target="_blank">Wesnoth Markup Language</a></li>' +
		'<li><a href="http://www.lua.org/" target="_blank">Lua</a></li>' +
		'<li><a href="https://en.wikipedia.org/wiki/C%2B%2B target="_blank">C++</a></li>' +
		'</ul>' +
		'</div>' +
		'<div class="col-xs-4">' +
		'<h3>Screenshots</h3>' +
		'<table id="screenshots">' +
		'<tr>' +
		'<td class="screenshot"><a href="images/wesnoth_1.jpg"><img src="images/wesnoth_1.jpg" class="thumb"></a></td>' +
		'<td class="screenshot"><a href="images/wesnoth_2.jpg"><img src="images/wesnoth_2.jpg" class="thumb"></a></td>' +
		'<td class="screenshot"><a href="images/wesnoth_3.jpg"><img src="images/wesnoth_3.jpg" class="thumb"></a></td>' +
		'<td class="screenshot"><a href="images/wesnoth_4.jpg"><img src="images/wesnoth_4.jpg" class="thumb"></a></td>' +
		'</tr>' +
		'</table>' +
		'</div>' +
		'<div class="col-xs-12">' +
		'<h3>Links</h3>' +
		'<ul>' +
		'<li><a href="https://github.com/wesnoth" target="_blank">GitHub Repo</a></li>' +
		'<li><a href="wiki.wesnoth.org/DeveloperGuide" target="_blank">Developer Guide</a></li>' +
		'</ul>' +
		'</div>';
	$("#mainModalBody").append(dataElement);
}

function resetMainModal(){
	$("#mainModalLabel").html('');
	$("#mainModalBody").html('');
	$("#modalCloseX").unbind('click.ns');
	$("#modalCloseBtn").unbind('click.ns');
}

var link_string =  [
		"<h3>Other Links</h3>",
				"<div class=\"panel-group\" id=\"accordion\">",
						"<div class=\"panel panel-default\">",
								"<div class=\"panel-heading\">",
										"<h4 class=\"panel-title\">",
												"<a href=\"#social\" class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\">",
												"<span class=\"glyphicon glyphicon-user\"></span> Social Media</a>",
										"</h4>",
										"</div>",
								"<div id=\"social\" class=\"panel-collapse collapse\">",
										"<div class=\"panel-body\">",
												"<ul>",
												"<li><a href=\"https://www.facebook.com/profile.php?id=100005819415030\">Facebook</a></li>",
												"<li><a href=\"https://plus.google.com/u/0/114610811783469908369/posts\">Google+</a></li>",
												"<li><a href=\"https://twitter.com/dolanmarkpa\">Follow @dolanmarkpa</a></li>",
												"<li><a href=\"https://github.com/MarkElmerDolan\">Git Repos</a></li>",
												"<li><a href=\"http://markelmerdolan.blogspot.com/\">Mark Elmer Dolan Blog</a></li>",
												"<li><a href=\"http://prezi.com/user/m5skbzgibuga\">My Prezi Account</a></li>",
												"<li><a href=\"https://www.youtube.com/channel/UCwJP-4gL8BV5_JTR7KaqECw\">YOUTUBE Account</a></li>",
												"<li><a href=\"https://markelmerdolan.wordpress.com\">My Wordpress Blog</a></li>",
												"</ul>",
										"</div>",
								"</div>",
								"<div class=\"panel-heading\">",
										"<h4 class=\"panel-title\">",
										"<a href=\"#working\" class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\">",
										"<span class=\"glyphicon glyphicon-ok-circle\"></span> Working Sites</a>",
										"</h4>",
								"</div>",
								"<div id=\"working\" class=\"panel-collapse collapse\">",
										"<div class=\"panel-body\">",
												"<ul>",
												"<li><a href=\"http://cis-linux2.temple.edu/~tue79412/sciencetap/www/weather.html\">Sciencetap Project</a></li>",
												"<li><a href=\"http://astro.temple.edu/~tue79412/index.html\">Temple Astro Site</a></li>",
												"<li><a href=\"http://cis-linux2.temple.edu/~tue79412/index.php\">My Web Apps</a></li>",
												"</ul>",
										"</div>",
								"</div>",
								"<div class=\"panel-heading\">",
										"<h4 class=\"panel-title\">",
										"<a href=\"#google\" class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\">",
										"<span class=\"glyphicon glyphicon-pushpin\"></span> Google Sites</a>",
										"</h4>",
								"</div>",
								"<div id=\"google\" class=\"panel-collapse collapse\">",
										"<div class=\"panel-body\">",
												"<ul>",
												"<li><a href=\"https://sites.google.com/site/dolanmarkpa/\">Temple University Classwork</a></li>",
												"<li><a href=\"https://sites.google.com/site/markdolanelmer/\">GMail Site Projects</a></li>",
												"<li><a href=\"https://sites.google.com/site/markelmerdolan/\">GMail Site Artwork</a></li>",
												"<li><a href=\"https://sites.google.com/site/markelmerdolanphiladelphia/\">GMail Working Site</a></li>",
												"<li><a href=\"https://sites.google.com/site/markelmerdolanprogramming/\">Mark Elmer Dolan Programming</a></li>",
												"<li><a href=\"https://sites.google.com/site/markdolanphiladelphia/\">Mark Elmer Dolan Philadelphia Art</a>                 </li>",
												"<li><a href=\"https://sites.google.com/site/markelmerdolancis/\">Mark Elmer Dolan CIS</a></li>",
												"<li><a href=\"https://sites.google.com/site/markelmerdolanphysics/\">Mark Elmer Dolan Physics</a></li>",
												"<li><a href=\"https://sites.google.com/site/markelmerdolanphillyart/\">Mark Elmer Dolan Artwork</a></li>",
												"<li><a href=\"https://sites.google.com/site/markelmerdolanprojects/\">Mark Elmer Dolan Projects</a> </li>",
												"</ul>",
										"</div>",
								"</div>",
								"<div class=\"panel-heading\">",
										"<h4 class=\"panel-title\">",
										"<a href=\"#godaddy\" class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\">",
										"<span class=\"glyphicon glyphicon-star\"></span> Go Daddy Sites</a>",
										"</h4>",
								"</div>",
								"<div id=\"godaddy\" class=\"panel-collapse collapse\">",
										"<div class=\"panel-body\">",
												"<ul>",
												"<li><a href=\"http://www.markelmerdolan.com\">Mark Elmer Dolan Research</a></li>",
												"<li><a href=\"http://www.markelmerdolan.net\">Mark Elmer Dolan Photography</a></li>",
												"<li><a href=\"http://www.markelmerdolan.co\">Mark Elmer Dolan Music</a></li>",
												"<li><a href=\"http://www.markelmerdolan.info\">Mark Elmer Dolan Writing</a></li>",
												"<li><a href=\"http://www.markdolanphiladelphia.net\">Mark Elmer Dolan Games</a></li>",
												"<li><a href=\"http://www.markdolanphiladelphia.com\">Mark Elmer Dolan Programming</a></li>",
												"<li><a href=\"http://www.markdolanphiladelphia.info\">Mark Elmer Dolan IT</a></li>",
												"<li><a href=\"http://www.markdolanphiladelphia.org\">Mark Elmer Dolan Education</a></li>",
												"</ul>",
										"</div>",
								"</div>",
								"<div class=\"panel-heading\">",
										"<h4 class=\"panel-title\">",
										"<a href=\"#other\" class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\">",
										"<span class=\"glyphicon glyphicon-road\"></span> Other  Sites</a> ",
										"</h4>",
								"</div>",
								"<div id=\"other\" class=\"panel-collapse collapse\">",
										"<div class=\"panel-body\">",
												"<ul>",
												"<li><a href=\"https://sites.google.com/site/markelmerdolan1/\">Mark Elmer Dolan Philadelphia Test1</a></li>",
												"<li><a href=\"https://sites.google.com/site/markelmerdolan2/\">Mark Elmer Dolan Philadelphia Test2</a></li>",
												"<li><a href=\"https://sites.google.com/site/markelmerdolan3/\">Mark Elmer Dolan Philadelphia Test3</a></li>",
												"<li><a href=\"https://sites.google.com/site/markelmerdolan4/\">Mark Elmer Dolan Philadelphia Test4</a></li>",
												"<li><a href=\"https://sites.google.com/site/markdolanphiladelphia1/\">Mark Elmer Dolan Philadelphia Test5</a></li>",
												"<li><a href=\"https://sites.google.com/site/markdolanphiladelphia2/\">Mark Elmer Dolan Philadelphia Test6</a></li>",
												"<li><a href=\"https://sites.google.com/site/markdolanphiladelphia3/\">Mark Elmer Dolan Philadelphia Test7</a></li>",
												"<li><a href=\"https://sites.google.com/site/markdolanelmerphiladelphia/\">Mark Elmer Dolan Philadelphia Test8</a></li>",
												"</ul>",
										"</div>",
								"</div>",
						"</div>",
				"</div>",
				"<footer class=\"row\">",
						"<p> ",
						"Contact Info:<br>",
						"Mark Elmer Dolan<br>",
						"756 Humphreys Rd<br>",
						"Ardmore, PA 19003<br>",
						"484-784-7894<br>",
						"markdolan1024@gmail.com<br>",
						"tue79412@temple.edu<br>",
						"</p>",
						"<a href=\"https://twitter.com/dolanmarkPA\" class=\"twitter-follow-button\" data-show-count=\"false\">Follow @dolanmarkPA</a>",
						"<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>",
				"</footer>"
];

var nav_string =  [
		"<div class=\"row\">",
				"<nav class=\"navbar navbar-default navbar-fixed-top navbar-inverse\">",
						"<div class=\"navbar-header\">",
								"<button type\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#collapse\">",
										"<span class=\"sr-only\">Toggle Navigation</span>",
										"<span class=\"icon-bar\"></span>",
										"<span class=\"icon-bar\"></span>",
										"<span class=\"icon-bar\"></span>",
								"</button>",
						"</div>",
						"<div class=\"collapse navbar-collapse\" id=\"collapse\">",
								"<ul class=\"nav navbar-nav\">",
								"<li class=\"active\"><a href=\"index.html\">Home Page</a></li>",
								"<li><a href=\"web_design.html\">Web Design</a></li>",
								"<li><a href=\"web_programs.html\">Web Programs</a></li>",
								"<li><a href=\"learning_resources.html\">Learning Resources</a></li>",
								"<li><a href=\"health.html\">Health</a></li>",
								"<li><a href=\"about_me.html\">About Me</a></li>",
								"</ul>",
						"</div>",
				"</nav>",
		"</div>"
];
