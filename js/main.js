var url = "http://teamhortus.herokuapp.com/data";

$(document).ready(function () {
    console.log("document loaded");


    $("button").click(function () {
        $.ajax({
            url: "http://teamhortus.herokuapp.com/data", type: "GET", dataType: "jsonp", async: false, success: function (result) {
                $("viewLed1").html(result);
            }
        });
    });

    /* $(document).click(function (e) {
         $.ajax({
             type: "GET",
             dataType: "jsonp",
             url: "http://teamhortus.herokuapp.com/data",
             success: function (data) {
                 alert(data);
                 $("#viewLed1").html(data[0].led1);
                 $("#viewLed2").html(data.led2);
             }
         });
 
     });*/
});

$(window).on("load", function () {
    console.log("window loaded");

    /* $.get("http://teamhortus.herokuapp.com/data", function (data) {
         console.log("second complete");
     }); */

    /*var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://teamhortus.herokuapp.com/data", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            // JSON.parse does not evaluate the attacker's scripts.
            console.log(xhr.responseText);
        }
    }
    xhr.send();*/

    /*Promise.resolve()
        .then(function () {
            return $.ajax({
                type: "GET",
                dataType: "jsonp",
                url: "http://teamhortus.herokuapp.com/data",
                success: function (data) {
                    return data;
                }
            });
        })
        .then(function (data) {
            console.log("data");
            console.log(data[0]);

            $("#viewLed2").html(data[0].led1);
            $("#viewLed2").html(data[0].led2);
            $("#viewLed3").html(data.led3);
            $("#viewFadeUpTime").html(data.fadeUpTime);
            $("#viewFadeUpDuration").html(data.fadeUpDuration);
            $("#viewFadeDownTime").html(data.fadeDownTime);
            $("#viewFadeDownDuration").html(data.fadeDownDuration);
        })
        .catch(function (err) {
            console.log("error = " + err);
        }) */

    /* $.ajax({
         type: 'GET',
         url: url,
         async: false,
         beforeSend: function (xhr) {
             if (xhr && xhr.overrideMimeType) {
                 xhr.overrideMimeType('application/json;charset=utf-8');
             }
         },
         dataType: 'json',
         success: function (data) {
             //Do stuff with the JSON data
             console.log("hello data");
         }
     }); */

    $.ajax({
        type: 'GET',
        url: 'http://teamhortus.herokuapp.com/data',
        data: { get_param: 'value' },
        dataType: 'json',
        success: function (data) {
            console.log('Here our data');
        }
    });

    $.ajax({
        type: "GET",
        dataType: "jsonp",
        url: "http://teamhortus.herokuapp.com/data",
        success: function (data) {
            console.log('Get Json');
            console.log(data);
            console.log(data[0]);

            $("#viewLed2").html(data[0].led1);
            $("#viewLed2").html(data[0].led2);
            $("#viewLed3").html(data.led3);
            $("#viewFadeUpTime").html(data.fadeUpTime);
            $("#viewFadeUpDuration").html(data.fadeUpDuration);
            $("#viewFadeDownTime").html(data.fadeDownTime);
            $("#viewFadeDownDuration").html(data.fadeDownDuration);
        }
    });




    // Perform other work here ...

    // Set another completion function for the request above

});

