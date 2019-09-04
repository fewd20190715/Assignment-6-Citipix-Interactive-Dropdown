function onReady() {
     //create city options in a drop down-menu
     //create a list of all the values in the drop-down
     let cities = ['NYC', 'SF', 'LA', 'ATX', 'SYD']
     //for all the values ---> add to the option tag and values attribute in the html
     function citiesDropDown(item) {
          $('#city-type').append('<option value=' + item + '>' + item + ' </option>');
     }
     cities.forEach(citiesDropDown);
     //when the user selects an option
     //record what that value is 
     // if NYC add background NYC ...
     $('#city-type').on('change', function() {
          var selectedCity = $('#city-type').val();
          if ( (selectedCity) === 'NYC') {
               $('body').attr('class', 'nyc');
          }
          else if ( selectedCity === 'SF') {
               $('body').attr('class', 'sf');
          }
          else if ( selectedCity === 'LA') {
               $('body').attr('class', 'la');
          }
          else if ( selectedCity === 'ATX') {
               $('body').attr('class', 'austin');
          }
          else if ( selectedCity === 'SYD') {
               $('body').attr('class', 'sydney');
          }
          else {
               $('body').css({"background-image": "url(images/citipix_skyline.jpg)", "background-size": "cover"}); 
          }
          });
}
$('document').ready(onReady);