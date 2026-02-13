document.addEventListener("DOMContentLoaded", function() {
    const openButtons = document.querySelectorAll(".popup_demo_btn-js");
    const popup = document.getElementById("popup_demo");
    const closeButton = document.getElementById("popup_demo_close-js");

    openButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            popup.classList.add("show");
        });
    });

    if (closeButton) {
        closeButton.addEventListener("click", () => {
            popup.classList.remove("show");
        });
    }

    popup.addEventListener("click", (e) => {
        if (e.target === popup) {
            popup.classList.remove("show");
        }
    });
});