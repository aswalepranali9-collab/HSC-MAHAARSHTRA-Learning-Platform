async function askAI() {
    let question = document.getElementById("userQuestion").value;
    let answerBox = document.getElementById("aiAnswer");

    if (question === "") {
        answerBox.innerText = "Please enter your doubt.";
        return;
    }

    answerBox.innerText = "Thinking...";

    try {
        const response = await fetch("/api/askAI", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ question })
        });

        const data = await response.json();

        answerBox.innerText = data.answer || data.error;
    } catch (error) {
        answerBox.innerText = "AI connection failed.";
    }
}

function display(sectionId) {
    let sections = document.querySelectorAll("body > div");

    sections.forEach(function(section) {
        section.classList.add("d-none");
    });

    document.getElementById(sectionId).classList.remove("d-none");
}