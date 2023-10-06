const $ball = document.getElementsByClassName("ball")
const $team1score=document.getElementById("score-team1")
const $team1wickets = document.getElementById('wickets-team1')
const $team2score=document.getElementById("score-team2")
const $team2wickets = document.getElementById('wickets-team2')
const resetbutton=document.getElementById('reset')
const strikebutton=document.getElementById('strike')
// we have used getElementBy(Id or ClassName) for using our html class and id in js

const strikeAudio = new Audio("https://i1.faceprep.in/prograd-junior/bat%2Bhit%2Bball.mp3");
const finishedAudio = new Audio("https://i1.faceprep.in/prograd-junior/Ball%2BHit%2BCheer.mp3");

var team1score = 0
var team2score = 0 
var team1wickets = 0
var team2wickets = 0
var turn =1
var ballsfaced =0
// giving initial values to our variables
function finished(){
    if(team1score < team2score) alert("Pakistan wins");
    if(team1score > team2score) alert("India wins");
    if(team1score == team2score) alert("Draw");
}
resetbutton.onclick =() => {window.location.reload()}

// giving conditions , that when we need to stop the code 

const possibleoutcomes= [0,1,2,3,4,5,6,'w']
//giving all predefined value
strikebutton.onclick =() => {
//giving an operational strike button at web page
strikeAudio.play();  
    ballsfaced++;
    if (turn === 1){
        var score = possibleoutcomes[Math.floor(Math.random()*possibleoutcomes.length)]
        console.log(score)
        if (score === "w"){
        team1wickets++;
        $team1wickets.innerText = team1wickets
        document.querySelector(`#team1-superover .ball:nth-child(${ballsfaced})`).innerHTML = "w"
        }
        else{
            team1score += score
            $team1score.innerText = team1score 
            document.querySelector(`#team1-superover .ball:nth-child(${ballsfaced})`).innerHTML = score 
        }
    //here we have given values for our score places and total score board , by using innerHTML
    if(ballsfaced==6 || team1wickets==2){
        turn=2
        ballsfaced=0
    }
    // these are the conditions after which we turn 2 means pak side scoring will start
}
        else if(turn==2){
        var score = possibleoutcomes[Math.floor(Math.random()*possibleoutcomes.length)]
        console.log(score)
        if (score === "w"){
            team2wickets++;
            $team2wickets.innerText = team2wickets
            document.querySelector(`#team2-superover .ball:nth-child(${ballsfaced})`).innerHTML = "w"
            }
        else{
            team2score += score
            document.querySelector(`#team2-superover .ball:nth-child(${ballsfaced})`).innerHTML = score
            $team2score.innerText = team2score 
        }
        // as done earlier , similarly we gave values to our turn 2 means for pak
        if(ballsfaced ==6 || team2wickets==2 || team2score>team1score){
            turn =3
            finishedAudio.play()
            finished()
        }
        // this is condition of finishing 2nd turn and in 3rd turn we will location of function given at top
        
    }
}

    // to make our reset button functional , we have used onclick and the to do reset window.location.reload()