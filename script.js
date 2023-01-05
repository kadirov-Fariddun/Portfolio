const navbarLinks = document.querySelectorAll('.navbar ul li');
const headerAva = document.querySelector('.header-avatarka__img');
const headerAvaLogos = document.querySelector('.header-avatarka__logos');
const headerAvaLogo = document.querySelectorAll('.header-avatarka__logos div');
const headerTitle = document.querySelector('.header-title');
const headerAvatarka = document.querySelector('.header-avatarka');
const navbar = document.querySelector('.navbar');
const about = document.querySelector('.about');
const burger = document.querySelector('.burger svg');
const closeBurger = document.querySelector('.close-burger');

let finish = false;

for (let i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].onclick = () => {
        for (let j = 0; j < navbarLinks.length; j++) {
            navbarLinks[j].classList.remove('nav-active');
        }
        navbarLinks[i].classList.add('nav-active');
    }
}

headerAva.onclick = () => {
        headerAvaLogos.style.zIndex = 0;
        headerAvaLogo.forEach(item => {
            item.classList.add('active');
        })
        setTimeout(() => {
            headerAvaLogos.style.animationName =  'links-rotate';
        }, 500);
    };

headerAvaLogos.onclick = () => {
   headerAvaLogos.style.zIndex = -1;
        headerAvaLogos.style.animationName =  '';
        headerAvaLogo.forEach(item => {
            item.classList.remove('active');
        });
};



window.addEventListener('load', () => {
    setTimeout(() => {
        // navbar.style.left = '30px';
        headerAvatarka.style.opacity = 1;
        headerAvatarka.style.transform = 'translate(0)';
        headerTitle.style.transform = 'translate(0)';
        about.style.transform = 'translate(0)';
    }, 500);
   
});

burger.onclick = () => {
    navbar.classList.add('active');
    burger.style.display = 'none';
    closeBurger.style.display = 'block';
};

closeBurger.onclick = () => {
    navbar.classList.remove('active');
    closeBurger.style.display = 'none';
    burger.style.display = 'block';
}


// slick slider 
(() => {
         if(window.innerWidth < 768){
    $('.languages-carousel').slick({
        responsive:[
            {
            breakpoint:767.98,
        settings:{
            slidesToShow:2,
        }
    },
    {
        breakpoint:609.98,
    settings:{
        slidesToShow:1,
    }
},
    ]
    });
}else if(window.innerWidth > 768){
    $('.languages-carousel').slick('unslick');
}
  

window.addEventListener('resize',() => {
    if(window.innerWidth < 768){
    $('.languages-carousel').slick({
    responsive:[
        {
        breakpoint:767.98,
    settings:{
        slidesToShow:2,
    }
},
{
    breakpoint:609.98,
settings:{
    slidesToShow:1,
}
}
]
});
    }else if(window.innerWidth > 768){
        $('.languages-carousel').slick('unslick');
    }
}); 
})();



////

