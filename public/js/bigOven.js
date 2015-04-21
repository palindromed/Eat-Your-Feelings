$(document).ready(function() {

   var recipesArray =[];
       var renderImages = function(recipes) {
    recipes.forEach(function (image) {
      recipesArray.push(new Recipe(image.WebURL))
    });
 }

function getRecipeJson(searchTerm) {
        var apiKey = "dvxTzcHziZpKgfz9rxpuA9i3Qh10wNK3";
        var titleKeyword = '"'+ searchTerm +'"';
        var url = "http://api.bigoven.com/recipes?pg=1&rpp=25&title_kw="
                  + titleKeyword
                  + "&api_key="+apiKey;

         $.ajax({
            type: "GET",
            dataType: 'json',
            cache: false,
            url: url,
            success: function (data) {
                alert('success');
                console.log(data.Results);
                renderImages(data);


            }
        });
      }


    var renderImages = function(recipes) {
    recipes.forEach(function (image) {
      recipesArray.push(new Recipe(image.WebURL))
    });
 }


var Recipe = function(details){
   this.url = details.ImageURL;
   this.WebURL= details.WebURL;
}

getRecipeJson('pizza');



console.log(recipesArray);

  });
