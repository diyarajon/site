var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    for(var i = 0; i < myObj.entry.length;i++)
    {

    var innerDiv = document.createElement('div');
    innerDiv.className = `block`;
    innerDiv.id = `block${myObj.entry[i].name}`;
    document.body.appendChild(innerDiv);

    var tagName = document.createElement("h1");
    var textName = document.createTextNode(myObj.entry[i].name);
    tagName.appendChild(textName); 
    var elementName = document.getElementById(`block${myObj.entry[i].name}`);
    elementName.appendChild(tagName);


    // Create anchor element. 
    var a = document.createElement('a');  
                  
    // Create the text node for anchor element. 
    var link = document.createTextNode(`${myObj.entry[i].name}'s email`); 
      
    // Append the text node to anchor element. 
    a.appendChild(link);  
      
    // Set the title. 
    a.title = `${myObj.entry[i].name}'s email`;  
      
    // Set the href property. 
    a.href = myObj.entry[i].email;  
      
    // Append the anchor element to the body. 
    innerDiv.appendChild(a);  


    var cityTag = document.createElement("p");
    var cityText = document.createTextNode(`City: ${myObj.entry[i].whichCityDoYouLiveIn} `);
    cityTag.appendChild(cityText); 
    var cityElement = document.getElementById(`block${myObj.entry[i].name}`);
    cityElement.appendChild(cityTag);

    var tag = document.createElement("p");
    var text = document.createTextNode(`Needs: ${myObj.entry[i].itemYouNeed}`);
    tag.appendChild(text); 
    var element = document.getElementById(`block${myObj.entry[i].name}`);
    element.appendChild(tag);


    var tag = document.createElement("p");
    var text = document.createTextNode(`Can Give: <br />${myObj.entry[i].itemYouAreWillingToGive}`);
    tag.appendChild(text); 
    var element = document.getElementById(`block${myObj.entry[i].name}`);
    element.appendChild(tag);

      }
    
  }
};