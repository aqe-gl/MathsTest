//alert(prompt("5+5= ", ''));
let add = document.querySelector(".add");
let sub = document.querySelector(".sub");
let mul = document.querySelector(".mul");
let div = document.querySelector(".div");

add.onclick = function () {
    let correctAnswer = 5 + 5;
    let userAnswer = parseInt(prompt("5 + 5 = ", ''));
    console.log(userAnswer, correctAnswer);

    if (correctAnswer === userAnswer) {
        alert("You're right");
    }
    else {
        alert("Oh no! " + userAnswer + " is wrong. The right answer is: " + correctAnswer + '.');
    }
};