var dice,activePlayer,currentPoint,
totalScore=[0,0];
currentPoint=0;
activePlayer=0;
gamePlaying=true;
dice=Math.floor(Math.random()*(6+1));
document.querySelector(".diceimg").style.display='none';
document.querySelector(".rollbutton").addEventListener('click',function(){
if(gamePlaying==true){
    var dice=Math.floor(Math.random()*6+1);
  diceDOM=document.querySelector(".diceimg");
  diceDOM.style.display='block';
  diceDOM.src='dice-'+dice+'.png';
    if(dice!==1){
    console.log(dice);
    currentPoint=currentPoint+dice;
    document.querySelector(".currentscore"+activePlayer).textContent=currentPoint;
        }else{
        nextPlayer();
        }

}
    });
document.querySelector(".holdbutton").addEventListener('click',function(){
    totalScore[activePlayer]+=currentPoint;
    document.querySelector('.score'+activePlayer).textContent=totalScore[activePlayer];
    if(totalScore[activePlayer]>=100){
    document.querySelector('.player'+activePlayer).textContent="WINNER";
    gamePlaying=false;
}

    nextPlayer();
});
function nextPlayer(){
    activePlayer==0?activePlayer=1:activePlayer=0;
        currentPoint=0;
       document.querySelector(".currentscore0").textContent='0';
        document.querySelector(".currentscore1").textContent='0'; 
    
};
document.querySelector(".newgame").addEventListener('click',function(){
    document.querySelector(".diceimg").style.display='none';
    activePlayer==0?activePlayer=1:activePlayer=0;
    document.querySelector(".currentscore0").textContent='0';
    document.querySelector(".currentscore1").textContent='0';
    document.querySelector(".score0").textContent='0';
    document.querySelector(".score1").textContent='0'; 
    gamePlaying=true;
    
});


   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
                                                
                                                
                                                
                                            