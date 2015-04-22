// Feelings buttons
var $userName;
var $currentEmotion;

var replaceEmotion = function() {
    $('.emotionbutton').fadeOut('slow', function() {
        if ($currentEmotion === 'happy') {
            $('#firstset').replaceWith('<section id="ingredientsone"><button class="ingredientbutton getstarted" id="nuts">Nuts</button><img src="images/nuts.jpg" class="ingredient"/>\
            <button class="ingredientbutton getstarted" id="blueberries">Blueberries</button><img src="images/blueberries.jpeg" class="ingredient"/>\
            </section>');
            $('#secondset').replaceWith('<section id="ingredientsone"><button class="ingredientbutton getstarted" id="banana">Banana</button><img src="images/banana.jpeg" class="ingredient"/>\
            <button class="ingredientbutton getstarted" id="potatos">Potatos</button><img src="images/potatos.jpeg" class="ingredient"/>\
            </section>');
            $('.ingredientbutton').fadeIn('slow', function(){});
        }
        if ($currentEmotion === 'sad') {
            $('#firstset').replaceWith('<section id="ingredientsone"><button class="ingredientbutton getstarted" id="chocolate">Chocolate</button><img src="images/chocolate.jpeg" class="ingredient"/>\
            <button class="ingredientbutton getstarted" id="cake">Blueberries</button><img src="images/cake.jpeg" class="ingredient"/>\
            </section>');
            $('#secondset').replaceWith('<section id="ingredientsone"><button class="ingredientbutton getstarted" id="pizza">Pizza</button><img src="images/pizza.jpeg" class="ingredient"/>\
            <button class="ingredientbutton getstarted" id="cheese">Cheese</button><img src="images/cheese.png" class="ingredient"/>\
            </section>');
            $('.ingredientbutton').fadeIn('slow', function(){});
        }
        if ($currentEmotion === 'angry') {
            $('#firstset').replaceWith('<section id="ingredientsone"><button class="ingredientbutton getstarted" id="peppers">Peppers</button><img src="images/peppers.jpeg" class="ingredient"/>\
            <button class="ingredientbutton getstarted" id="bourbon">Bourbon</button><img src="images/bourbon.jpg" class="ingredient"/>\
            </section>');
            $('#secondset').replaceWith('<section id="ingredientsone"><button class="ingredientbutton getstarted" id="nuts">Nuts</button><img src="images/nuts.jpg" class="ingredient"/>\
            <button class="ingredientbutton getstarted" id="beef">Beef</button><img src="images/beef.jpeg" class="ingredient"/>\
            </section>');
            $('.ingredientbutton').fadeIn('slow', function(){});
        }
        if ($currentEmotion === 'stressed') {
            $('#firstset').replaceWith('<section id="ingredientsone"><button class="ingredientbutton getstarted" id="pretzel">Pretzels</button><img src="images/pretzel.jpg" class="ingredient"/>\
            <button class="ingredientbutton getstarted" id="blueberries">Blueberries</button><img src="images/blueberries.jpeg" class="ingredient"/>\
            </section>');
            $('#secondset').replaceWith('<section id="ingredientsone"><button class="ingredientbutton getstarted" id="chocolate">Chocolate</button><img src="images/chocolate.jpeg" class="ingredient"/>\
            <button class="ingredientbutton getstarted" id="avacado">Avacado</button><img src="images/avacado.jpeg" class="ingredient"/>\
            </section>');
            $('.ingredientbutton').fadeIn('slow', function(){});
        }
    });
};



  // $('#happy').click(function() {
  //   $('#happy').fadeOut("slow", function() {
  //   });
  //   $('#sad').fadeOut("slow", function() {
  //   });
  //   $('#angry').fadeOut("slow", function() {
  //   });
  //   $('#stressed').fadeOut("slow", function() {
  //   });
  //   $('.emotions').fadeOut("slow", function(){
  //   });
  //   var new_btn = $('<button id="chocolate">Chocolate</button>').addClass('two columns emotionbutton getstarted').fadeIn("slow",function(){
  //   });
  //   new_btn.insertAfter('#happy');

  //   var new_btn = $('<button id="caramel">Caramel</button>').addClass('two columns emotionbutton getstarted').fadeIn("slow",function(){
  //   });
  //   new_btn.insertAfter('#sad');

  //   var new_btn = $('<button id="cake">Cake</button>').addClass('two columns emotionbutton getstarted').fadeIn("slow",function(){
  //   });
  //   new_btn.insertAfter('#stressed');

  //   var new_btn = $('<button id="candy">Candy</button>').addClass('two columns emotionbutton getstarted').fadeIn("slow",function(){
  //   });
  //   new_btn.insertAfter('#angry');
  // });
  // $('#sad').click(function() {
  //   $('#happy').fadeOut("slow", function() {
  //   });
  //   $('#sad').fadeOut("slow", function() {
  //   });
  //   $('#angry').fadeOut("slow", function() {
  //   });
  //   $('#stressed').fadeOut("slow",function() {
  //   });
  //   $('.emotions').fadeOut("slow",function(){
  //   });
  //   var new_btn = $('<button id="chocolate">Chocolate</button>').addClass('two columns emotionbutton getstarted').fadeIn("slow", function(){
  //   });
  //   new_btn.insertAfter('#happy');

  //   var new_btn = $('<button id="caramel">Caramel</button>').addClass('two columns emotionbutton getstarted').fadeIn("slow", function(){
  //   });
  //   new_btn.insertAfter('#sad');

  //   var new_btn = $('<button id="cake">Cake</button>').addClass('two columns emotionbutton getstarted').fadeIn("slow", function(){
  //   });
  //   new_btn.insertAfter('#stressed');

  //   var new_btn = $('<button id="candy">Candy</button>').addClass('two columns emotionbutton getstarted').fadeIn("slow", function(){
  //   });
  //   new_btn.insertAfter('#angry');
  // });
  // $('#angry').click(function() {
  //   $('#happy').fadeOut("slow", function() {
  //   });
  //   $('#sad').fadeOut("slow", function() {
  //   });
  //   $('#angry').fadeOut("slow", function() {
  //   });
  //   $('#stressed').fadeOut("slow",function() {
  //   });
  //   $('.emotions').fadeOut("slow", function(){
  //   });

  //   var new_btn = $('<button id="chocolate">Chocolate</button>').addClass('two columns emotionbutton getstarted').fadeIn("slow", function(){
  //   });
  //   new_btn.insertAfter('#happy');

  //   var new_btn = $('<button id="caramel">Caramel</button>').addClass('two columns emotionbutton getstarted').fadeIn("slow", function(){
  //   });
  //   new_btn.insertAfter('#sad');

  //   var new_btn = $('<button id="cake">Cake</button>').addClass('two columns emotionbutton getstarted').fadeIn("slow", function(){
  //   });
  //   new_btn.insertAfter('#stressed');

  //   var new_btn = $('<button id="candy">Candy</button>').addClass('two columns emotionbutton getstarted').fadeIn("slow", function(){
  //   });
  //   new_btn.insertAfter('#angry');
  // });
  // $('#stressed').click(function() {
  //   $('#happy').fadeOut("slow", function() {
  //   });
  //   $('#sad').fadeOut("slow", function() {
  //   });
  //   $('#angry').fadeOut("slow", function() {
  //   });
  //   $('#stressed').fadeOut("slow",function() {
  //   });
  //   $('.emotions').fadeOut("slow",function(){
  //   });

  //   var new_btn = $('<button id="chocolate">Chocolate</button>').addClass('two columns emotionbutton getstarted').fadeIn("slow", function(){
  //   });
  //   new_btn.insertAfter('#happy');

  //   var new_btn = $('<button id="caramel">Caramel</button>').addClass('two columns emotionbutton getstarted').fadeIn("slow", function(){
  //   });
  //   new_btn.insertAfter('#sad');

  //   var new_btn = $('<button id="cake">Cake</button>').addClass('two columns emotionbutton getstarted').fadeIn("slow", function(){
  //   });
  //   new_btn.insertAfter('#stressed');

  //   var new_btn = $('<button id="candy">Candy</button>').addClass('two columns emotionbutton getstarted').fadeIn("slow", function(){
  //   });
  //   new_btn.insertAfter('#angry');
  // });

//setting current emotion and then replace buttons with replaceEmotion button
$('#happy').on('click', function() {
    $currentEmotion = 'happy';
    replaceEmotion();
});
$('#sad').on('click', function() {
    $currentEmotion = 'sad';
    replaceEmotion();
});
$('#angry').on('click', function() {
    $currentEmotion = 'angry';
    replaceEmotion();
});
$('#stressed').on('click', function() {
    $currentEmotion = 'stressed';
    replaceEmotion();
});

//name button event listner with validation
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
//get started event listener
$('#getstarted').on('click', function() {
  if ($userName === undefined) {
    $('footer').html('<p>We can\'t eat your feelings if we don\'t know who you are!</p>');
  } else {
    window.location.href = "feelings.html";
  }
});

