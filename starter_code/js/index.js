// ### Technical Requirements 

// - Call ```$.val()``` on inputs to get the string value of your user's input
// - Store user input in ```var city```
// - Use $.on(submit) or ```$.click``` to figure out when the user clicks the "submit" button
// - Create ```if / else if / else``` conditionals to control the flow of your application
// - Write at least six different lines of pseudocode and display them inline as JavaScript comments
// - Prevent a form submission using the ```event.preventDefault()``` function
// - Use the ```$.ready()``` handler to delay your code from executing until all DOM assets have been loaded
// - Get the first element from an attribute name using ```$.attr()```
// - Use the ```||``` operator in your conditionals to allow for multiple string values to execute ```if/else if``` statement code
// - If a user submits:

//   - "New York" or "New York City" or "NYC" make the background of the page nyc.jpg
//   - "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
//   - "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
//   - "Austin" or "ATX" make the background of the page austin.jpg
//   - "Sydney" or "SYD" make the background of the page sydney.jpg
// const newYork = ["New York", "New York City", "NYC"];
// const sanFrancisco = ["San Francisco", "SF", "Bay Area"];
// const losAngeles = ["Los Angeles", "LA", "LAX"];
// const austin = ["Austin", "ATX"];
// const sydney = ["Sydney", "SYD"];


function onReady() {

    const cityList = ["NYC", "SF", "LA", "ATX", "SYD"];
    
    cityList.forEach(function(item, index) {
        let node = document.createElement('option');
        let textNode = document.createTextNode(cityList[index]);
        node.appendChild(textNode);
        document.getElementById('city-type').appendChild(node);
    });
    function cityToCheck(event) {
        event.preventDefault();
        // $('#submit-btn').html('quote');
        let cityToTest = $("#city-type").val().toLowerCase();
        if (cityToTest == 'new york' || cityToTest == 'new york city' || cityToTest == 'nyc') {
            $('#city-image').css({'background': 'url(images/nyc.jpg) no-repeat', 'background-size': 'cover'});
        } 
        else if (cityToTest == 'san francisco' || cityToTest == 'sf' || cityToTest == 'bay area') {
            $('#city-image').css({'background': 'url(images/sf.jpg) no-repeat', 'background-size': 'cover'});
        }
        else if (cityToTest == 'los angeles' || cityToTest == 'la' || cityToTest == 'lax') {
            $('#city-image').css({'background': 'url(images/la.jpg) no-repeat', 'background-size': 'cover'});
        }
        else if (cityToTest == 'austin' || cityToTest == 'atx') {
            $('#city-image').css({'background': 'url(images/austin.jpg) no-repeat', 'background-size': 'cover'});
        }
        else if (cityToTest == 'sydney' || cityToTest == 'syd') {
            $('#city-image').css({'background': 'url(images/sydney.jpg) no-repeat', 'background-size': 'cover'});
        }
    }      
    $("#city-search").change(cityToCheck);
}
$('document').ready(onReady);