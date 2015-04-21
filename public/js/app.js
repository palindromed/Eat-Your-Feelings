// Feelings buttons

 $(function() {
    $('#happy').click(function() {
      $('#happy').fadeOut("slow", function() {
      });
      $('#sad').fadeOut("slow", function() {
      });
      $('#angry').fadeOut("slow", function() {
      });
      $('#stressed').fadeOut("slow", function() {
      });
      var new_btn = $('<button id="chocolate">Chocolate</button>').addClass('three columns offset-by-two').fadeIn("slow",function(){
      });
      new_btn.insertAfter('#happy');
      $('#stressed').insertAfter('#chocolate');

      var new_btn = $('<button id="caramel">Caramel</button>').addClass('three columns offset-by-two').fadeIn("slow",function(){
      });
      new_btn.insertAfter('#sad');

      var new_btn = $('<button id="cake">Cake</button>').addClass('three columns offset-by-two').fadeIn("slow",function(){
      });
      new_btn.insertAfter('#stressed');

      var new_btn = $('<button id="candy">Candy</button>').addClass('three columns offset-by-two').fadeIn("slow",function(){
      });
      new_btn.insertAfter('#angry');
  });
    $('#sad').click(function() {
      $('#happy').fadeOut("slow", function() {
      });
      $('#sad').fadeOut("slow", function() {
      });
      $('#angry').fadeOut("slow", function() {
      });
      $('#stressed').fadeOut("slow",function() {
      });
      var new_btn = $('<button id="chocolate">Chocolate</button>').addClass('three columns offset-by-two').fadeIn("slow", function(){
      });
      new_btn.insertAfter('#happy');

      var new_btn = $('<button id="caramel">Caramel</button>').addClass('three columns offset-by-two').fadeIn("slow", function(){
      });
      new_btn.insertAfter('#sad');

      var new_btn = $('<button id="cake">Cake</button>').addClass('three columns offset-by-two').fadeIn("slow", function(){
      });
      new_btn.insertAfter('#stressed');

      var new_btn = $('<button id="candy">Candy</button>').addClass('three columns offset-by-two').fadeIn("slow", function(){
      });
      new_btn.insertAfter('#angry');
    });
    $('#angry').click(function() {
      $('#happy').fadeOut("slow", function() {
      });
      $('#sad').fadeOut("slow", function() {
      });
      $('#angry').fadeOut("slow", function() {
      });
      $('#stressed').fadeOut("slow",function() {
      });
      var new_btn = $('<button id="chocolate">Chocolate</button>').addClass('three columns offset-by-two').fadeIn("slow", function(){
      });
      new_btn.insertAfter('#happy');

      var new_btn = $('<button id="caramel">Caramel</button>').addClass('three columns offset-by-two').fadeIn("slow", function(){
      });
      new_btn.insertAfter('#sad');

      var new_btn = $('<button id="cake">Cake</button>').addClass('three columns offset-by-two').fadeIn("slow", function(){
      });
      new_btn.insertAfter('#stressed');

      var new_btn = $('<button id="candy">Candy</button>').addClass('three columns offset-by-two').fadeIn("slow", function(){
      });
      new_btn.insertAfter('#angry');
    });
    $('#stressed').click(function() {
      $('#happy').fadeOut("slow", function() {
      });
      $('#sad').fadeOut("slow", function() {
      });
      $('#angry').fadeOut("slow", function() {
      });
      $('#stressed').fadeOut("slow",function() {
      });
      var new_btn = $('<button id="chocolate">Chocolate</button>').addClass('three columns offset-by-two').fadeIn("slow", function(){
      });
      new_btn.insertAfter('#happy');

      var new_btn = $('<button id="caramel">Caramel</button>').addClass('three columns offset-by-two').fadeIn("slow", function(){
      });
      new_btn.insertAfter('#sad');

      var new_btn = $('<button id="cake">Cake</button>').addClass('three columns offset-by-two').fadeIn("slow", function(){
      });
      new_btn.insertAfter('#stressed');

      var new_btn = $('<button id="candy">Candy</button>').addClass('three columns offset-by-two').fadeIn("slow", function(){
      });
      new_btn.insertAfter('#angry');
  });
});
