// Feelings buttons
var $userName;
var $currentEmotion;
//window.ingredient;
window.recipeArray = [];
var recipes;

var move = function(){
  window.location.href = "locationrecipe.html";
}

// This function will replace 'feelings' content with 'ingredient' content
var replaceEmotion = function() {
  $('.emotions').fadeOut('slow', function(){
  });
  $('.emotionbutton').fadeOut('slow', function() {
      if ($currentEmotion === 'happy') {
          $('#firstset').replaceWith('<section id="ingredients" class="twelve columns firstset"><button onclick="getRecipeJson(\'nuts\')" class="ingredientbutton getstarted" id="nuts">Nuts</button><img src="images/nuts.jpeg" class="ingredient" id="nutpic2"/>\
          <button onclick="getRecipeJson(\'blueberries\')" class="ingredientbutton getstarted" id="blueberries">Blueberries</button><img src="images/blueberries.jpeg" class="ingredient"/>\
          </section>');

          $('#secondset').replaceWith('<section id="ingredients" class="twelve columns secondset"><button onclick="getRecipeJson(\'bananas\')" class="ingredientbutton getstarted" id="banana">Banana</button><img src="images/banana.jpeg" class="ingredient"/>\
          <button onclick="getRecipeJson(\'potatoes\')"class="ingredientbutton getstarted" id="potatos">Potatoes</button><img src="images/potatos.jpeg" class="ingredient"/>\
          // </section>');
          $('#pagetwosection').replaceWith('<h5>That\'s fantastic! ' + window.localStorage.getItem('name', $userName) + ', choose your favorite snack and we\'ll keep that good mood going!</h5>');
          $('#firstset').fadeIn('slow', function(){
            $('#test').one('click', function(){
             })
          });
      };
      if ($currentEmotion === 'sad') {
          $('#firstset').replaceWith('<section id="ingredients" class="twelve columns firstset"><button onclick="getRecipeJson(\'chocolate\')" class="ingredientbutton getstarted" id="chocolate">Chocolate</button><img src="images/chocolate.jpeg" class="ingredient"/>\
          <button onclick="getRecipeJson(\'cake\')" class="ingredientbutton getstarted" id="cake">Cake</button><img src="images/cake.jpeg" class="ingredient"/>\
          </section>');
          $('#secondset').replaceWith('<section id="ingredients" class="twelve columns secondset"><button onclick="getRecipeJson(\'pizza\')" class="ingredientbutton getstarted" id="pizza">Pizza</button><img src="images/pizza.jpeg" class="ingredient" id="pizzapic"/>\
          <button onclick="getRecipeJson(\'cheese\')" class="ingredientbutton getstarted" id="cheese">Cheese</button><img src="images/cheese.jpeg" class="ingredient"/>\
          </section>');
          $('#pagetwosection').replaceWith('<h5>This has to change! ' + window.localStorage.getItem('name', $userName) + ', choose your favorite comfort food!</h5>');
          $('.ingredientbutton').fadeIn('slow', function(){
            $('.ingredientbutton').on('click', function(){
             })
          });
      };
      if ($currentEmotion === 'angry') {
          $('#firstset').replaceWith('<section id="ingredients" class="twelve columns firstset"><button onclick="getRecipeJson(\'peppers\')" class="ingredientbutton getstarted" id="peppers">Peppers</button><img src="images/peppers.jpeg" class="ingredient"/>\
          <button onclick="getRecipeJson(\'bourbon\')" class="ingredientbutton getstarted" id="bourbon">Bourbon</button><img src="images/bourbon.jpeg" class="ingredient"/>\
          </section>');
          $('#secondset').replaceWith('<section id="ingredients" class="twelve columns secondset"><button onclick="getRecipeJson(\'nuts\')" class=" ingredientbutton getstarted" id="nuts">Nuts</button><img src="images/nuts.jpeg" class="ingredient" id="nutpic"/>\
          <button onclick="getRecipeJson(\'beef\')" class="ingredientbutton getstarted" id="beef">Beef</button><img src="images/beef.jpeg" class="ingredient"/>\
          </section>');
          $('#pagetwosection').replaceWith('<h5>Crush that anger ' + window.localStorage.getItem('name', $userName) + ', by crushing one of these ingredients!</h5>');
          $('.ingredientbutton').fadeIn('slow', function(){
            $('.ingredientbutton').on('click', function(){
             })
          });
      };
      if ($currentEmotion === 'stressed') {
          $('#firstset').replaceWith('<section id="ingredients" class="twelve columns firstset"><button onclick="getRecipeJson(\'pretzel\')" class="ingredientbutton getstarted">Pretzels</button><img src="images/pretzel.jpeg" class="ingredient" id="pretzel"/>\
          <button onclick="getRecipeJson(\'blueberries\')" class="ingredientbutton getstarted" id="blueberries">Blueberries</button><img src="images/blueberries.jpeg" class="ingredient"/>\
          </section>');
          $('#secondset').replaceWith('<section id="ingredients" class="twelve columns secondset"><button onclick="getRecipeJson(\'chocolate\')" class="ingredientbutton getstarted" id="chocolate">Chocolate</button><img src="images/chocolate.jpeg" class="ingredient"/>\
          <button onclick="getRecipeJson(\'avocado\')" class="ingredientbutton getstarted" id="avocado">Avocado</button><img src="images/avacado.jpeg" class="ingredient"/>\
          </section>');
          $('#pagetwosection').replaceWith('<h5>I\'m so sorry to hear that ' + window.localStorage.getItem('name', $userName) + ', choose your favorite and we\'ll help you relax!</h5>');
          $('.ingredientbutton').fadeIn('slow', function(){
             $('.ingredientbutton').on('click', function(){
             })
          });
      };
  });
}


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


//API call and creation of array

var processing = function(response) {
  var tests = response.Results;
  for(i=0; i < tests.length; i++) {
    recipeArray.push(new Recipe(tests[i]))
  }
window.localStorage.setItem('array', JSON.stringify(recipeArray));
move();
}

var Recipe = function(info){
    this.name = info.Title,
    this.image = info.ImageURL,
    this.web = info.WebURL
   }


function getRecipeJson(searchTerm) {
  var apiKey = "dvxTzcHziZpKgfz9rxpuA9i3Qh10wNK3";
  var titleKeyword = '"' + searchTerm +'"';
  var url = "http://api.bigoven.com/recipes?pg=1&rpp=5&title_kw="
                  + titleKeyword
                  + "&api_key="+apiKey;

  $.ajax({
    type: "GET",
    dataType: 'json',
    cache: false,
    url: url,
    success: function (data) {
      processing(data);
      }
    })
  };


//name button event listner with validation
$('#namebutton').on('click', function() {
  event.preventDefault();
  $userName = $('#username').val();
  if ($userName === '') {
    $('footer').html('<p>We can\'t eat your feelings if we don\'t know who you are!</p>')
    $("#nameform")[0].reset()
  } else {
  $userName = $('#username').val();
  // Capitalize first letter of username
  function capitalize(str){
 return str.substring(0, 1).toUpperCase() + str.substring(1);
  };
  window.localStorage.setItem('name', capitalize($userName));

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

$('#pagetwosection').prepend(window.localStorage.getItem('name') + ', ');

$('h1').on('click', function() {
    window.location.href = 'index.html';

})

