import $ from "jquery";

function exercise15() {
  // Complete the code of the function
var myP = $('<p></p>');
var myName = $('#name');
var myEmail = $('#email');

$('#contact_form').on('submit', function () {

   var myConcat = myName.val() +', ' + myEmail.val();
   myP.append(myConcat);
   $(this).append(myP);

})

}

export default exercise15;
