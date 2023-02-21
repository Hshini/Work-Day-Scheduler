//Dependencies
var timeBlock= $('.time-block');
var present= $('.present');
var future= $('.future');
var past= $('.past');
var description= $('.description');
var save= $('.saveBtn');
var currentDay= $('currentDay');  

//Current Day
currentDay = dayjs();
  $('#currentDay').text(currentDay.format('MMM D, YYYY'));
$(document).ready(function () {
    // Save Button click listener 
    $(".saveBtn").on("click", function () {
        
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
    })
   // Get items from localStorage 
    $("#hour-8 .description").val(localStorage.getItem("hour-8"));
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
})
