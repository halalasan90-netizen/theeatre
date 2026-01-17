document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("myForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(form);

        fetch("https://script.google.com/macros/s/AKfycbyAvTZBigxZL_FP1FlMbSaS7z0QEsW1QeZylAhpOFqLLYNKwFmtF5a4LN2kpm0ktS8X8g/exec", {
            method: "POST",
            body: formData
        })
        .then(response => response.text())
        .then(text => {
            if (text === "OK") {
                alert("Your registration has been sent successfully 🎭");
                form.reset();
                document.getElementById("experienceBox").style.display = "none";
                document.getElementById("motivationBox").style.display = "none";
            } else {
                throw new Error("Server error");
            }
        })
        .catch(err => {
            console.error(err);
            alert("Error! Please try again.");
        });
    });

});

function toggleTeam(hasExperience) {
    const experience = document.getElementById("experienceBox");
    const motivation = document.getElementById("motivationBox");

    if (hasExperience) {
        experience.style.display = "block";
        motivation.style.display = "none";
    } else {
        experience.style.display = "none";
        motivation.style.display = "block";
    }
}



