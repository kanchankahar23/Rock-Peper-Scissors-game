let userscore = 0 ;
let compscore = 0 ;
const choices = document.querySelectorAll('.choice');
const userscorepara = document.querySelector('#user-score');
const compscorepara = document.querySelector('#comp-score');
const msg = document.querySelector('#msg');

const getcompchoice = () => {
    const option = ["rock","paper","scissors"] 
    const randomidx = Math.floor(Math.random() * 3)
     return option[randomidx];
}
const drawgame = () =>{
    msg.innerText = "Game was draw. play again";
    msg.style.backgroundColor = "blue"
    console.log('draw')
}
const showWinner = (userwin , userchoice,compchoice) =>{
 if(userwin){
    userscore++;
    userscorepara.innerText = userscore;
    msg.innerText = 'you win'
    msg.style.backgroundColor = "green";
 
 }
 else{
    compscore++; 
    compscorepara.innerText = compscore;
    msg.innerText = 'You lost'
    msg.style.backgroundColor = "red";
 }
}
const playgame = (userchoice) =>{
    console.log('userchoice = ',userchoice);
    const compchoice = getcompchoice()
    console.log('computer=',compchoice)
    if(userchoice === compchoice){
      drawgame();
    }
    else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin = compchoice === "paper" ? false : true;
        }
        else if(userchoice === "paper"){
            userwin = compchoice === "scissors" ? false : true;
        }
        else{
            userwin = compchoice === "rock" ? false : true;
        }
        showWinner(userwin,userchoice,compchoice);
    }
}


choices.forEach((choice)=>{
    choice.addEventListener('click', () =>{
        const userchoice = choice.getAttribute('id');
        playgame(userchoice);

    })
})