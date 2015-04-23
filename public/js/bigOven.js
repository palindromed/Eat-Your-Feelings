$(function () {

  var recipeArray= JSON.parse(window.localStorage.getItem('array'));

  var TL = window.TL;
  var BR = window.BR;
  var BL = window.BL;
  var BR = window.BR;

  var sortFunction = function(max) {
      return Math.floor(Math.random() * (max));
  };

  var picks = function(){
    $('#contains').replaceWith('<section class="recipes"><figure class="four columns">\
      <a href="'+ recipeArray[TL].web +'"><img src=" '+ recipeArray[TL].image +'"id="outputs"/></a><figcaption>' + recipeArray[TL].name +
      '</figcaption></figure><figure class="four columns"><a href="'+ recipeArray[TR].web +'"><img src="'+ recipeArray[TR].image +
      '" id="outputs"/></a><figcaption>'+ recipeArray[TR].name +'</figcaption></figure></section>\
      <section class="recipes"><figure class="four columns"><a href="'+ recipeArray[BL].web +'"><img src=" '+ recipeArray[BL].image +
      '"id="outputs"/></a><figcaption>' + recipeArray[BL].name +
      '</figcaption></figure><figure class="four columns"><a href="'+ recipeArray[BR].web +'"><img src="'+ recipeArray[BR].image +
      '" id="outputs"/></a><figcaption>'+ recipeArray[BR].name + '</figcaption></figure></section>')
  }

  var randomize = function() {
    TL = sortFunction(recipeArray.length);
    TR = sortFunction(recipeArray.length);
    while (TL === TR){
      TR = sortFunction(recipeArray.length)
    }
    BR = sortFunction(recipeArray.length);
    while (BR === TR || BR === TL) {
      BR = sortFunction(recipeArray.length);
    }
    BL = sortFunction(recipeArray.length);
    while (BL === BR || BL === TR || BL === TL) {
    }
    picks();
  };

  randomize();
})
