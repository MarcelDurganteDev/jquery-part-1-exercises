import $ from "jquery";

function exercise16() {
  // Complete the code of the function
  var myP = ('<p>Message Sent!</p>')

    $('#contact_form').on('submit', function () {

      $('#contact_form').after(myP)
      
    })


}

export default exercise16;
