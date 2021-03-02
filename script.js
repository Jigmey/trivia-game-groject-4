const startElement = document.getElementById("start");
const quizElement = document.getElementById("quiz-box");
const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer-options");
const messageElement = document.getElementById("message");
const gifElement = document.getElementById("gif");

startElement.addEventListener("click", start)
let random, current, score, totalScore, highScore, scoreArray;
highScore = 0;
scoreArray = []
console.log(scoreArray)
console.log("something")
// function random(array) {
//     array.sort(() => Math.random() - 0.5);
//   }
//starts game
function start(){
    console.log("working")
    startElement.classList.add("hide");
    quizElement.classList.remove("hide")
    random = questionList.sort(() => Math.random() - 0.7);
    messageElement.classList.add("hide")
    gifElement.classList.add("hide")
    current = 0;
    score = 0;  
    nextQuestion();
}

//calls showQuestion and resets the answer options
function nextQuestion(){
    reset()
    showQuestion(random[current]);
    current++
}

//shows questions and answers
function showQuestion(question){
    questionElement.innerText = question.question;
    //highscore pusing to array
    scoreArray.push(totalScore)
    //totalScore that you see on screen
    totalScore = document.getElementById("score").innerHTML = "Current score:" + score
    document.getElementById("high-score").innerHTML = "High score:" + highScore
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.txt
        button.classList.add("option")

        if(answer.right){
            button.dataset.right = answer.right
        }
        button.addEventListener("click", answerChoice)
        answerElement.appendChild(button)
    })
}
function reset(){
    while(answerElement.firstChild){
        answerElement.removeChild(answerElement.firstChild)
    }
}
function answerChoice(e){
    console.log(e)
    if(e.target.dataset.right){
        console.log("right")
        score ++
    }
    else{
        console.log("wrong")
    }
    if(random.length > current){
        nextQuestion()
    }
    else{
        // totalScore = document.createElement("h2")
        // totalScore.innerHTML = "Total score: "+ score
        // document.body.appendChild(totalScore);
        startElement.classList.remove("hide");
        quizElement.classList.add("hide");
        document.getElementById("score").innerHTML = "Total score:" + score
        console.log("Total score: "+ score)
        if(score>highScore){
            highScore = score;
            document.getElementById("high-score").innerHTML = "High score:" + highScore
            messageElement.classList.add("hide")
        }
        else if(score == highScore){
            document.getElementById("message").innerHTML = "Close"
        }
        else{
            document.getElementById("message").innerHTML = "Looks like you need more practice"          
            messageElement.classList.remove("hide")
        }
    }
    
    const selectedChoice = e.target
    const correct = selectedChoice.dataset.right
}
const questionList = [
    {
        question: "What do you call a fake noodle?",
        answers: [
            {txt: "Impasta", right: true},
            {txt: "No Pasta", right: false},
            {txt: "Artificial", right: false},
            {txt: "Cup Noodles", right: false}
        ]
    },
    {
        question: "In the anime series Full Metal Alchemist, what do Alchemists consider the greatest taboo?",
        answers: [
            {txt: "Treason", right: false},
            {txt: "War", right: false},
            {txt: "Philosipher stone", right: false},
            {txt: "Human Transmutation", right: true}
        ]
    },
    {
        question: "Why did the scarecrow get promoted?",
        answers: [
            {txt: "Hardwork", right: false},
            {txt: "He was outstanding in his field", right: true},
            {txt: "Bribes", right: false},
            {txt: "Experience", right: false}
        ]
    },
    {
        question: "Why are elevator jokes so classic and good?",
        answers: [
            {txt: "They work on many levels", right: true},
            {txt: "It is classic", right: false},
            {txt: "Everyone used them", right: false},
            {txt: "Anyone can do it", right: false}
        ]
    },
    {
        question: "What clan in Naruto deals with bugs?",
        answers: [
            {txt: "Ino", right: false},
            {txt: "Hyuga", right: false},
            {txt: "Aburame", right: true},
            {txt: "Uzumaki", right: false}
        ]
    },
    {
        question: "What is 2+2?",
        answers: [
            {txt: "4", right: false},
            {txt: "22", right: false},
            {txt: "four", right: false},
            {txt: "0100", right: true}
        ]
    },
    {
        question: "What is the big bang theory?",
        answers: [
            {txt: "Start of life", right: false},
            {txt: "A show", right: true},
            {txt: "End of life", right: false},
            {txt: "A theory", right: false}
        ]
    },
    {
        question: "How do you make holy water?",
        answers: [
            {txt: "Get it blessed", right: false},
            {txt: "Go on quest", right: false},
            {txt: "You boil the hell out of it", right: true},
            {txt: "Tap water", right: false}
        ]
    },
    {
        question: "How many hours to be the best in MMORPG?",
        answers: [
            {txt: "400hrs", right: false},
            {txt: "600hrs", right: false},
            {txt: "1000hrs", right: false},
            {txt: "Till you die", right: true}
        ]
    },
    {
        question: "A truck is coming at you. What do you do?",
        answers: [
            {txt: "Try to jump away", right: false},
            {txt: "Get ready for the new world", right: true},
            {txt: "Flashback", right: true},
            {txt: "Walk away cool like", right: false}
        ]
    },

]
