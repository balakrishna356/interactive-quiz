const questions = [
    {
        question: "What is 2 + 2?",
        answers: ["3", "4", "5", "6"],
        correctAnswer: 1
    },
    {
        question: "Who is the prime minister of india?",
        answers: ["Narendra Modi", "Mukesh Ambani", "Akash Nandan", "Yogi aditya"],
        correctAnswer: 0
    },
    {
        question: "What is the capital of India?",
        answers: ["Amaravathi", "Mumbai", " New Delhi", "Bengalore"],
        correctAnswer: 2
    },
    {
        question: "Who si CM of Telangana state?",
        answers: ["Jagan", "KCR", "Nitish", "Stalin"],
        correctAnswer: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const questionText = document.getElementById("question-text");
    questionText.textContent = `Question ${currentQuestionIndex + 1}: ${questions[currentQuestionIndex].question}`;

    const answers = document.querySelectorAll(".answers button");
    questions[currentQuestionIndex].answers.forEach((answer, index) => {
        answers[index].textContent = answer;
    });

    document.getElementById("feedback").textContent = "";
}

function checkAnswer(selectedIndex) {
    if (selectedIndex === questions[currentQuestionIndex].correctAnswer) {
        score++;
        document.getElementById("feedback").textContent = "Correct!";
    } else {
        document.getElementById("feedback").textContent = "Incorrect!";
    }

    const nextBtn = document.getElementById("next-btn");
    nextBtn.style.display = "block";

    const answers = document.querySelectorAll(".answers button");
    answers.forEach((button) => {
        button.disabled = true;
    });
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        const answers = document.querySelectorAll(".answers button");
        answers.forEach((button) => {
            button.disabled = false;
        });
        document.getElementById("next-btn").style.display = "none";
    } else {
        displayFinalScore();
    }
}

function displayFinalScore() {
    const quizContainer = document.querySelector(".quiz-container");
    quizContainer.innerHTML = `
        <h1>Quiz Completed</h1>
        <div class="score">
            <p>Your Score: ${score}/${questions.length}</p>
        </div>
        <button onclick="location.reload()" id="restart-btn">Restart</button>
    `;
}

displayQuestion();
