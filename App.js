let boxes=document.querySelectorAll(".box");
let container=document.querySelectorAll(".winContainer");
let newGame=document.querySelector(".start");
let mesg=document.querySelector(".winner");
let reset=document.querySelector(".reset");
let turn0=true; //playerX, playerY
let turns=0;
const  winPattern=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        turns++;
        console.log(turns);
        if(turn0===true){
            box.textContent="O";//player0 turn
            box.style.color="pink"
            turn0=false
        }
        else{
            box.textContent="X";//playerX turn
            box.style.color="#84b082"
            turn0=true
        }
        box.disabled=true;
        checkWinner();
    
    })
})

const checkWinner=()=>{
    for(pattern of winPattern){
        let pos1=boxes[pattern[0]].textContent;
        let pos2=boxes[pattern[1]].textContent;
        let pos3=boxes[pattern[2]].textContent;
         
        
        if(pos1!=="" && pos2!=="" && pos3!==""){
            if(pos1==="O" && pos2==="O" && pos3==="O"){
                mesg.textContent=`Congratulations!!!! Winner is  O 😀 `;
                Disabled();
                turns=0;
            }
            else if(pos1==="X" &&pos2==="X" && pos3==="X" ){
                mesg.textContent="Congratulations!!!! Winner is X 😀";
                Disabled();
                turns=0;
                
            }
            else if(turns===9){
                mesg.textContent="Oh, that's a draw. Try Again 😔";
                Disabled();
                turns=0;
            }
            }
        }

    }
const Disabled=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}
reset.addEventListener("click",()=>{
    for(box of boxes){
        box.disabled=false;
        turn0=true;
        mesg.textContent="";
        box.textContent="";
        turns=0;
    }
})
