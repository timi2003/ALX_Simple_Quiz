// const submitAnswer = document.getElementById('submit-answer');

// function checkAnswer() {

//     const userAnswer = document.querySelector('input[name="quiz"]:checked').value;
//     const feedback = document.getElementById('feedback');
    

//         const correctAnswer = '4';

//         if(userAnswer === correctAnswer){
//             feedback.textContent = "correct! well done.";
//     }
//     else{

//         feedback.textContent = "That's incorrect. Try again!";
//     }

    
// }

// submitAnswer.addEventListener("click", checkAnswer);

// Function to check the answer
function checkAnswer() {
    // Declare the correct answer
    const correctAnswer = "4";

    // Retrieve the user's answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;

    // Get the feedback element
    const feedback = document.getElementById("feedback");

    // Compare the user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
