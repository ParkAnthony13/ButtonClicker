var fail = 0;
var failElement = document.querySelector(".boxTitle2");

function flash(n){
    turnRed(n);
    fail++;
    failElement.innerText = "FAIL COUNTER: "+fail;
    console.log(fail);
    setTimeout(function() {turnNavy();}, 200);
}
function turnRed(n){
    if (n==0){
        document.getElementsByClassName("btn")[1].style.backgroundColor= "red";
        document.getElementsByClassName("btn")[2].style.backgroundColor= "red";
    } else if (n==1){
        document.getElementsByClassName("btn")[0].style.backgroundColor= "red";
        document.getElementsByClassName("btn")[2].style.backgroundColor= "red";
    } else {
        document.getElementsByClassName("btn")[0].style.backgroundColor= "red";
        document.getElementsByClassName("btn")[1].style.backgroundColor= "red";
    }
}

function turnNavy(){
    document.getElementsByClassName("btn")[0].style.backgroundColor= "navy";
    document.getElementsByClassName("btn")[1].style.backgroundColor= "navy";
    document.getElementsByClassName("btn")[2].style.backgroundColor= "navy";
}
function reset() {
    fail = 0;
    failElement.innerText = "FAIL COUNTER: "+fail;
    console.log(fail);
}