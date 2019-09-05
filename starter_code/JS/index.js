//Use an array to append to the array in the html
//Get a users input 
// Save it to a variable 
// if userval==="NYC" or "New York City" then use the class to change picture to NYC
// else if Same for San Francisco, LA, Austin and Syn. 


// $("form").submit(cities)




cities= ["NYC", "San Francisco", "Sydney", "Austin", "LA"]
$(document).ready(function(){
    for (let index=0; index< cities.length; index=index+1){
    $("#city-type").append("<option>" + cities[index]+ "</option>" )
    console.log(cities)};
    $("form").change(getUserInput)

})


function getUserInput(event){
    event.preventDefault()
    userValue= $("#city-type").val()
    console.log(userValue);

    if (userValue === "NYC" || userValue === "New York City" || userValue === "New York"){
        $('body').attr('class','nyc') }
    else if (userValue ==="Austin" || userValue === "Austin"|| userValue === "ATX"){
        $('body').attr('class','austin') }
    else if (userValue ==="LA" || userValue === "Los Angeles"){
        $('body').attr('class','la') }
    else if (userValue ==="Sydney" || userValue === "Sydney"){
        $('body').attr('class','sydney')}
    else if (userValue ==="sf" || userValue === "San Francisco" || userValue === "San Fran" || userValue === "SF"){
        $('body').attr('class','sf') }
    }