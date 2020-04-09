const calcForm = document.getElementById("form-calculate");


let calculate = (event) => {
    event.preventDefault();
    let firstNumber = parseInt(document.getElementById("first-number").value);
    let secondNumber = parseInt(document.getElementById("second-number").value);
    let operator = document.getElementById("operator").value;

   

    if(operator === "Addition (+)") {
        document.getElementById("calc-result").value = firstNumber + secondNumber;
    }
    else if(operator === "Subtraction (-)") {
        document.getElementById("calc-result").value = firstNumber - secondNumber;
    }
    else if(operator === "Multiplication (x)") {
        document.getElementById("calc-result").value = firstNumber * secondNumber;
    }
    else if(operator === "Division (:)") {
        document.getElementById("calc-result").value = firstNumber / secondNumber;
    }
    else if(operator === "Modulus (%)") {
        document.getElementById("calc-result").value = firstNumber % secondNumber;
    }
     else {
         alert ('You entered the wrong operator')
         
     }
    
}

calcForm.addEventListener("submit", calculate);

