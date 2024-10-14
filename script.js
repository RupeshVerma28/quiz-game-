const quizData = [
    {
        question: "What does HTML stand for?",
        a: "Hyper Text Markup Language",
        b: "Home Tool Markup Language",
        c: "Hyperlinks and Text Markup Language",
        d: "Hyper Tool Machine Language",
        correct: "a"
    },
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        a: "<css>",
        b: "<script>",
        c: "<style>",
        d: "<link>",
        correct: "c"
    },
    {
        question: "Which property is used in CSS to change the background color?",
        a: "color",
        b: "bgcolor",
        c: "background-color",
        d: "background",
        correct: "c"
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        a: "//",
        b: "/* */",
        c: "<!-- -->",
        d: "#",
        correct: "a"
    },
    {
        question: "How can you make a numbered list in HTML?",
        a: "<ul>",
        b: "<ol>",
        c: "<list>",
        d: "<li>",
        correct: "b"
    },
    
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    
    const currentQuizData = quizData[currentQuiz];
    
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
