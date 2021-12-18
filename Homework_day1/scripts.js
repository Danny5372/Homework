
function calculation (){
    const inputNumber_a = document.getElementById("insertNumber1")
    const inputNumber_b = document.getElementById("insertNumber2")
    const a = Number(inputNumber_a.value)
    const b = Number(inputNumber_b.value)
    const results = -b/a
    console.log(results)
    const pResultText = document.getElementById("printedResults")
    if (a == 0){
        alert("Error: cannot be divided by zero")
        pResultText.textContent = "Error: divided by zero"
    }
    else {
    pResultText.textContent = "Your results are: " + results
    }
}

