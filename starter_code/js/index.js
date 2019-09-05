// create array with each of the cities that can be selected
var cityArray = ["nyc", "sf", "la", "atx", "syd"]
//define option variable to be appended based on index 
var option = ''

// define index for each of the cities and add as an option through the entire array list.
for (var i=0; i < cityArray.length; i++) {
//add each city as an option for the <option> tag 
    option += '<option>' + cityArray[i] + '</option>'
}

//add the cityArray items to the empty 'option' variable
$("#city-type").append(option)

// if specific city is selected and change is made, run changeBackground function
$('#city-type').change(changeBackground)

function changeBackground() {
    //define 'city' which returns the option that is selected in the form
    const city = $('#city-type').val()
    // if option 'nyc' is selected, change the background image to nyc.jpg
        if (city === "nyc") {
            $('body').css('background-image', 'url(images/nyc.jpg')
    // if option 'sf' is selected, change background image to sf.jpg
        } else if (city === "sf") {
            $('body').css('background-image', 'url(images/sf.jpg') 
    // if input is la, change background image to la.jpg
        } else if (city === "la") {  
            $('body').css('background-image', 'url(images/la.jpg')
    // if option 'atx' is selected, change background image to austin.jpg
        } else if (city === "atx") { 
            $('body').css('background-image', 'url(images/austin.jpg')
    // if option 'syd' is selected, change background image to sydney.jpg
        } else if (city === "syd") {
            $('body').css('background-image', 'url(images/sydney.jpg') }

        

}
