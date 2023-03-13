//Dependencies
var timeBlock = $('.time-block');

var save = $('.saveBtn');
var currentDay = $('currentDay');

//Current Day
currentDay = dayjs();
$(currentDay).text(currentDay.format('MMM D, YYYY'));
$(document).ready(function () {
  
  $(save).on("click", function () {

    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // Save text in local storage
    localStorage.setItem(time, text);
  })

  function time() {
    var currentHour = dayjs().hour();
    $(timeBlock).each(function () {
      var blockHour = parseInt($(this).attr("id").split("hour")[1]);

      if (blockHour < currentHour) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      }
      else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      }
      else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    })
  }

  // Get items from localStorage 
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));

  time();
})
