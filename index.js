let computerChoice;
let userChoice
let result
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
        }else if(computerChoice=='Ball'){
            result='user Won';
        }else{
            result='user lost';
        }
    }else if(UserChoice=='Ball'){
        if (computerChoice=='Ball'){
            result='Its a tie';
        }else if(computerChoice=='Bat'){
            result='user lost';
        }else{
            result='User won';
        }
    }else{
        if (computerChoice=='Stump'){
            result='It is a tie';
        }else if(computerChoice=='Ball'){
            result='user Won';
        }else{
            result='user loss';
        }
    }
}