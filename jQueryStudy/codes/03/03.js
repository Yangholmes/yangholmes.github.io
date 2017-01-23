// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.

$(document).ready(function(){
//    $('body').addClass('large');
//    $('#switcher-large').on('click', function(){ //为按键绑定click事件
//      $('body').addClass('large');  
//      $('body').removeClass('narrow');
//      $('#switcher button').removeClass('selected');
//      $(this).addClass('selected');
//    });

//    $('#switcher-narrow').on('click', function(){ //为按键绑定click事件
//      $('body').addClass('narrow');
//      $('body').removeClass('large');
//      $('#switcher button').removeClass('selected');
//      $(this).addClass('selected');
//    });

   $('#switcher-default').addClass('selected')
    .on('click', function(){ //为按键绑定click事件  
        $('body').removeClass();
   });  

    $('#switcher h3').click(function(e){
       $('#switcher button').toggleClass('hidden');
    });
    $('#switcher').click(function(e){
        if(e.target == this){
            $('#switcher button').toggleClass('hidden');
        }
    });

});