//load HTML/CSS before jS
$(document).ready(function () { 
    // alert("is js linked??????");
    //display current day & time.
    // var newDate = new Date();
    // document.getElementById("dateTime").innerHTML = dateTime;
    $("#displayDate").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
    //Assign saveBtn click listener for user input and time stamp??
    $(".saveBtn").on("click", function () {
        //get nearby values.
        console.log(this);
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        //set items in local storage.
        localStorage.setItem(time, text);
    })
    //load any saved data from LocalStorage - do this for each hour created.
    $("#8  .description").val(localStorage.getItem("8"));
    $("#9  .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));
    function timetracker() {
        //get current number of hours.
        var currentTime = moment().hour();
        // loop over time blocks
        $(".time-block").each(function () {
            var idtime = parseInt($(this).attr("id"));
            console.log( idtime, dateTime)
            //check if we've moved past this time
            if (idtime < currentTime) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
                // $(".description").html("past");
            }
            else if (idtime === currentTime) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else { //(if idtime > currentTime)
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    timetracker();
});