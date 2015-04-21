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
    $('.emotions').fadeOut("slow", function(){
    });
    var new_btn = $('<button id="chocolate">Chocolate</button>').addClass('emotionbutton getstarted').fadeIn("slow",function(){
    });
    new_btn.insertAfter('#happy');

    var new_btn = $('<button id="caramel">Caramel</button>').addClass('emotionbutton getstarted').fadeIn("slow",function(){
    });
    new_btn.insertAfter('#sad');

    var new_btn = $('<button id="cake">Cake</button>').addClass('emotionbutton getstarted').fadeIn("slow",function(){
    });
    new_btn.insertAfter('#stressed');

    var new_btn = $('<button id="candy">Candy</button>').addClass('emotionbutton getstarted').fadeIn("slow",function(){
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
    $('.emotions').fadeOut("slow",function(){
    });
    var new_btn = $('<button id="chocolate">Chocolate</button>').addClass('emotionbutton getstarted').fadeIn("slow", function(){
    });
    new_btn.insertAfter('#happy');

    var new_btn = $('<button id="caramel">Caramel</button>').addClass('emotionbutton getstarted').fadeIn("slow", function(){
    });
    new_btn.insertAfter('#sad');

    var new_btn = $('<button id="cake">Cake</button>').addClass('emotionbutton getstarted').fadeIn("slow", function(){
    });
    new_btn.insertAfter('#stressed');

    var new_btn = $('<button id="candy">Candy</button>').addClass('emotionbutton getstarted').fadeIn("slow", function(){
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
    $('.emotions').fadeOut("slow", function(){
    });

    var new_btn = $('<button id="chocolate">Chocolate</button>').addClass('emotionbutton getstarted').fadeIn("slow", function(){
    });
    new_btn.insertAfter('#happy');

    var new_btn = $('<button id="caramel">Caramel</button>').addClass('emotionbutton getstarted').fadeIn("slow", function(){
    });
    new_btn.insertAfter('#sad');

    var new_btn = $('<button id="cake">Cake</button>').addClass('emotionbutton getstarted').fadeIn("slow", function(){
    });
    new_btn.insertAfter('#stressed');

    var new_btn = $('<button id="candy">Candy</button>').addClass('emotionbutton getstarted').fadeIn("slow", function(){
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
    $('.emotions').fadeOut("slow",function(){
    });

    var new_btn = $('<button id="chocolate">Chocolate</button>').addClass('two columns emotionbutton getstarted').fadeIn("slow", function(){
    });
    new_btn.insertAfter('#happy');

    var new_btn = $('<button id="caramel">Caramel</button>').addClass('two columns emotionbutton getstarted').fadeIn("slow", function(){
    });
    new_btn.insertAfter('#sad');

    var new_btn = $('<button id="cake">Cake</button>').addClass('two columns emotionbutton getstarted').fadeIn("slow", function(){
    });
    new_btn.insertAfter('#stressed');

    var new_btn = $('<button id="candy">Candy</button>').addClass('two columns emotionbutton getstarted').fadeIn("slow", function(){
    });
    new_btn.insertAfter('#angry');
  });
});

  var $userName;

    $('#namebutton').on('click', function() {
      event.preventDefault();
      if ($userName === '') {
        $('footer').html('<p>We can\'t eat your feeelings if we don\'t know who you are!</p>')
      } else {
      $userName = $('#username').val();
      window.localStorage.setItem('name', $userName);
      $('footer').html('<p>Welcome ' + $userName + ' !</p>');
      }
    });
