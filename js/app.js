

// Global var
const header = document.querySelector(".header-area");
const content_height = document.querySelector(".content-height");
const links = document.querySelectorAll('.nav-link');
const sections =document.querySelectorAll('section');

// Header Height
function heade(){

  // header advans
  header.style.height=(`${window.innerHeight}px`);
  content_height.style.height=(`${window.innerHeight}px`);

  window.addEventListener('resize',function(){
      
    header.style.height=(`${window.innerHeight}px`);
    content_height.style.height=(`${window.innerHeight}px`);
  })
  
}
heade()

$(window).scroll(function () { 
  const scroll = window.pageYOffset;

  if(window.scrollY > 70){
      $('header').addClass('on-scrol')
  }else{
      $('header').removeClass('on-scrol')
  }
});

// link active

// links.forEach (link =>{

//   link.addEventListener('click',function(){
      
//       links.forEach(lin=> lin.classList.remove('link-active'));

//       this.classList.add('link-active')
//   })
// });
addEventListener('scroll' , function focas (){  

  for(const section of sections){
      
      var rect = section.getBoundingClientRect();
      
      const id_sec =section.getAttribute('id');
      
      const li = document.getElementById(id_sec);
      
      const li_menu = document.querySelector(`a[data-nav=${id_sec}]`);

      li.addEventListener('click', function(){

        section.scrollIntoView({'behavior':'smooth'})
    })
      li_menu.addEventListener('click', function(){

        section.scrollIntoView({'behavior':'smooth'})
    })
      if(rect.top > -250 && rect.top <= 200 ){
          li.classList.add("link-active");
          li_menu.classList.add("link-active");
      }else{
          li.classList.remove("link-active");
          li_menu.classList.remove("link-active");
      }
      
  }})



    // ----------link header--------------

  const link_header= document.querySelector(`a[data-link=abute]`);
  const abute= document.querySelector(`section[id=abute]`);
  
link_header.addEventListener('click', function(){

  abute.scrollIntoView({'behavior':'smooth'})
})


// ---------backgroung----------------
$( document ).ready(function(){
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'js/particlesjs-config.json', function() {

  console.log('callback - particles.js config loaded');
  var grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows'
});
})


// show menu
$("#menu").on("click",function(){

  $("#menu-navbar").addClass('show');
})
$("#close-navbar").on("click",function(){

  $("#menu-navbar").removeClass('show');
});

// owlCarousel services
$(".services").owlCarousel({
  loop:false,
  margin:15,
  nav:false,
  items:3,
  autoplay:false,
  responsiveClass:true,
responsive:{
0:{
items:1,
},
768:{
items:2,
},
1000:{
items:3,
}}});




// ProgressBar my skills
  var WEB_DESIGN = new ProgressBar.Line('#progress', {
    color: '#000000',
  });
  var MARKETING = new ProgressBar.Line('#progress2', {
    color: '#000000',
  });
  var WEB_DEVELOPMENT= new ProgressBar.Line('#progress3', {
    color: '#000000',
  });
  var SEO_MARKETING = new ProgressBar.Line('#progress4', {
    color: '#000000',
  });
  


addEventListener('scroll'  , function prog(){
  const skill = document.querySelector(`section[id=Skills]`);

  var rect = skill.getBoundingClientRect();
  
  if(rect.top > -250 && rect.top <= 200){
    
    WEB_DESIGN.animate(1);
    MARKETING.animate(1);
    WEB_DEVELOPMENT.animate(1);
    SEO_MARKETING.animate(1);
  }
});

// filter Projects 
var filterFns = {
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};
// bind filter button click
$('.filters-button-group').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $('.grid').isotope({ filter: filterValue });
});


// change is-checked class on buttons
$('.button').each(function(){
  $('.button').on('click',function(){
    $('.button').removeClass('is-checked');
    $( this ).addClass('is-checked');
  })});



  // owlCarousel Testimonials
  $(".Testimonials-carousel").owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    items:1,
    autoplay:true,
    responsiveClass:true,
responsive:{
0:{
items:1,
},
768:{
items:1,
},
1000:{
items:1,
}
}

});






// contant
const form = document.querySelector('.form');
const name = document.querySelector('#Name');

$("#start-project").on('click',function(){

  form.scrollIntoView({'behavior':'smooth'});
  name.focus();
})


  
}); //end document ready


















