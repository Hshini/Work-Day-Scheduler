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
