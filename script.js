document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("myForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(form);

        fetch("https://script.google.com/macros/s/AKfycbzzHAANi0T70N8F8qIopE2XVqXpbgkyKlNQ1yO86ptE/dev", {
            method: "POST",
            body: formData
        })
        .then(() => {
            alert("Your registration has been sent successfully 🎭");
            form.reset();
            document.getElementById("experienceBox").style.display = "none";
            document.getElementById("motivationBox").style.display = "none";
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
