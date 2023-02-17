
//Dependencies
var past = $('.row time-block past');
var present= $('.row time-block present');
var future= $('.row time-block future');
var save= $('.saveBtn');
var currentDay= $('currentDay');  

//Current Day
currentDay = dayjs();
  $('#currentDay').text(currentDay.format('MMM D, YYYY'));
