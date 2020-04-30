'user-strict';

var today = new Date();
// var hourNow = today.getHours();
var hourNow = hour;
var greeting;

if (hourNow > 18 && hourNow <= 23) {
    greeting = 'Good evening, Class!';
  } else if (hourNow > 12) {
    greeting = 'Good afternoon, Class!';
  } else if (hourNow >= 0) {
    greeting = 'Good morning!';
  } else {
    greeting = 'Something went wrong!';
  }
document.write('<h3>'+greeting+'</h3>');
