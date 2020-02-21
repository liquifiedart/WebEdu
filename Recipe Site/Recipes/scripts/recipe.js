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
                recipes = json.recipeList.recipes;


                var listItemsHtml = "";
                recipes.forEach(element => {

                    var itemJson = LoadListItem(element);
                    console.log("read: " + itemJson);

                    listItemsHtml += itemJson;
                });
                
                //document.getElementById("recipeUnorderedList").innerHTML = listItemsHtml;	
                //document.getElementById("page2").style.display = "block"

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

function LoadListItem(element){
    /*
        element: { 
            "description" : "super cool magic cake",
            "ingredients" : ["1 egg", "1 cup of sugar", "1/2 cup of milk", "1 stick butter"],
            "directions" : ["Mix sugar eggs and butter", "Add sugar", "Stir in milk", "Wait a minute"]
        }             
    */
    if( element == null)
        return null;


    var result = "<li>";

    // header
    
    result += "<a href=\"" + encodeURI(element.linkUrl) + "\">"
    result += "<h3>";
    result += element.name;
    result += "</h3><</a>";

    // cover image
    result += "<img width=\"100\" height=\"100\" class=\"recipeListItemImage\" src=\"";
    result += encodeURI(element.coverUrl) + "\" alt=\"" + element.name + "\">";
    result += "</img>";

    // summary
    result += "<p>" + element.summary + "<p>";

    result += "</li>"
    return result;
}