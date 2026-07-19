async function askAI() {
    let question = document.getElementById("userQuestion").value;
    let answerBox = document.getElementById("aiAnswer");

    if (question === "") {
        answerBox.innerText = "Please enter your doubt.";
        return;
    }

    answerBox.innerText = "Thinking...";

    // Gemini connection will be added here
}

function display(sectionId) {
    let sections = document.querySelectorAll("body > div");

    sections.forEach(function(section) {
        section.classList.add("d-none");
    });

    document.getElementById(sectionId).classList.remove("d-none");
}