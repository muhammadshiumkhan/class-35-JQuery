// JS

wow = new WOW(
  {
    boxClass: 'wow',      
    animateClass: 'animated', 
    offset: 10,          
    mobile: true,       
    live: true        
  }
)
wow.init();


// JQ

$(document).ready(function () {
  $("#dragg").draggable();

  $("#accordion").accordion({
    collapsible: true
  });

  let data = [
    "HTML",
    "CSS",
    "JQuery"
  ];

  $("#c_name").autocomplete({
    source: data
  });

  // counter up
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

  $('.count').numberAnimate({
    duration: 2000
  });

});




