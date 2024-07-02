let computerChoice;
let userChoice
let result

let score={
    win:0,
    lose:0,
    Draw:0,

    displayscore:function(){
       return `win :${score.win} lose :${score.lose} draw :${score.Draw}`
    }
}

function ComputerChoice_Generate(){
    let random
    random=Math.random()*3;

    if (random>0 && random<=1){
         computerChoice='Bat';
       
    }else if (random >1 && random<=2){
         computerChoice='Ball';
        
    }else{
         computerChoice='Stump'
        
    }
}


function getresult(UserChoice,computerChoice){
    if (UserChoice=='Bat'){
        if (computerChoice=='Bat'){
            result='It is a tie';
            score.Draw+=1;
        }else if(computerChoice=='Ball'){
            result='user Won';
            score.win+=1;
        }else{
            result='user lost';
            score.lose+=1;
        }
    }else if(UserChoice=='Ball'){
        if (computerChoice=='Ball'){
            result='Its a tie';
            score.Draw+=1;
        }else if(computerChoice=='Bat'){
            result='user lost';
            score.lose+=1;
        }else{
            result='User won';
            score.win+=1;
        }
    }else{
        if (computerChoice=='Stump'){
            result='It is a tie';
            score.Draw+=1;
        }else if(computerChoice=='Ball'){
            result='user Won';
            score.win+=1;
        }else{
            result='user loss';
            score.lose+=1;
        }
    }
    console.log(score);
}

function showresult(UserChoice,computerChoice,result){
    
    document.querySelector('#user_move').innerText =`You have chosen ${UserChoice}` ;  

    document.querySelector('#computer_move').innerText =`Computer have chosen ${computerChoice}` ;  

    document.querySelector('#result').innerText =` ${result}` ;  

    document.querySelector('#score').innerText =` ${score.displayscore()}` ;  
}