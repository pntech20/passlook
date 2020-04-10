function getPwdInputs() {
    var pwdInputs = [];
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type.toLowerCase() === "password") {
            pwdInputs.push(inputs[i]);
        }
    }
    return pwdInputs;
}

var inputs = document.getElementsByTagName("input");
for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].type.toLowerCase() === "password") {
        inputs[i].setAttribute("type", "text");
        inputs[i].classList.add("pntech20-show-pwd");
    }
}