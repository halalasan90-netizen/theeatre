document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("myForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(form);

        fetch("https://script.google.com/macros/s/AKfycbwvUQ0HUj8efXJrhXXspmuQXSII65ZiisA6edTV7GKV/dev", {
            method: "POST",
            body: formData
        })
        .then(response => response.text())
        .then(text => {
            if (text.trim() === "OK") {
                alert("Your registration has been sent successfully 🎭");
                form.reset();

                // Hide optional sections again
                document.getElementById("experienceBox").style.display = "none";
                document.getElementById("motivationBox").style.display = "none";
            } else {
                throw new Error("Server returned: " + text);
            }
        })
        .catch(error => {
            console.error(error);
            alert("Error! Please try again.");
        });
    });

});

/* Toggle experience / motivation boxes */
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
