document.addEventListener("DOMContentLoaded", function() {
    
    function checkAnswer() {
        let correctAnswer = "4";

        document.querySelector('input[name ="quiz"]:checked');
        let userAnswer = document.querySelector('input[name ="quiz"]:checked').value;

        if (userAnswer === correctAnswer) {
            let textContent = "feedback";
            console.log("Correct! Well done.");
        } else {
            console.log("That's Incorrect. Thswer is 4.");
           
        document.getElementById("submit-answer"). 
        document.addEventListener("click", checkAnswer);
    }innerHTML = textContent;
        }   
});


