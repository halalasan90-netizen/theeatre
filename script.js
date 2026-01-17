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

    fetch("PASTE_YOUR_SCRIPT_URL_HERE", {
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
