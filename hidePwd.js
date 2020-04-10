var inputs = document.getElementsByClassName("pntech20-show-pwd");
for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].type.toLowerCase() === "text") {
        inputs[i].setAttribute("type", "password");
        inputs[i].classList.remove("pntech20-show-pwd");
    }
}