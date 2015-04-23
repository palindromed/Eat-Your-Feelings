$(function () {
  var recipeArray= JSON.parse(window.localStorage.getItem('array'));

  var randomize = function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };

var interwebs = function(url){
  window.open(url, '_blank');
}

//'<a href="'+ recipeArray[BR].web +'"></a>'

  var picks = function(){
    $('#contains').replaceWith('<section class="recipes"><figure class="four columns">\
      <a href="'+ recipeArray[TL].web +'"><img src=" '+recipeArray[TL].image +'"id="outputs"/></a><figcaption>' + recipeArray[TL].name +
      '</figcaption></figure><figure class="four columns"><a href="'+ recipeArray[TR].web +'"><img src="'+ recipeArray[TR].image +
      '" id="outputs"/></a><figcaption>'+ recipeArray[TR].name +'</figcaption></figure></section>\
      <section class="recipes"><figure class="four columns"><a href="'+ recipeArray[BL].web +'"><img src=" '+recipeArray[BL].image +
      '"id="outputs"/></a><figcaption>' + recipeArray[BL].name +
      '</figcaption></figure><figure class="four columns"><a href="'+ recipeArray[BR].web +'"><img src="'+ recipeArray[BR].image +
      '" id="outputs"/></a><figcaption>'+ recipeArray[BR].name + '</figcaption></figure></section>')
  }

  var TL =randomize(0, recipeArray.length);
  var TR = randomize(0, recipeArray.length);
  var BL = randomize(0, recipeArray.length);
  var BR = randomize(0, recipeArray.length);
  picks();

})
