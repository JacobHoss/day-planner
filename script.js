var now = moment().format("dddd, MMMM Do");
$('#currentDay').append(now);

$(document).ready(function() {
    
    var hour = new Date().getHours();

    $("#time1").val(localStorage.getItem("time1"));
    $("#time2").val(localStorage.getItem("time2"));
    $("#time3").val(localStorage.getItem("time3"));
    $("#time4").val(localStorage.getItem("time4"));
    $("#time5").val(localStorage.getItem("time5"));
    $("#time6").val(localStorage.getItem("time6"));
    $("#time7").val(localStorage.getItem("time7"));
    $("#time8").val(localStorage.getItem("time8"));
    $("#time9").val(localStorage.getItem("time9"));

$("i").click(function(){
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

if (hour < 9) {
    $("#time1").addClass("future");
    $("#time2").addClass("future");
    $("#time3").addClass("future");
    $("#time4").addClass("future");
    $("#time5").addClass("future");
    $("#time6").addClass("future");
    $("#time7").addClass("future");
    $("#time8").addClass("future");
    $("#time9").addClass("future");
}

if (hour > 17) {
    $("#time1").addClass("past");
    $("#time2").addClass("past");
    $("#time3").addClass("past");
    $("#time4").addClass("past");
    $("#time5").addClass("past");
    $("#time6").addClass("past");
    $("#time7").addClass("past");
    $("#time8").addClass("past");
    $("#time9").addClass("past");
}

if (hour === 17) {
    $("#time1").addClass("past");
    $("#time2").addClass("past");
    $("#time3").addClass("past");
    $("#time4").addClass("past");
    $("#time5").addClass("past");
    $("#time6").addClass("past");
    $("#time7").addClass("past");
    $("#time8").addClass("past");
    $("#time9").addClass("present");
}

if (hour === 16) {
    $("#time1").addClass("past");
    $("#time2").addClass("past");
    $("#time3").addClass("past");
    $("#time4").addClass("past");
    $("#time5").addClass("past");
    $("#time6").addClass("past");
    $("#time7").addClass("past");
    $("#time8").addClass("present");
    $("#time9").addClass("future");
}

if (hour === 15) {
    $("#time1").addClass("past");
    $("#time2").addClass("past");
    $("#time3").addClass("past");
    $("#time4").addClass("past");
    $("#time5").addClass("past");
    $("#time6").addClass("past");
    $("#time7").addClass("present");
    $("#time8").addClass("future");
    $("#time9").addClass("future");
}

if (hour === 14) {
    $("#time1").addClass("past");
    $("#time2").addClass("past");
    $("#time3").addClass("past");
    $("#time4").addClass("past");
    $("#time5").addClass("past");
    $("#time6").addClass("present");
    $("#time7").addClass("future");
    $("#time8").addClass("future");
    $("#time9").addClass("future");
}

if (hour === 13) {
    $("#time1").addClass("past");
    $("#time2").addClass("past");
    $("#time3").addClass("past");
    $("#time4").addClass("past");
    $("#time5").addClass("present");
    $("#time6").addClass("future");
    $("#time7").addClass("future");
    $("#time8").addClass("future");
    $("#time9").addClass("future");
}

if (hour === 12) {
    $("#time1").addClass("past");
    $("#time2").addClass("past");
    $("#time3").addClass("past");
    $("#time4").addClass("present");
    $("#time5").addClass("future");
    $("#time6").addClass("future");
    $("#time7").addClass("future");
    $("#time8").addClass("future");
    $("#time9").addClass("future");
}

if (hour === 11) {
    $("#time1").addClass("past");
    $("#time2").addClass("past");
    $("#time3").addClass("present");
    $("#time4").addClass("future");
    $("#time5").addClass("future");
    $("#time6").addClass("future");
    $("#time7").addClass("future");
    $("#time8").addClass("future");
    $("#time9").addClass("future");
}

if (hour === 10) {
    $("#time1").addClass("past");
    $("#time2").addClass("present");
    $("#time3").addClass("future");
    $("#time4").addClass("future");
    $("#time5").addClass("future");
    $("#time6").addClass("future");
    $("#time7").addClass("future");
    $("#time8").addClass("future");
    $("#time9").addClass("future");
}

if (hour === 9) {
    $("#time1").addClass("present");
    $("#time2").addClass("future");
    $("#time3").addClass("future");
    $("#time4").addClass("future");
    $("#time5").addClass("future");
    $("#time6").addClass("future");
    $("#time7").addClass("future");
    $("#time8").addClass("future");
    $("#time9").addClass("future");
}



});