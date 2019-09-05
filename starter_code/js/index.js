let selectedOptions = ["NYC", "SF", "LA", "ATX", "SYD"];

selectedOptions.forEach(function(value) {
    $('#city-type')
        .append("<option>" + value+ "</option>")
                 });

// gets the value of the array from city type and assigns a variable of cityValue

 $('#city-type').on('change', function() {
     let cityValue = ( $(this).find(":selected").val() );
     console.log( $(this).find(":selected").val() );

       var city = $('#city-type').val();
       console.log(city);
        if (city === "New York City" || city === "NYC" || city === "New York" || city === "new york"){
          console.log(city);

          $("body").css("background-image","url('images/nyc.jpg')");
        } else if (city === "austin" || city === "Austin" || city === "ATX"){
          $("body").css("background-image","url('images/austin.jpg')")
        } else if (city === "LA" || city === "Los Angeles" || city === "LA"){
          $("body").css("background-image","url('images/la.jpg')")
        } else if (city === "SF" || city === "san francisco" || city === "San Francisco"){
          $("body").css("background-image","url('images/sf.jpg')")
        }else if (city === "sydney" || city === "Sydney" || city === "SYD"){
          $("body").css("background-image","url('images/sydney.jpg')")
        }
       var city = $('#city-type').val('');
  })