// Have user select "NYC", "SF", "LA", "ATX", "SYD from dropdown
// Have background change to corresponding city image
    // "NYC" = background of the page nyc.jpg
    //"SF"  = background of the page sf.jpg
    //"LA" = background of the page la.jpg
    //ATX" = background of the page austin.jpg
    //"SYD" = background of the page sydney.jpg




function onReadyFunction() {
     /*prevent form submission*/
    function onSelect(event) {
   
     var city = $('NYC','SF','LA','ATX','SYD').val();
        
     if (city === 'NYC') {
          $('.container').css('background-image', 'url("images/nyc.jpg")');
     }

     else if (city === 'SF') {
          $('.container').css('background-image', 'url("images/sf.jpg")');
     }

     else if (city === 'LA') {
          $('.container').css('background-image', 'url("images/la.jpg")');
     }

     else if (city === 'ATX') {
       $('.container').css('background-image', 'url("images/austin.jpg")');
     }

     else if (city === 'SYD') {
          $('.container').css('background-image', 'url("images/sydney.jpg")');
     } 

    }

    $('#city-type').change(onSelect);
   
};



var cities = new Array
('NYC','SF','LA','ATX','SYD');

$(document).ready(function() {
     for (i=0;i<cities.length;i++) {
          $('#city-type').append('<option>'+ cities[i]+'</option')
     }
});
