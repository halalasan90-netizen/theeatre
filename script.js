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

// Optional: prevent real submit (for demo)
document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Form submitted successfully!");
});
