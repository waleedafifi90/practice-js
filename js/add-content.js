'user-strict';

var today = new Date();
var hourNow = today.getHours();
// var hourNow = hour;
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


function userChoiceAndQuantity() {
  var userOrder = prompt('Enter between house and hotel only?');
  var item = '';

  while( userOrder !== 'house' && userOrder !== 'hotel') {
    userOrder = prompt('Enter between house and hotel only?');
  }

  var itemNumber = prompt('Enter the number?');

  for (i = 0; i < itemNumber; i++) {
    if (userOrder === 'house') {
      item = item +'<img src="images/house.png" />';
    } else if (userOrder === 'house') {
      item = item +'<img src="images/hotel.png" />';
    }
  }
  return item;

}