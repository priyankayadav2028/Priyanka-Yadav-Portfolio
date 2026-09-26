let form = document.querySelector("#contactForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.querySelector("#name").value;

    form.innerHTML =
        "<h3>Thank You, " + name + ".</h3>" +
        "<p>Your message has been received. I will reply soon.</p>";
});
