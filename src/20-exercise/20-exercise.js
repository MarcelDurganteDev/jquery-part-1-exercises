import $ from "jquery";

function exercise20() {
  // Complete the code of the function

   var myExcluded = $('ul').children().not('.excluded')

   myExcluded.css('background-color', 'red')

}

export default exercise20;
