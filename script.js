//alert(prompt("5+5= ", ''));
let add = document.querySelector(".add");
let sub = document.querySelector(".sub");
let mul = document.querySelector(".mul");
let div = document.querySelector(".div");
let correctAnswer = 0

function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkAnswer(correctAnswer, userAnswer) {
    if (correctAnswer === userAnswer) {
        alert("You're right");
    }
    else {
        alert("Oh no! " + userAnswer + " is wrong. The right answer is " + correctAnswer + '.');
    }
}

add.onclick = function () {
    let numA = randint(1, 9);
    let numB = randint(1, 9);
    correctAnswer = numA + numB;
    let userAnswer = parseInt(prompt(numA + ' + ' + numB + " = " , ''));
    console.log(userAnswer, correctAnswer);

    checkAnswer(correctAnswer, userAnswer);
};

sub.onclick = function () {
    let numA = randint(1, 9);
    let numB = randint(1, 9);
    correctAnswer = numA - numB;
    let userAnswer = parseInt(prompt(numA + ' - ' + numB + " = " , ''))
    console.log(userAnswer, correctAnswer);
    checkAnswer(correctAnswer, userAnswer);
}

mul.onclick = function () {
    let numA = randint(1, 9);
    let numB = randint(1, 9);
    correctAnswer = numA * numB;
    let userAnswer = parseInt(prompt(numA + ' * ' + numB + " = " , ''))
    console.log(userAnswer, correctAnswer);
    checkAnswer(correctAnswer, userAnswer);
}

div.onclick = function () {
    let numA = randint(1, 9);
    let numB = randint(1, 9);
    correctAnswer = numA / numB;
    correctAnswer = Math.round(correctAnswer);
    alert("Please round the answer to a whole number. If n.5 or more round up. If n.4 or lower round down.");
    let userAnswer = parseInt(prompt(numA + ' / ' + numB + " = " , ''));
    checkAnswer(correctAnswer, userAnswer);
}