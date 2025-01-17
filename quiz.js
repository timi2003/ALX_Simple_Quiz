const submitAnswer = document.getElementById('submit-answer')

function checkAnswer() {

    const userAnswer = document.querySelector('input[name="quiz"]:checked')
    const feedback = document.getElementById('feedback') 

        const correctAnswer = 4

        if(userAnswer === correctAnswer){
            feedback.textContent = "correct! well done."
    }
    else{

        feedback.textContent = "That's incorrect. Try again!"
    }

    
}

submitAnswer.addEventListener("click", checkAnswer)
