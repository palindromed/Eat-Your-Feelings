$(function () {
  var recipeArray= JSON.parse(window.localStorage.getItem('array'));
  var TL,BR,BL,BR;
  var sortFunction = function(min, max) {
    recipeArray.sort(function() {
      return Math.floor(Math.random() * (max - min)) + min;
    })
    TL = recipeArray[0];
    TR = recipeArray[1];
    BL = recipeArray[2];
    BR = recipeArray[3];
  };

  var picks = function(){
    $('#contains').replaceWith('<section class="recipes"><figure class="four columns">\
      <a href="'+ TL.web +'"><img src=" '+TL.image +'"id="outputs"/></a><figcaption>' + TL.name +
      '</figcaption></figure><figure class="four columns"><a href="'+ TR.web +'"><img src="'+ TR.image +
      '" id="outputs"/></a><figcaption>'+ TR.name +'</figcaption></figure></section>\
      <section class="recipes"><figure class="four columns"><a href="'+ BL.web +'"><img src=" '+BL.image +
      '"id="outputs"/></a><figcaption>' + BL.name +
      '</figcaption></figure><figure class="four columns"><a href="'+ BR.web +'"><img src="'+ BR.image +
      '" id="outputs"/></a><figcaption>'+ BR.name + '</figcaption></figure></section>')
  }
sortFunction(0, recipeArray.length);
picks();

})
