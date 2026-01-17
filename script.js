document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    const data = {
        fullname: formData.get("fullname"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        year: formData.get("year"),
        experience: formData.get("team"),
        worked_with: formData.get("worked_with"),
        director_name: formData.get("director_name"),
        project_title: formData.get("project_title"),
        motivation: formData.get("motivation")
    };

    fetch("https://script.google.com/macros/s/AKfycbwFMSPZvjgj5adcd2qZma8xTllkTpt6Mf10t8aRsBuQPU00iq5bIcazaQ8j-lblpzzlVA/exec", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(() => {
        alert("Your registration has been sent successfully 🎭");
        this.reset();
    })
    .catch(() => {
        alert("Error! Please try again.");
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

// Optional: prevent real submit (for demo)
document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Form submitted successfully!");
});

