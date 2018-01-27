// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require_tree .
//= require jquery
//= require bootstrap-sprockets
//alert('Rails!!!')

// window.addEventListener('load', function () {
	// document.getElementById('q').value='from javascript';

	// document.getElementById('q').addEventListener('keypress',  function () {
 //   console.log(this.value)})

	// document.getElementById("q").addEventListener('mouseover', function() {
	// })
	
// 	document.getElementById("add").addEventListener("click", function ()
// 	{
// 		var wynik;
// 		var f1 = parseInt(document.getElementById('field1').value);
// 		var f2 = parseInt(document.getElementById('field2').value);
// 		wynik = f1 + f2;

// 		document.getElementById("wynik").innerHTML = wynik }) 
// });

window.addEventListener("load", function() {
  var elements = document.querySelectorAll('.summary');
  for(var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", function(e) {
      e.preventDefault();
      var request = new XMLHttpRequest();
      request.open("GET", this.href + ".json");
      request.responseType = "json";
      request.addEventListener("load", function() {
       var summary = document.getElementById("summary-" + this.response.id)
       summary.innerText = "Comments: " + this.response.comments + ". Likes: " + this.response.likes;      });
      request.send();
    })
  }
});