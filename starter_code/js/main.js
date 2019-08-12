/*-

- Create an array with the following values: "NYC", "SF", "LA", "ATX", "SYD"; use the array to add values to the ```<select>``` menu by using a ```for``` loop in JavaScript (don't update the HTML to do this!)(DONE)
- Use $.append() in your iteration on the drop-down menu (DONE)
- Use the ```$.change``` event handler to capture user actions (DONE)
- Get the value of user input using ```$.val()``` (DONE)
- Use the ```$.attr()``` function to update html classes (DONE)
- When the user changes the input of the drop-down, update the background image based on what they selected (USING BACKGROUND ID NOT BODY)
- Use ```if/else if/else ``` conditionals to control the flow of your application (DONE USING SWITCH STATEMENT INSTEAD)
- Display your pseudocode as Javascript comments (DONE)*/


//CAS' CODE BEGINS!!!!!!
// loads the document and make sure commands are not executed until load

$( document ).ready(function() {
    console.log( "document loaded" );

//variable containing array

let selectedOptions = ["NYC", "SF", "LA", "ATX", "SYD"];

//appends the value of the array back to city-type ID element

$.each(selectedOptions, function(key, value) {
     $('#city-type')
         .append($("<option></option>")
                    .attr("value",key)
                    .text(value));
                  });

// gets the value of the array from city type and assigns a variable of cityValue

  $('#city-type').on('change', function() {
      let cityValue = ( $(this).find(":selected").val() );
      console.log( $(this).find(":selected").val() );

//if statement with cityValue begins, uses numbers of the array instead of strings

//NEW YORK BEGINS
    switch (cityValue) {
      case ('0'):
        console.log("NY")
        $("#background").css('background-image','url("images/nyc.jpg")');
        break;
// NEW YORK ENDS

//SAN FRAN BEGINS
      case ('1'):
        console.log("SF")
        $("#background").css('background-image','url("images/sf.jpg")');
        break;
// SAN FRAN ENDS

// LA BEGINS
      case ('2'):
        console.log("LA")
        $("#background").css('background-image','url("images/la.jpg")');
        break;
// LA ENDS

// AUSTIN BEGINS
      case ('3'):
        console.log("ATX")
        $("#background").css('background-image','url("images/austin.jpg")');
        break;
// AUSTIN ENDS

//SYDNEY BEGINS
      case ('4'):
        console.log("SYD")
        $("#background").css('background-image','url("images/sydney.jpg")');
        break;
    }
  });
});
