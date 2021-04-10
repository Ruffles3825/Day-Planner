var timeDisplayEl = $('#currentDay')

//Time Display
function displayTime() {
    var rightNow = moment().format('LLLL');
    timeDisplayEl.text(rightNow);
  }
setInterval(displayTime, 1000);

//Establishing past, present, future
var currentHour = moment().hours();
var timeBlocks = $('time');

timeBlocks.each(function() {
 var hour = $(this).attr("datetime")
  //console.log($(this).attr("datetime"))
  if (hour == currentHour) { 
    $(this).siblings('textarea').addClass('present')
  }
  else if (hour > currentHour) {
    $(this).siblings('textarea').addClass('future')
  }
  else { 
    $(this).siblings('textarea').addClass('past')
  }
})





//Saving events 
$('.saveBtn').on("click", function() {
  var userInput = $(this).siblings('textarea').val()
  localStorage.setItem($(this).siblings('time').attr('datetime'), userInput) 
})
$('textarea').each(function() {
  $(this).val(localStorage.getItem($(this).siblings('time').attr('datetime')))
})

