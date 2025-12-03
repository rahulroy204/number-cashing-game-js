// if else if else ternary switch
const h1 = document.getElementById("output")
const number = +prompt("Enter A random Number");
if (number >= 0 && number <= 32) {
    h1.innerText = "you Are Fail";
} else if (number >= 33 && number <= 39) {
    h1.innerText = "Your Grade is D";
} else if (number >= 40 && number <= 49) {
    h1.innerText = "Your Grade is C";
} else if (number >= 50 && number <= 59) {
    h1.innerText = "Your Grade is B";
} else if (number >= 60 && number <= 69) {
    h1.innerText = "Your Grade is A-";
} else if (number >= 70 && number <= 79) {
    h1.innerText = "Your Grade is A";
} else if (number >= 80 && number <= 100) {
    h1.innerText = "Your Grade is A+";
} else {
    h1.innerText = "Input Invalid try to give number ";
}

