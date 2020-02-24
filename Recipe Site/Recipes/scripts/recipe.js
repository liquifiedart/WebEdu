window.onload = function() {
    LoadRecipe();
};

function LoadRecipe(){
    var xhttp = new XMLHttpRequest();
    xhttp.onerror = function(){
        alert(this.responseText);
    };

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200 ){

            try	
            {
                var json = JSON.parse(this.responseText);
                document.getElementById("descriptionPId").innerHTML = json.description;

                LoadIngredients(json.ingredients);
                LoadDirections(json.directions);
                LoadPhotos(json.photoUrls);
            }
            catch(e)
            {
                console.log(e);
            }

        }
    };

    xhttp.on
    //You can't make AJAX requests (by default) from a file:/// URL scheme. Use an HTTP server to serve your files
    // file needs to be on a webserver
    xhttp.open("GET", "./description.json", true);
    xhttp.send();
}
function LoadIngredients(ingredients){
    var listItemsHtml = "";
    ingredients.forEach(element => {
        var itemJson = "<li>";
        itemJson += element;
        itemJson += "</li>"
        console.log("read: " + itemJson);

        listItemsHtml += itemJson;
    });                    
    document.getElementById("ingredientsULId").innerHTML = listItemsHtml;	
}

function LoadDirections(directions){
    var listItemsHtml = "";
    directions.forEach(element => {
        var itemJson = "<li>";
        itemJson += element;
        itemJson += "</li>"
        console.log("read: " + itemJson);

        listItemsHtml += itemJson;
    });                    
    document.getElementById("directionsOLId").innerHTML = listItemsHtml;	
}

function LoadPhotos(photoUrls){
    var listItemsHtml = "";
    photoUrls.forEach(element => {
        var itemJson = "<li>";
        itemJson += "<img width=\"50\" height=\"50\" src=\"";
        itemJson += element;
        itemJson += "\"></img>";
        itemJson += "</li>"
        console.log("read: " + itemJson);

        listItemsHtml += itemJson;
    });                    
    document.getElementById("photosULId").innerHTML = listItemsHtml;	
}