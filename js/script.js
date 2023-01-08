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
const comInput = document.querySelectorAll('.communication-input-name input');
const closeCommunication = document.querySelector('.close-communication');
const communication = document.querySelector('.communication');
const communicationTitle = document.querySelector('.communication-title');
const communicationSubTitle = document.querySelector('.communication-sub-title');
const communicationForm = document.querySelector('.communication form');
const communicationName = document.querySelector('.communication-name');
const communicationLastname = document.querySelector('.communication-lastname');
const communicationBtn = document.querySelector('.communication-btn');
const comHead = document.querySelector('.com-head');
const communicationThanks = document.querySelector('.communication-thanks');
let user = new Object();
let users = [];
let date = new Date();





window.onload = () => {
    if(!localStorage.length){
    setTimeout(() => {
        communiccations();
    }, 3000);
};
    setTimeout(() => {
        // navbar.style.left = '30px';
        headerAvatarka.style.opacity = 1;
        headerAvatarka.style.transform = 'translate(0)';
        headerTitle.style.transform = 'translate(0)';
        about.style.transform = 'translate(0)';
    }, 500);
}

closeCom();

// закрываем окно для знакомства
function closeCom() {
    closeCommunication.onclick = () => {
        communication.style.display = 'none'; 
    }
};

// запускаем окно для знакомства
function communiccations() {
    communication.style.display = 'flex';
    setTimeout(() => {
         communication.style.opacity = '1';
    }, 200);
};



if(localStorage.length){
    users = JSON.parse(localStorage.getItem('users'));
    fillHtml();
    comHead.style.display = 'flex';
};


//заливаем данные в массив
function pushUsers(){
    communicationBtn.onclick = () => {
        user = {
            name: communicationName.value,
            lastname: communicationLastname.value,
            signYear: date.getFullYear(),
            signMonth:date.getMonth()+1,
            signDay: date.getDate(),
    };  

    if(communicationName.value !== ''){
        users.push(user);
       localStorage.setItem('users',JSON.stringify(users));
       fillHtml();
       communicationThanks.style.display = 'block';
       communicationTitle.style.opacity = '0';
       communicationSubTitle.style.opacity = '0';
       communicationForm.style.opacity= '0';
       setTimeout(() => {
        communication.style.display = 'none';
       }, 2000);
    }
    communicationName.value = '';
    communicationLastname.value = '';
}
};
pushUsers();





// заполняем html
function fillHtml() {
    users.forEach((item,index) => {
       comHead.innerHTML = `
       <p class="user-name">Имя: <span>${item.name}</span></p>
      ${item.lastname !== '' ? `<p calss="user-lastname">Фамилия: <span>${item.lastname}</span></p>`:''} 
       <p class="user-name">Дата ввода: <span>${item.signDay}.${item.signMonth}.${item.signYear}</span></p>
       `;
    });
}




 comInput[0].onfocus = () => {
        document.querySelectorAll('.communication-input-name')[0].classList.add('input-focus')
}
comInput[0].onblur = () => {
    document.querySelectorAll('.communication-input-name')[0].classList.remove('input-focus')
}

comInput[1].onfocus = () => {
    document.querySelectorAll('.communication-input-name')[1].classList.add('input-focus')
}

comInput[1].onblur = () => {
    document.querySelectorAll('.communication-input-name')[1].classList.remove('input-focus')
}


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