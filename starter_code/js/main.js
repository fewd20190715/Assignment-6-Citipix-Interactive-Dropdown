$(document).ready(function () {

    const cityArr = ["NYC", "SF", "LA", "ATX", "SYD"]

    // append cities to drop down list
    cityArr.forEach(function (element, index) {

        $("select").append("<option>" + cityArr[index] + "</option>")
    })


    // return the city selected
    function getCity() {

        if ($("#city-type").val() == 'Select a city') {

            let default_img = 'citipix_skyline'
            return default_img

        } else {

            return $("#city-type").val().toLowerCase()
        }

    }


    // on select dropdown update css file path
    function cityChange() {

        let citySelected = getCity()

        let cssPathChange = `url(images/${citySelected}.jpg)`

        console.log(cssPathChange)

        //update css
        $("body").css("background", cssPathChange)

    }

    $('form').change(cityChange)

})