const navSlide = () =>{
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.right-nav');


    hamburger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');


        //burger - logo

        hamburger.classList.toggle('toggle');
    });
}

navSlide();