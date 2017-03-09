// business logic
function palindrome(myString) {
  // remove all non-alphanumeric characters and turn everything lower case
  var removeChar = myString.toString().replace(/[^A-Z0-9]/ig, "").toLowerCase();
  var checkPalindrome = removeChar.split('').reverse().join('');

if(removeChar === checkPalindrome) {
  return true;
} else {
  return false;
}
};

// user interface logic
$(document).ready(function() {
  $("form#palindrome").submit(function(event) {
    event.preventDefault();
    var myString = parseInt($("input#word-input").val());
    var result = palindrome(myString);

    $(".myString").text(myString);

    if (!result) {
      $(".not").text("not");
    } else {
      $(".not").text("");
    }

    $("#result").show();
  });
});
