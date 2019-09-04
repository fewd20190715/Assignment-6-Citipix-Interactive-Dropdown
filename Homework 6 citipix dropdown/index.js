
//wait to run until it is ready
$(document).ready(function(){

    var cities = ["NYC", "SF","LA", "ATX", "SYD"]; 
    
    console.log(cities);
    console.log(cities[0]);
    
    var numberOfCities = cities.length; 
    
    for (counter = 0; counter < cities.length; counter++){ 
        $("select").append("<option>"+cities[counter]+"</option>");
        $("body").attr('background-image', 'url(images/citipix_skyline.jpg)');
        $("#city-type").change(mainFunction);
    
        function mainFunction(){
            var city = cityType();
            event.preventDefault();
            changeBackground(city);
            }
    
        function cityType(){
            return $("#city-type").val();
            }	
            
            // changing background based on city choice
        function changeBackground(city){ 
            
          //if user selects "New York" or  "NYC"  or "New York City" change the background image of the page to nyc.jpg
        if ( city == "New York" || city == "New York City" || city == "NYC" ){
             console.log("city is either New York or New York City or NYC")
             $("body").attr("class", "nyc");
            }
                
                // if user selects "San Francisco" or "SF" or "Bay Area" change the background image of the page  to sf.jpg
    
         else if ( city == "San Francisco" || city == "SF" || city == "Bay Area" ){
             console.log("city is either San Francisco or SF or Bay Area")
             $("body").attr("class", "sf");
             }
                // if user selects "Los Angeles" or "LA" or "LAX" change the background image of the page  to la.jpg
    
        else if ( city == "Los Angeles" || city == "LA" || city == "LAX" ){
             console.log("city is either Los Angeles or LA or LAX")
            $("body").attr("class", "la");
              }
                 // if user selects "Austin" or "ATX" change the background  image of the page  to austin.jpg
    
         else if ( city == "Austin" || city == "ATX" ){
            console.log("city is either Austing or ATX")
            $("body").attr("class", "austin");
             }
    
                 // if user selects "Sydney" or "SYD" change the background image of the page to sydney.jpg
    
         else if( city == "Sydney" || city == "SYD" ){
             console.log("city is either Sydney or SYD")
             $("body").attr("class", "sydney");
             }
            }
    
    }
    
    });
    
    