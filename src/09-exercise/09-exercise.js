import $ from "jquery";

function exercise09() {
  // Complete the code of the function
  
  var dataName = $('img').attr('data-lazy');
  $('img').attr('src', dataName)
  $('img').removeData('lazy')
  $('img').removeAttr('data-lazy')

}

export default exercise09;
