const billAmount = document.querySelector("#billAmount");
const cashGiven = document.querySelector("#cashGiven")
const checkButton = document.querySelector("#checkButton");
const message = document.querySelector("#errorMessage");
const noOfNotes = document.querySelectorAll('.no-Of-Notes')
const returnCash = document.querySelector("#caption")
const nextInput = document.querySelector("#nextInput")

const availableNotes = [2000, 500, 100, 50, 20, 10, 5, 1];

nextButton.addEventListener("click", function validateBillAmount(){
    if(billAmount.value>0){
        showInput()
    }else{
        showMessage("Bill amount should be greater than 0")
    }
});



checkButton.addEventListener("click", function ValidateAmount(){
    hideMessage();
    // function to check valid amount
    if(billAmount.value>0){
        if(Number(cashGiven.value)>= Number(billAmount.value)){
            const returnAmount = Number(cashGiven.value) - Number(billAmount.value);
            returnCash.innerHTML = returnAmount
            // console.log(Number.isInteger(returnAmount));
            calculateReturn(returnAmount);

        }else{
            showMessage("Cash given should be equal or greater than bil amount")
        }
    }else{
      showMessage("Bill amount should be greater than 0")
    }
})

function hideMessage(){
    message.style.display = "none"
}

function showMessage(msg){
    message.style.display = "block";
    message.style.color = "yellow";
    message.innerHTML = msg;
}

function calculateReturn(returnAmount){
    for(i=0; i<availableNotes.length; i++){
        const numberOfNotes = Math.trunc(returnAmount / availableNotes[i]);
        returnAmount = returnAmount % availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    };
   
}

function showInput(){
    nextInput.style.display = "flex"
}
