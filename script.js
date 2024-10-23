document.getElementById("calculatePrice").addEventListener("click", function() {
    let basePrice = 100; 

    let education = parseFloat(document.getElementById("education").value) || 1;
    
    let networth = parseFloat(document.getElementById("networth").value) || 1;

    let caste = parseInt(document.getElementById("caste").value) || 0;

    let age = document.querySelector('input[name="age"]:checked');
    let ageCoefficient = age ? parseFloat(age.value) : 1;

    let skillsSum = 0;
    if (document.getElementById("skill_music").checked) {
        skillsSum += parseInt(document.getElementById("skill_music").value);
    }
    if (document.getElementById("skill_cook").checked) {
        skillsSum += parseInt(document.getElementById("skill_cook").value);
    }
    if (document.getElementById("skill_easygoing").checked) {
        skillsSum += parseInt(document.getElementById("skill_easygoing").value);
    }
    if (document.getElementById("skill_singer").checked) {
        skillsSum += parseInt(document.getElementById("skill_singer").value);
    }

    let reputationCoefficient = 1;
    if (document.getElementById("reputation_parents").checked) {
        reputationCoefficient *= parseFloat(document.getElementById("reputation_parents").value);
    }
    if (document.getElementById("reputation_character").checked) {
        reputationCoefficient *= parseFloat(document.getElementById("reputation_character").value);
    }
    let reputationPenalty = 0;
    if (document.getElementById("reputation_person").checked) {
        reputationPenalty = parseInt(document.getElementById("reputation_person").value);
    }

    let finalPrice = basePrice * education * networth * ageCoefficient * reputationCoefficient + caste + skillsSum + reputationPenalty;

    document.getElementById("result").innerHTML = `Final price: $${finalPrice.toFixed(2)}`;

    document.getElementById("result").style.color = finalPrice >= 150 ? "green" : "red";
});
