import $ from 'jquery';

function exercise12() {
    // Complete the code of the function
    let cities = ['Barcelona', 'Madrid', 'Sevilla'];
    var myDiv = $('.ex-wrapper');
    var myUl = $('<ul class="ex-list"></ul>');

       $.each(cities, function(index, value) {
         myUl.append($("<li class='ex-list-item'>"+value+"</li>"))
         myDiv.append(myUl);
       })
}

export default exercise12;
