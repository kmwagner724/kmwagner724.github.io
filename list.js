// This code runs when the page loads
$(function() {

  $("#do-something").on("click", function(event) {
    // Do something -- jquery selector is binding itself to something with the id "do-something"
    //.on means the function occurs when we do something (on click)
    event.preventDefault(); //prevent going to Google.com
    $("#unicorn").fadeIn(10000); //now our unicorn will show upp when we click the button
  });

})