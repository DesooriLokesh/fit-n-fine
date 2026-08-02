// ==========================
// FIT N FINE - SCRIPT
// ==========================

// BMI Calculator
function calculateBMI() {

    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    if(height==="" || weight===""){
        document.getElementById("result").innerHTML =
        "Please enter height and weight";
        return;
    }

    height = height / 100;

    let bmi = weight / (height * height);

    let status = "";

    if(bmi < 18.5){
        status = "Underweight";
    }
    else if(bmi < 25){
        status = "Normal";
    }
    else if(bmi < 30){
        status = "Overweight";
    }
    else{
        status = "Obese";
    }

    document.getElementById("result").innerHTML =
    "Your BMI: " + bmi.toFixed(1) + " (" + status + ")";
}

// Welcome Message
window.onload = function(){

    console.log("Welcome to Fit N Fine");

}

// Smooth Button Animation

const buttons = document.querySelectorAll("button");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.08)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});
