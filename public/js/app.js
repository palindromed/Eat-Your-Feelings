// Feelings buttons
var $userName;
var $currentEmotion;
// This function will replace 'feelings' content with 'ingredient' content
var replaceEmotion = function() {
    $('.emotionbutton').fadeOut('slow', function() {
        if ($currentEmotion === 'happy') {
            $('#firstset').replaceWith('<section id="ingredientsone"><button class="ingredientbutton getstarted" id="nuts">Nuts</button><img src="images/nuts.jpg" class="ingredient"/>\
            <button class="ingredientbutton getstarted" id="blueberries">Blueberries</button><img src="images/blueberries.jpeg" class="ingredient"/>\
            </section>');
            $('#secondset').replaceWith('<section id="ingredientsone"><button class="ingredientbutton getstarted" id="banana">Banana</button><img src="images/banana.jpeg" class="ingredient"/>\
            <button class="ingredientbutton getstarted" id="potatos">Potatos</button><img src="images/potatos.jpeg" class="ingredient"/>\
            </section>');
            $('#pagetwosection').replaceWith('<h5>That\'s fantastic! ' + window.localStorage.getItem('name', $userName) + ', choose your favorite snack and we\'ll keep that good mood going!</h5>');
            $('.ingredientbutton').fadeIn('slow', function(){});
        }
        if ($currentEmotion === 'sad') {
            $('#firstset').replaceWith('<section id="ingredientsone"><button class="ingredientbutton getstarted" id="chocolate">Chocolate</button><img src="images/chocolate.jpeg" class="ingredient"/>\
            <button class="ingredientbutton getstarted" id="cake">Blueberries</button><img src="images/cake.jpeg" class="ingredient"/>\
            </section>');
            $('#secondset').replaceWith('<section id="ingredientsone"><button class="ingredientbutton getstarted" id="pizza">Pizza</button><img src="images/pizza.jpeg" class="ingredient"/>\
            <button class="ingredientbutton getstarted" id="cheese">Cheese</button><img src="images/cheese.png" class="ingredient"/>\
            </section>');
            $('#pagetwosection').replaceWith('<h5>This has to change! ' + window.localStorage.getItem('name', $userName) + ', choose your favorite comfort food!</h5>');
            $('.ingredientbutton').fadeIn('slow', function(){});
        }
        if ($currentEmotion === 'angry') {
            $('#firstset').replaceWith('<section id="ingredientsone"><button class="ingredientbutton getstarted" id="peppers">Peppers</button><img src="images/peppers.jpeg" class="ingredient"/>\
            <button class="ingredientbutton getstarted" id="bourbon">Bourbon</button><img src="images/bourbon.jpg" class="ingredient"/>\
            </section>');
            $('#secondset').replaceWith('<section id="ingredientsone"><button class="ingredientbutton getstarted" id="nuts">Nuts</button><img src="images/nuts.jpg" class="ingredient"/>\
            <button class="ingredientbutton getstarted" id="beef">Beef</button><img src="images/beef.jpeg" class="ingredient"/>\
            </section>');
            $('#pagetwosection').replaceWith('<h5>Crush that anger ' + window.localStorage.getItem('name', $userName) + ', by crushing one of these ingredients!</h5>');
            $('.ingredientbutton').fadeIn('slow', function(){});
        }
        if ($currentEmotion === 'stressed') {
            $('#firstset').replaceWith('<section id="ingredientsone"><button class="ingredientbutton getstarted" id="pretzel">Pretzels</button><img src="images/pretzel.jpg" class="ingredient"/>\
            <button class="ingredientbutton getstarted" id="blueberries">Blueberries</button><img src="images/blueberries.jpeg" class="ingredient"/>\
            </section>');
            $('#secondset').replaceWith('<section id="ingredientsone"><button class="ingredientbutton getstarted" id="chocolate">Chocolate</button><img src="images/chocolate.jpeg" class="ingredient"/>\
            <button class="ingredientbutton getstarted" id="avocado">Avocado</button><img src="images/avacado.jpeg" class="ingredient"/>\
            </section>');
            $('#pagetwosection').replaceWith('<h5>I\'m so sorry to hear that ' + window.localStorage.getItem('name', $userName) + ', choose your favorite and we\'ll help you relax!</h5>');
            $('.ingredientbutton').fadeIn('slow', function(){});
        }
    });
};

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
  $userName = $('#username').val();
  if ($userName === '') {
    $('footer').html('<p>We can\'t eat your feelings if we don\'t know who you are!</p>')
    $("#nameform")[0].reset()
  } else {
  $userName = $('#username').val();
  window.localStorage.setItem('name', $userName);
  $('footer').html('<p>Welcome ' + $userName + ' !</p>');
  }
});
//get started event listener
$('#getstarted').on('click', function() {
  if (!$userName) {
    $('footer').html('<p>We can\'t eat your feelings if we don\'t know who you are!</p>');
  } else {
    window.location.href = "feelings.html";
  }
});

$('#pagetwosection').prepend(window.localStorage.getItem('name', $userName) + ', ');
var str = window.localStorage.getItem('name', $userName);
str = str.toLowerCase().replace(/\b[a-z]/g, function(letter) {
    return letter.toUpperCase();
});


