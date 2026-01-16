//Vars
const currency1 = document.getElementById("currency1")
const worth1 = document.getElementById("worth1")
const currency2 = document.getElementById("currency2")
const worth2 = document.getElementById("worth2")
const exchangerate = document.getElementById("exchange-rate")

//Function
updateRate()

function updateRate() {
    fetch(`${process.env.API1}/${currency1.value}`)
        .then((res) => res.json())
        .then(data => {
            worth2.value = data.conversion_rates[currency2.value] * worth1.value
            exchangerate.textContent = `1 ${currency1.value} = ${data.conversion_rates[currency2.value]} ${currency2.value}`
        })

}

//Events
currency1.addEventListener("change", updateRate);
currency2.addEventListener("change", updateRate);

worth1.addEventListener("input", updateRate)
worth2.addEventListener("input", updateRate)