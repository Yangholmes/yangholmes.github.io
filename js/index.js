// location.replace("resume/");

$(document).ready(function(){
    alert('1st called!');
});

$(document).ready(function(){
    console.log('2st called!');
});

$(document).ready(function(){
    console.log('3st called!');
});

window.onlaod = loadWindow();

window.onlaod = loadWindow();

window.onlaod = loadWindow();

function loadWindow(){
   alert('window loaded!');
}