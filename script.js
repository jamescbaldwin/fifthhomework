//load HTML/CSS before jS
$(document).ready(function () { 
    // alert("is js linked??????");
    //display current day & time.
    // var newDate = new Date();
    // document.getElementById("dateTime").innerHTML = dateTime;
    var dateTime = $("#displayDate").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
    console.log('dateTime:', dateTime);
    // parsedTime = parseInt(moment().hour);
    // console.log('parsedTime:', parsedTime);


    //Assign saveBtn click listener for user input and time stamp??
    $(".saveBtn").on("click", function () {
        //get nearby values.
        console.log(this);
        var text = $(this).siblings(".content").val();
        var time = $(this).parent().attr("id");
        //set items in local storage.
        localStorage.setItem(time, text);
    })
    //load any saved data from LocalStorage - do this for each hour created.
    $("#8  .content").val(localStorage.getItem("8"));
    $("#9  .content").val(localStorage.getItem("9"));
    $("#10 .content").val(localStorage.getItem("10"));
    $("#11 .content").val(localStorage.getItem("11"));
    $("#12 .content").val(localStorage.getItem("12"));
    $("#13 .content").val(localStorage.getItem("13"));
    $("#14 .content").val(localStorage.getItem("14"));
    $("#15 .content").val(localStorage.getItem("15"));
    $("#16 .content").val(localStorage.getItem("16"));
    $("#17 .content").val(localStorage.getItem("17"));

    function timeCondition() {
        //get current number of hours.
        var currentTime = moment().hour();
        // loop over time blocks
        $(".time-block").each(function () {
            var parsedId = parseInt($(this).attr("id"));
            console.log(parsedId, currentTime)

            //check if we've moved past this time
            if (parsedId < currentTime) {
                $(this).css('background-color', '#d3d3d3'); 
                $(".content").css('opacity', '40%');
                // $(".content").css('opacity', '20%');       
            } else if (parsedId === currentTime) {
                $(this).css('background-color', '#ff6961');
                // $(".content").css('opacity', '60%'); 
            } else {
                $(this).css('background-color', '#77dd77');            
                // $(".content").css('opacity', '100%'); 
            }
        })
    }
    timeCondition ();
});