$(document).ready(function () {
    ifFunction = function () {
        var d = new Date();
        var hour = d.getHours();
        console.log(hour);
        console.log(d);
        if (hour < 9) {
            $("#time1 , #time2 , #time3 , #time4 , #time5 , #time6 , #time7 , #time8 , #time9").addClass("future");
        }
        else if (hour > 17) {
            $("#time1 , #time2 , #time3 , #time4 , #time5 , #time6 , #time7 , #time8 , #time9").addClass("past");
        }
        else if (hour === 17) {
            $("#time1 , #time2 , #time3 , #time4 , #time5 , #time6 , #time7 , #time8").addClass("past");
            $("#time9").addClass("present");
        }
        else if (hour === 16) {
            $("#time1 , #time2 , #time3 , #time4 , #time5 , #time6 , #time7").addClass("past");
            $("#time8").addClass("present");
            $("#time9").addClass("future");
        }
        else if (hour === 15) {
            $("#time1 , #time2 , #time3 , #time4 , #time5 , #time6").addClass("past");
            $("#time7").addClass("present");
            $("#time8 , #time9").addClass("future");
        }
        else if (hour === 14) {
            $("#time1 , #time2 , #time3 , #time4 , #time5").addClass("past");
            $("#time6").addClass("present");
            $("#time7 , #time8 , #time9").addClass("future");
        }
        else if (hour === 13) {
            $("#time1 , #time2 , #time3 , #time4").addClass("past");
            $("#time5").addClass("present");
            $("#time6 , #time7 , #time8 , #time9").addClass("future");
        }
        else if (hour === 12) {
            $("#time1 , #time2 , #time3").addClass("past");
            $("#time4").addClass("present");
            $("#time5 , #time6 , #time7 , #time8 , #time9").addClass("future");
        }
        else if (hour === 11) {
            $("#time1 , #time2").addClass("past");
            $("#time3").addClass("present");
            $("#time4 , #time5 , #time6 , #time7 , #time8 , #time9").addClass("future");
        }
        else if (hour === 10) {
            $("#time1").addClass("past");
            $("#time2").addClass("present");
            $("#time3 , #time4 , #time5 , #time6 , #time7 , #time8 , #time9").addClass("future");
        }
        else if (hour === 9) {
            $("#time1").addClass("present");
            $("#time2 , #time3 , #time4 , #time5 , #time6 , #time7 , #time8 , #time9").addClass("future");
        }
    }

    update = function () {
        var currentDay = $("#currentDay")
        var date = moment(new Date())
        currentDay.html(date.format("dddd, MMMM Do"));
        ifFunction();
    }
    update();
    setInterval(update, 1000);

    $("#time1").val(localStorage.getItem("time1"));
    $("#time2").val(localStorage.getItem("time2"));
    $("#time3").val(localStorage.getItem("time3"));
    $("#time4").val(localStorage.getItem("time4"));
    $("#time5").val(localStorage.getItem("time5"));
    $("#time6").val(localStorage.getItem("time6"));
    $("#time7").val(localStorage.getItem("time7"));
    $("#time8").val(localStorage.getItem("time8"));
    $("#time9").val(localStorage.getItem("time9"));

    $("i").click(function () {
        localStorage.setItem("time1", $("#time1").val());
        localStorage.setItem("time2", $("#time2").val());
        localStorage.setItem("time3", $("#time3").val());
        localStorage.setItem("time4", $("#time4").val());
        localStorage.setItem("time5", $("#time5").val());
        localStorage.setItem("time6", $("#time6").val());
        localStorage.setItem("time7", $("#time7").val());
        localStorage.setItem("time8", $("#time8").val());
        localStorage.setItem("time9", $("#time9").val());
    });
});