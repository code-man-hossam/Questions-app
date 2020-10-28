const quizData = [
    {
        quistion: 'A python framework for deep learning',
        a: 'Flask',
        b: 'Django',
        c: 'TanserFlow',
        d: 'Matplotlib',
        correct: 'c'
    },
    {
        quistion: 'What is the most used programming language in 2019?',
        a: 'java',
        b: 'C',
        c: 'python',
        d: 'javascript',
        correct: 'd'
    },
    {
        quistion: 'Which programming language is the fastest one?',
        a: 'Pascal',
        b: 'C programming',
        c: 'Go-Lang',
        d: 'Php',
        correct: 'b'
    },
    {
        quistion: 'What does HTML stands for?',
        a: 'HyperText Programming Langauge',
        b: 'Object Oriented Langauge',
        c: 'HyperText Markup Langauge',
        d: 'Casecading Style Sheet',
        correct: 'c'
    },
    {
        quistion: 'What year javascript was launched?',
        a: '1995',
        b: '1996',
        c: '1997',
        d: 'none of the above',
        correct: 'a'
    },
    {
        quistion: 'One of these is a Node Js framework',
        a: 'React',
        b: 'Next',
        c: 'Angular',
        d: 'Express',
        correct: 'd'
    },
    {
        quistion: 'The Famous programming language Kotlin Was Named after?',
        a: 'Java programming language',
        b: 'A person Called Kotlin',
        c: 'An island on Russia',
        d: 'An island on indonisa',
        correct: 'c'
    },
    {
        quistion: 'One of these is not a compiled language?',
        a: 'C#',
        b: 'C++',
        c: 'Go',
        d: 'Python',
        correct: 'd'
    }
];

const questionText = document.querySelector('.question');

const quiz = document.querySelector('.quiz-container');

const answerEls = document.querySelectorAll('.answer');
const btn = document.querySelector('.btn');

const a_answer = document.getElementById('a_answer'); 
const b_answer = document.getElementById('b_answer'); 
const c_answer = document.getElementById('c_answer'); 
const d_answer = document.getElementById('d_answer');

let currentQuistion = 0;
let score = 0;


loadQuiz()

function loadQuiz() {

    const currentQuiz = quizData[currentQuistion];

    questionText.innerText = currentQuiz.quistion;

    a_answer.innerText = currentQuiz.a;
    b_answer.innerText = currentQuiz.b;
    c_answer.innerText = currentQuiz.c;
    d_answer.innerText = currentQuiz.d;
}

function getSelected() {

    let answer = undefined;

    answerEls.forEach(answerEl => {

        if(answerEl.checked){
            answer = answerEl.id
        }
      
    });
    return answer;
}

function deselectAnswer() {

    answerEls.forEach(answerEl => {
        answerEl.checked = false
    })
}


btn.addEventListener('click', () => {

    const answer = getSelected()

    if(answer){

        if(answer === quizData[currentQuistion].correct){
            score++;
        }

        currentQuistion++;
        if(currentQuistion < quizData.length){
            loadQuiz()
            deselectAnswer()
        }
        else{
            quiz.innerHTML = `<h2>You have answered ${score} out of ${quizData.length} questions</h2>
            <button onclick="location.reload()">Play Again</button>`;
        }
    }
    
})
