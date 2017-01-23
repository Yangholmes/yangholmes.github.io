// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.

$(document).ready(function(){
    $('#selected-plays > li').addClass('horizontal');
    $('#selected-plays li:not(.hoeizontal)').addClass('sub-level');
    $('a[href^="mailto:"]').addClass('mailto');
    $('a[href^="http"][href*="henry"]').addClass('henrylink');

    $('a').parent('li').nextAll(":not(a)").addClass('afterlink');

    //$('tr:even').addClass('alt');
    $('tr:nth-child(odd)').addClass('alt');

    //$('tr:contains(Henry)').addClass('highlight');
    $('tr').not(':contains(Henry)').addClass('highlight');
    $('tr:contains(Tragedy)').first().addClass('special');
    $('td:nth-child(3)').addClass('year');
})