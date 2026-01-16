const numbBTN = document.querySelectorAll("button")
const textshow = document.getElementById("textshow")

let txt = "";
let eq = false;

numbBTN.forEach(btn => {
    btn.addEventListener("click", (event) => {
        try {
            switch (event.target.innerHTML) {
                case "=":
                    txt = eval(txt);
                    eq = true;
                    if (isNaN(txt)) {
                        txt = "Impossible!"
                        textshow.value = txt
                        console.log(textshow.value)
                        setTimeout(() => {
                            return textshow.value = "0"
                        }, 1500);
                    }
                    return textshow.value = txt;
                case "−":
                    txt += "-";
                    break;
                case "×":
                    txt += "*";
                    break;
                case "÷":
                    txt += "/";
                    break;
                case "AC":
                    txt = "";
                    break;
                case "DEL":
                    txt = txt.slice(0, -1)
                    break;
                default:
                    if (eq) txt = "";
                    txt += event.target.innerHTML
                    break;
            }
            if (eq) eq = false
            textshow.value = txt;
        } catch (err) {
            console.error(err)
        }
    })
})