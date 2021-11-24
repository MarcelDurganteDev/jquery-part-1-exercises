import $ from 'jquery';

function exercise14() {
    // Complete the code of the function
    $('#contact_form').on('submit', function (e) {
        e.preventDefault();
        var myP = $('<p>The values are empty</p>');
        var myName = $('#name').val();
        var myEmail = $('#email').val();

        if (myName == '' && myEmail == '') {
            $('#contact_form').append(myP);
        }
    });
}

export default exercise14;

/* $('#contact_form').on('submit', function () 
{
  var myP = $('<p>The values are empty</p>'); 
  var myName = $('#name').val()
  var myEmail = $('#email').val()    

    if ($(myName).val().length < 0 || $(myEmail).val().length < 0) {} 
    {
      $(this).append(myP);
    }
}); */
