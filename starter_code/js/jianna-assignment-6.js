/* 

1. create an array of cities; add each item in the array (options) to dropdown menu by using loop
2. when a user clicks on one of the items in the dropdown, get value of that selection
3. when the select value changes, change background image (add class name to <body>)
   
*/

const cities = ['NYC', 'SF', 'LA', 'ATX', 'SYD']
var i;
for (i = 0; i < cities.length; i++) {
    const option = '<option id=cities[i]>' + cities[i] + '</option>';
    $('#city-type').append(option);
}

function onCityChange() {

    var selection = $(this);
    city = selection.val();
    
    if (city == 'NYC') {
        $('body').attr('class', 'nyc');
    } else if (city == 'SF') {
        $('body').attr('class', 'sf');
    } else if (city == 'LA') {
        $('body').attr('class', 'la');
    } else if (city == 'ATX') {
        $('body').attr('class', 'austin');
    } else if (city == 'SYD') {
        $('body').attr('class', 'sydney');
    } else {
        alert("Choose your city!");
    }

}

$('select').change(onCityChange);


