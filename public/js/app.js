// Feelings buttons
var $userName;
var $currentEmotion;
window.ingredient;
window.recipeArray = [];
var recipes;



var move = function(){
  window.location.href = "locationrecipe.html";
}

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
            $('.ingredientbutton').fadeIn('slow', function(){
              $('#test').on('click', function(){

                //window.ingredient = 'potatoes'
                getRecipeJson('potatoes');
                //window.localStorage.setItem('array', window.recipeArray);
                 //move();
                //console.log(window.recipeArray);



               })
            });
        }
        if ($currentEmotion === 'sad') {
            $('#firstset').replaceWith('<section id="ingredientsone"><button class="ingredientbutton getstarted" id="chocolate">Chocolate</button><img src="images/chocolate.jpeg" class="ingredient"/>\
            <button class="ingredientbutton getstarted" id="cake">Blueberries</button><img src="images/cake.jpeg" class="ingredient"/>\
            </section>');
            $('#secondset').replaceWith('<section id="ingredientsone"><button class="ingredientbutton getstarted" id="pizza">Pizza</button><img src="images/pizza.jpeg" class="ingredient"/>\
            <button class="ingredientbutton getstarted" id="cheese">Cheese</button><img src="images/cheese.png" class="ingredient"/>\
            </section>');
            $('.ingredientbutton').fadeIn('slow', function(){
              $('.ingredientbutton').on('click', function(){
                move();
               })
            });
        }
        if ($currentEmotion === 'angry') {
            $('#firstset').replaceWith('<section id="ingredientsone"><button class="ingredientbutton getstarted" id="peppers">Peppers</button><img src="images/peppers.jpeg" class="ingredient"/>\
            <button class="ingredientbutton getstarted" id="bourbon">Bourbon</button><img src="images/bourbon.jpg" class="ingredient"/>\
            </section>');
            $('#secondset').replaceWith('<section id="ingredientsone"><button class="ingredientbutton getstarted" id="nuts">Nuts</button><img src="images/nuts.jpg" class="ingredient"/>\
            <button class="ingredientbutton getstarted" id="beef">Beef</button><img src="images/beef.jpeg" class="ingredient"/>\
            </section>');
            $('.ingredientbutton').fadeIn('slow', function(){
              $('.ingredientbutton').on('click', function(){
                move();
               })
            });
        }
        if ($currentEmotion === 'stressed') {
            $('#firstset').replaceWith('<section id="ingredientsone"><button class="ingredientbutton getstarted" id="pretzel">Pretzels</button><img src="images/pretzel.jpg" class="ingredient"/>\
            <button class="ingredientbutton getstarted" id="blueberries">Blueberries</button><img src="images/blueberries.jpeg" class="ingredient"/>\
            </section>');
            $('#secondset').replaceWith('<section id="ingredientsone"><button class="ingredientbutton getstarted" id="chocolate">Chocolate</button><img src="images/chocolate.jpeg" class="ingredient"/>\
            <button class="ingredientbutton getstarted" id="avacado">Avacado</button><img src="images/avacado.jpeg" class="ingredient"/>\
            </section>');
            $('.ingredientbutton').fadeIn('slow', function(){
               $('.ingredientbutton').on('click', function(){
                move();
               })

            });
        }
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



function getRecipeJson(searchTerm) {

  var Recipe = function(info){
    this.name = info.Title,
    this.image = info.ImageURL,
    this.web = info.WebURL
   }

  var apiKey = "dvxTzcHziZpKgfz9rxpuA9i3Qh10wNK3";
  var titleKeyword = '"' + searchTerm +'"';
  var url = "http://api.bigoven.com/recipes?pg=1&rpp=25&title_kw="
                  + titleKeyword
                  + "&api_key="+apiKey;

  $.ajax({
    type: "GET",
    dataType: 'json',
    cache: false,
    url: url,
    success: function (data) {
      var data = (data.Results);
      console.dir(data);
      return;
      // for(i=0; i < data.length; i++) {
      //   window.recipeArray.push(new Recipe(data[i]));
      // }
       //console.log(window.recipeArray);
    }

  });
}



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

