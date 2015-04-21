var recipeArray = [];

function getRecipeJson(searchTerm) {

  // var Recipe = function(info){
  //    this.name = info,
  //    this.image = info.ImageURL
  //    this.
  // }

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
      var data =(data.Results);
                //console.log(data.length);
      for(i=0; i < data.length; i++) {
        recipeArray.push(data[i])
      }
    }
  });
}
var recipes = getRecipeJson('pizza');




