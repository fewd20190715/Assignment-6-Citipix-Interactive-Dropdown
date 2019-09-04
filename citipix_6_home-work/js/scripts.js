function onReady() {
     //create city options in a drop down-menu
     //create a list of all the values in the drop-down
     let cities = ['NYC', 'SF', 'LA', 'ATX', 'SYD']
     //for all the values ---> add to the option tag and values attribute in the html
     function citiesDropDown(item) {
          $('#city-type').append('<option value=' + item + '>' + item + ' </option>');
     }
     cities.forEach(citiesDropDown);
     $('#city-type').css({});
     //when the user selects an option
     //record what that value is 
     // if NYC add background NYC ...
     $('#city-type').on('change', function() {
          let selectedCity = $('#city-type').val();
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
          location.reload()
          }
          });
     
     $('#city-type').css({'appearance': 'none', '-webkit-appearance': 'none', '-moz-appearance': 'none',  'background': 'transparent', 'background': 'url(https://img.icons8.com/metro/26/000000/long-arrow-down.png) no-repeat right #ddd'})
     
}
$('document').ready(onReady);