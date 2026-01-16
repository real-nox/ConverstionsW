const unit1 = document.getElementById("unit1")
const worth1 = document.getElementById("worth1")
const unit2 = document.getElementById("unit2")
const worth2 = document.getElementById("worth2")
const unitconv = document.getElementById("unit-conv")

updateUnit()
function updateUnit() {
    fetch(`https://api.api-ninjas.com/v1/unitconversion?amount=${worth1.value}&unit=${unit1.value}`,
        {
            headers: {
                'X-Api-Key': `${process.env.API2}`
            }
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            worth2.value = data.conversions[unit2.value] * worth1.value;
            unitconv.textContent = `1 ${unit1.value} = ${data.conversions[unit2.value]} ${unit2.value}`
        })
}

unit1.addEventListener("change", updateUnit);
unit2.addEventListener("change", updateUnit);

worth1.addEventListener("input", updateUnit);
worth2.addEventListener("input", updateUnit);