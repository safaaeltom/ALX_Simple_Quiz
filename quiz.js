document.addEventListener("DOMContentLoaded", function() {

    function checkAnswer(event) {
        event.preventDefault();

        let correctAnswer = "4";
        let userAnswer = document.querySelector('input[name ="quiz"]:checked').value;

        if (userAnswer === correctAnswer) {
           document.getElementById("feedback").textContent = "Correct! Well done.";
        } else {
            document.getElementById("feedback").textContent = "That's incorrect. Try again!";
        }

       let button = document.getElementById("submit-answer"); 
       button.addEventListener("click", checkAnswer);
    }; 
});
