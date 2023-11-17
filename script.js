
document.querySelector('#search-icon').onclick = ()=>{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = ()=>{
    document.querySelector('#search-form').classList.remove('active');
}
//////////////////////////////////////////////


//////////////////////////////////

document.querySelector('.menu-trigger').onclick = ()=>{
    document.querySelector('#mobile-menu').classList.toggle('active');
}

document.querySelector('#closee').onclick = ()=>{
    document.querySelector('#mobile-menu').classList.remove('active');
}

/////////mobile-menu/////////////
const submenu = document.querySelectorAll('.child-trigger');
submenu.forEach((menu) => menu.addEventListener('click', function(e){
    e.preventDefault();
    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('active') : null);
    if(this.closest('.has-child').classList != 'active'){
        this.closest('.has-child').classList.toggle('active');
    }
}));

///////////////////////////////////////////////

/////////sorter//////////
const sorter = document.querySelector('.sort-list');
if(sorter){
    const sortLi = sorter.querySelectorAll('li');
    sorter.querySelector('.opt-trigger').addEventListener('click', function(){
        sorter.querySelector('ul').classList.toggle('show')
    });

    sortLi.forEach((item) => item.addEventListener('click', function(){
        sortLi.forEach((li) => li != this ? li.classList.remove('active'): null);

        this.classList.add('active');
        sorter.querySelector('.opt-trigger span.value').textContent = this.textContent;
        sorter.querySelector('ul').classList.toggle('show');
    }))
}


// tabbed///

document.querySelector('#sweater').onclick = ()=>{
    document.querySelector('.sort-data').classList.toggle('active');
   }

document.querySelector('#hoodie').onclick = ()=>{
    document.querySelector('.sort-data-2').classList.toggle('hoodie');
}

document.querySelector('#shirt').onclick = ()=>{
    document.querySelector('.sort-data-3').classList.toggle('shirt');
}


// const trigger = document.querySelectorAll('.tabbed-trigger'),
//     content = document.querySelectorAll('.tabbed > div');
//     trigger.forEach((btn) => {
//         btn.addEventListener('click', function() {
//             let dataTarget = this.dataset.id,
//             body = document.querySelector(`#${dataTarget}`);

//             trigger.forEach((b) => b.parentNode.classList.remove('active'));
//             trigger.forEach((s) => s.classList.remove('active'));
//             this.parentNode.classList.add('active');
//             body.classList.add('active');
//         })
//     })



///////////////slider//////////////////////////
const swiper = new Swiper('.sliderbox', {
    loop: true,
    effect:"fade",
    outerHeight: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  /////////////////////carsouel//////////
const carsouel = new Swiper('.carouselbox', {

    spaceBetween:30,
    slidesPerView:'auto',
    centerredSlides:true,

  
    // If we need pagination
    navigation: {
      nextEl:'.swiper-button-next',
      prevEl:'.swiper-button-prev',
    },
    breakpoints:{
        481:{
            slidesPerView:2,
            slidesPerGroup:1,
            centerredSlides:false,
        },
        640:{
            slidesPerView:3,
            slidesPerGroup:3,
            centerredSlides:false,
        },
        992:{
            slidesPerView:4,
            slidesPerGroup:4,
            centerredSlides:false,
        },
    }
  });