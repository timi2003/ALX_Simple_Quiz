
function add() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0
    const number2 = parseFloat(document.getElementById('number2').value) || 0

    const result = number1 + number2

    document.getElementById('calculation-result').textContent = result

    return result
    
}
document.getElementById('add').addEventListener('click', add)


function subtract() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0
    const number2 = parseFloat(document.getElementById('number2').value) || 0

    const result = number1 - number2

    document.getElementById('calculation-result').textContent = result

    return result
    
}
document.getElementById('subtract').addEventListener('click', subtract)


function multiply() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0
    const number2 = parseFloat(document.getElementById('number2').value) || 0

    const result = number1 * number2

    document.getElementById('calculation-result').textContent = result

    return result
    
}
document.getElementById('multiply').addEventListener('click', multiply)


function divide() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0
    const number2 = parseFloat(document.getElementById('number2').value) || 0

    const result = number1 / number2

    document.getElementById('calculation-result').textContent = result

    return result
    
}
document.getElementById('divide').addEventListener('click', divide)

