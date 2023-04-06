function rulesActive(active,btnClose) {
    if(document.querySelector(active).className !== 'rules-active'){
        document.querySelector(active).style.display = 'flex';
        setTimeout(() => {
            document.querySelector(active).classList.add('rules-active');
        }, 200);
    };
        document.querySelector(btnClose).onclick =() => {
            document.querySelector(active).classList.remove('rules-active');
        setTimeout(() => {
            document.querySelector(active).style.display = 'none';
        }, 300);
    }
};



const rpsAll = document.querySelectorAll('.rps');
const rpsAllCopy = [...rpsAll];
let scoreNum = 0;
const score = document.querySelector('.score h1');
const playZone = document.querySelector('.rps-play-zone');
const triangle = document.querySelector('.triangle');
let divName = document.createElement('div');
score.textContent = scoreNum;
rpsAll.forEach((item,index) => {
    item.onclick = () => {
        let randomRps = Math.floor(Math.random()*3);
        if(item.classList.contains('guest-player')){return;}
        else if(item.classList.contains('home-active')){return;}
        else{
        for (let i = 0; i < rpsAll.length; i++) {
            rpsAll[i].style.opacity = 0;
            triangle.style.opacity = 0;
            //удаляем все элементы с HTML
            setTimeout(() => {
                rpsAll[i].style.marginLeft = 0;
                playZone.classList.add('game')
                playZone.innerHTML = '';
                rpsAllCopy[index].classList.add('active');
                setTimeout(() => {
                    playZone.innerHTML = `
                    ${rpsAllCopy[index].outerHTML}
                    `;
                   rpsAllCopy[index].style.opacity = 1;
                   rpsAllCopy[index].classList.add('home-active');
                   setTimeout(() => {
                    let guestPlayer = rpsAll[randomRps];
                    guestPlayer.classList.add('guest-player');
                    if(rpsAllCopy[index] === guestPlayer){
                        guestPlayer.style.display = 'flex';
                        guestPlayer.style.marginLeft = 'auto';
                        guestPlayer.style.opacity = 0;
                        playZone.append(guestPlayer);
                        setTimeout(() => {
                        guestPlayer.style.opacity = 1; 
                        playZone.querySelector('.guest-player').classList.remove('home-active');
                        setTimeout(() => {
                            playZone.querySelector('.guest-player').insertAdjacentHTML("beforebegin", 
                            `
                            <div class="win-title">
                            <h1>DRAW</h1>
                            <button onclick="location.reload()">play again</button>
                            </div>
                            `)
                        }, 1000);
                       
                        }, 2000);
                    }else {
                    guestPlayer.style.display = 'flex';
                    guestPlayer.style.marginLeft = 'auto';
                    playZone.append(guestPlayer);
                    setTimeout(() => {
                        guestPlayer.style.opacity = 1; 
                        playZone.querySelector('.guest-player').classList.remove('home-active');
                        setTimeout(() => {
                            playZone.querySelector('.guest-player').insertAdjacentHTML("beforebegin", 
                            `
                            <div class="win-title">
                            <h1>${
                                rpsAllCopy[index] === rpsAllCopy[0] && guestPlayer === rpsAllCopy[1] ? 'you lose' : 
                                rpsAllCopy[index] === rpsAllCopy[1] && guestPlayer === rpsAllCopy[2] ? 'you lose' :
                                rpsAllCopy[index] === rpsAllCopy[2] && guestPlayer === rpsAllCopy[0] ? 'you lose' : 
                                'you win'
                            }</h1>
                            <button onclick="location.reload()">play again</button>
                            </div>
                            `);
                            document.querySelector('.win-title h1').textContent === 'you win'.toLowerCase() ?
                             localStorage.setItem('score',JSON.stringify(scoreNum+1)): '';
                             document.querySelector('.win-title h1').textContent === 'you win'.toLowerCase() ?
                             score.textContent = scoreNum+1: '';
                        }, 1000);
                    }, 2000);
                }
                   }, 500);
                }, 500);
            }, 400);
        };
    }
    }
});
if(localStorage){
    scoreNum = JSON.parse(localStorage.getItem('score'));
    score.textContent = JSON.parse(localStorage.getItem('score'));
    console.log(scoreNum);
}
