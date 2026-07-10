//alert(prompt("5+5= ", ''));
let add = document.querySelector(".add");
let sub = document.querySelector(".sub");
let mul = document.querySelector(".mul");
let div = document.querySelector(".div");
let correctAnswer = 0

add.onclick = function () {
    correctAnswer = 5 + 5;
    let userAnswer = parseInt(prompt("5 + 5 = ", ''));
    console.log(userAnswer, correctAnswer);

    if (correctAnswer === userAnswer) {
        alert("You're right");
    }
    else {
        alert("Oh no! " + userAnswer + " is wrong. The right answer is " + correctAnswer + '.');
    }
};

sub.onclick = function () {
    correctAnswer = 10 - 5;
    let userAnswer = parseInt(prompt("10 -5 = ", ''));
    console.log(userAnswer, correctAnswer);
    if (correctAnswer === userAnswer) {
        alert("You're right");
    }
    else {
        alert("Oh no! " + userAnswer + " is wrong. The right answer is " + correctAnswer + '.');
    }
}

mul.onclick = function () {
    correctAnswer = 10 * 5;
    let userAnswer = parseInt(prompt("10 * 5 = ", ''));
    console.log(userAnswer, correctAnswer);
    if (correctAnswer === userAnswer) {
        alert("You're right");
    }
    else {
        alert("Oh no! " + userAnswer + " is wrong. The right answer is " + correctAnswer + '.');
    }
}

div.onclick = function () {
    correctAnswer = 10 / 5;
    let userAnswer = parseInt(prompt("10 / 5 = ", ''))
    if (correctAnswer === userAnswer) {
        alert("You're right");
    }
    else {
        alert("Oh no! " + userAnswer + " is wrong. The right answer is " + correctAnswer + '.');
    }
}