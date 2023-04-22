//code below allow the user to type only numbers on quantity field on the Order Page
function FilterInput(event) {
  var keyCode = ('which' in event) ? event.which : event.keyCode;

  isNotWanted = (keyCode == 69 || keyCode == 101);
  return !isNotWanted;
};

function handlePaste(e) {
  var clipboardData, pastedData;

  clipboardData = e.clipboardData || window.clipboardData;
  pastedData = clipboardData.getData('Text').toUpperCase();

  if (pastedData.indexOf('E') > -1) {
    e.stopPropagation();
    e.preventDefault();
  }
};

//the code below will style the qtty field on the Order page
$(document).ready(function () {
  $('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
});

//slide the hotel images by clicking on arrows. Hotel 1 on hotels page
var slide_img = document.querySelector('.slider-img');
var images = ['hotel1.1.jpg', 'hotel1.2.jpg', 'hotel1.3.jpg'];
var i = 0;

function prev() {
  if (i <= 0) i = images.length;
  i--;
  return setImg();
}

function next() {
  if (i >= images.length - 1) i = -1;
  i++;
  return setImg();
}

function setImg() {
  return slide_img.setAttribute('src', 'images/' + images[i]);
}

//slide the hotel  images by clicking on arrows. Hotel 2 on hotels page
var slide_img2 = document.querySelector('.slider-img2');
var images2 = ['hotel2.1.jpg', 'hotel2.2.jpg', 'hotel2.3.jpg'];
var x = 0;

function prev2() {
  if (x <= 0) x = images2.length;
  x--;
  return setImg2();
}

function next2() {
  if (x >= images2.length - 1) x = -1;
  x++;
  return setImg2();
}

function setImg2() {
  return slide_img2.setAttribute('src', 'images/' + images2[x]);
}


//slide the hotel images by clicking on arrows. Hotel 3 on hotels page
var slide_img3 = document.querySelector('.slider-img3');
var images3 = ['hotel3.1.jpg', 'hotel3.2.jpg', 'hotel3.3.jpg'];
var y = 0;

function prev3() {
  if (y <= 0) y = images3.length;
  y--;
  return setImg3();
}

function next3() {
  if (y >= images3.length - 1) y = -1;
  y++;
  return setImg3();
}

function setImg3() {
  return slide_img3.setAttribute('src', 'images/' + images3[y]);
}

//toggle between hiding and showing more restaurant categories on restaurant page
function myFunction() {
  var x = document.getElementById("showhideoptions");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

//slide the restaurant images by clicking on arrows. 1st Restaurant on hotels page
var rest_img = document.querySelector('.rest-img');
var images4 = ['restaurant1.1.jpg', 'restaurant1.2.jpg', 'restaurant1.3.jpg'];
var z = 0;

function prev4() {
  if (z <= 0) z = images4.length;
  z--;
  return setImg4();
}

function next4() {
  if (z >= images4.length - 1) z = -1;
  z++;
  return setImg4();
}

function setImg4() {
  return rest_img.setAttribute('src', 'images/' + images4[z]);
}

//slide the restaurant images by clicking on arrows. 2nd Restaurant on hotels page
var rest_img2 = document.querySelector('.rest-img2');
var images5 = ['restaurant2.1.jpg', 'restaurant2.2.jpg', 'restaurant2.3.jpg'];
var a = 0;

function prev5() {
  if (a <= 0) a = images5.length;
  a--;
  return setImg5();
}

function next5() {
  if (a >= images5.length - 1) a = -1;
  a++;
  return setImg5();
}

function setImg5() {
  return rest_img2.setAttribute('src', 'images/' + images5[a]);
}

//slide the restaurant images by clicking on arrows. 3rd Restaurant on hotels page
var rest_img3 = document.querySelector('.rest-img3');
var images6 = ['restaurant3.1.jpg', 'restaurant3.2.jpg', 'restaurant3.3.jpg'];
var b = 0;

function prev6() {
  if (b <= 0) b = images6.length;
  b--;
  return setImg6();
}

function next6() {
  if (b >= images6.length - 1) b = -1;
  b++;
  return setImg6();
}

function setImg6() {
  return rest_img3.setAttribute('src', 'images/' + images6[b]);
}

/*------------------------------------Script for Flights page-----------------------------------------*/

$(document).ready(function () {
  $('#flight-form').submit(function (event) {
    event.preventDefault(); // prevent the form's default submit behavior

    // Get the input data in the form
    var departure = $('#departure').val();
    var destination = $('#flightdest').val();
    var departdate = $('#departdate').val();
    var returndate = $('#returndate').val();

    // HTML code for constructing search results
    var resultHTML = '<h2>LA1024&nbsp;&nbsp;Lufthansa Airline</h2>';
    resultHTML += '<p>From: ' + departure + ' to ' + destination + '</p>';
    resultHTML += '<p>Departure Date: ' + departdate + '&nbsp;&nbsp;Return Date: ' + returndate + '</p>';
    resultHTML += '<p>Price: $599</p>';
    resultHTML += '<input type="submit" class="buy-btn" value="Buy">';

    resultHTML += '<h2>DA2048&nbsp;&nbsp;Dublin Airline</h2>';
    resultHTML += '<p>From: ' + departure + ' to ' + destination + '</p>';
    resultHTML += '<p>Departure Date: ' + departdate + '&nbsp;&nbsp;Return Date: ' + returndate + '</p>';
    resultHTML += '<p>Price: $699</p>';
    resultHTML += '<input type="submit" class="buy-btn" value="Buy">';

    resultHTML += '<h2>TA1280&nbsp;&nbsp;Turkish Airline</h2>';
    resultHTML += '<p>From: ' + departure + ' to ' + destination + '</p>';
    resultHTML += '<p>Departure Date: ' + departdate + '&nbsp;&nbsp;Return Date: ' + returndate + '</p>';
    resultHTML += '<p>Price: $899</p>';
    resultHTML += '<input type="submit" class="buy-btn" value="Buy">';

    // Create a popup element and set its content
    var popup = $('<div id="ticket-buy"></div>');
    popup.html(resultHTML);

    // Add the popup element to the body
    $('body').append(popup);

    // Center popup element
    popup.css({
      'position': 'fixed',
      'top': '50%',
      'left': '50%',
      'transform': 'translate(-50%, -50%)',
      'background-color': '#fff',
      'padding': '20px',
      'border-radius': '5px',
      'box-shadow': '0 0 10px rgba(0, 0, 0, 0.3)',
      'z-index': '9999'
    });

    $('#ticket-buy').children().css({
      'margin': '7px'
    });

    $('.buy-btn').css({
      'background-color': '#333',
      'color': '#fff',
      'padding': '0.5rem 1rem',
      'border': 'none',
      'border-radius': '5px',
      'cursor': 'pointer'
    });

    $('.buy-btn').click(function () {
      popup.remove();
    });

  });

});

/*------------------------------------Script for Offer page-----------------------------------------*/

// Script for email subscribtion Offer Page
function validateForm() {
  var email = $("#email").val();
  if (email == "") {
    alert("Email must be filled out");
    return false;
  }
  else {
    alert("Thank you for subscribing!");
    return true;
  }
}

//	Script to view pictures Offer Page			
function changeImage4(src) {
  $("#image4").attr("src", src);
}

function changeImage5(src) {
  $("#image5").attr("src", src);
}

function changeImage6(src) {
  $("#image6").attr("src", src);
}


// Script for email subscribtion Offer Page
function validateForm() {
  var email = $("form[name='emailForm'] input[name='email']").val();
  if (email == "") {
    alert("Email must be filled out");
    return false;
  } else {
    alert("Thank you for subscribing!");
    return true;
  }
}


function changeImage(src) {
  $("#image").attr("src", src);
}

function changeImage1(src) {
  $("#image1").attr("src", src);
}

function changeImage2(src) {
  $("#image2").attr("src", src);
}

function changeImage3(src) {
  $("#image3").attr("src", src);
}

/*------------------------------------CAr rentals page by Alfred Omar-----------------------------------------*/

$(document).ready(function () {
  var $modal = $("#rentModal");
  var $span = $(".close-rent").eq(0);

  if ($modal.length && $span.length) {
    $span.on("click", function () {
      $modal.hide();
    });

    $(window).on("click", function (event) {
      if (event.target === $modal[0]) {
        $modal.hide();
      }
    });
  }
});

function openRentModal(description, price) {
  $('#selectedCar').html(`Selected Car: ${description} for <span id="car-price">$${price}</span>/day`);
  $('#rentModal').css('display', 'block');
  $('#car-price').css({
    'font-weight': 'bold',
    'color': 'red'
  });
}

function submitRental() {
  var startDate = $("#startDate").val();
  var endDate = $("#endDate").val();
  var modal = $("#rentModal");

  if (startDate && endDate) {
    alert("Your rental has been submitted!");
    modal.css("display", "none");
  } else {
    alert("Please fill in all the fields.");
  }
}
