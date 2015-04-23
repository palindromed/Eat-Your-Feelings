$(function () {
  var recipeArray= JSON.parse(window.localStorage.getItem('array'));

  var randomize = function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  var picks = function(){
    $('#contains').replaceWith('<section class="recipes"><figure class="four columns">\
      <img src=" '+recipeArray[TL].image +'"id="outputs"/><figcaption>' + recipeArray[TL].name +
      '</figcaption></figure><figure class="four columns"><img src="'+ recipeArray[TR].image +
      '" id="outputs"/><figcaption>'+ recipeArray[TR].name +'</figcaption></figure></section>\
      <section class="recipes"><figure class="four columns"><img src=" '+recipeArray[BL].image +
      '"id="outputs"/><figcaption>' + recipeArray[BL].name +'</figcaption></figure><figure class="four columns"><img src="'+ recipeArray[BR].image +
      '" id="outputs"/><figcaption>'+ recipeArray[BR].name + '</figcaption></figure></section>')
  }

  var TL =randomize(0, recipeArray.length);
  var TR = randomize(0, recipeArray.length);
  var BL = randomize(0, recipeArray.length);
  var BR = randomize(0, recipeArray.length);
  picks();

})
