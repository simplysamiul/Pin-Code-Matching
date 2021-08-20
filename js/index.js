function pinCreate(){
    const randomPinNum = Math.round(Math.random()*100000);
    const randomPinStr = randomPinNum + "";
    if(randomPinStr.length === 5){
        return randomPinStr;
        
    }
    else{
        return pinCreate();
    }
};

document.getElementById("get-pin").addEventListener("click", function(){
   const pin = pinCreate();
   document.getElementById("pin-store").value = pin;
});

// Calculator NUmber Find Out
document.getElementById("calc-num").addEventListener("click", function(event){
    const getCalcNum = event.target.innerText;
    const calcNumInput = document.getElementById("calcNum-store");
    if(isNaN(getCalcNum)){
        if(getCalcNum == "C"){
            calcNumInput.value = "";
        }
    }
    else{
    const previousCalcNum = calcNumInput.value;
    const newCalcNum = previousCalcNum + getCalcNum;
    calcNumInput.value = newCalcNum;
    }
});

// Pin Submit area
function pinSubmit(){
    const pinCreate = document.getElementById("pin-store").value;
    const pinWrite = document.getElementById("calcNum-store").value;
    const pinMatched = document.getElementById("matched");
    const pinUnMatched = document.getElementById("unMatched");
    if(pinCreate === pinWrite){
        pinMatched.style.display = "block";
        pinUnMatched.style.display = "none";
    }
    else{
        pinUnMatched.style.display = "block";
        pinMatched.style.display = "none";
        
    }
}