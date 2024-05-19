document.addEventListener("DOMContentLoaded", function() {
    var ageInput = document.getElementById("age");
    var genderInput = document.getElementById("gender");
    var progressBarInner = document.getElementById("progress-bar-inner");
    var progressBar = document.getElementById("progress-bar");

    function calculateLifeExpectancy() {
        var age = parseInt(ageInput.value);
        var gender = genderInput.value;
        var lifeExpectancy;

        if (gender === "male") {
            lifeExpectancy = 76; // Espérance de vie moyenne pour les hommes
        } else {
            lifeExpectancy = 81; // Espérance de vie moyenne pour les femmes
        }

        var remainingLife = lifeExpectancy - age;
        var percentageRemaining = (remainingLife / lifeExpectancy) * 100;
        
        progressBarInner.innerText = remainingLife + " ans restants";
        progressBarInner.style.width = percentageRemaining + "%";
    }

    ageInput.addEventListener("input", calculateLifeExpectancy);
    genderInput.addEventListener("change", calculateLifeExpectancy);

    // Calcul initial au chargement de la page
    calculateLifeExpectancy();
});
