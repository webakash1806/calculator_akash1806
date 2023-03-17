function clearScreen() {
    document.getElementById("result").value = ""
}

function cls() {
    let current = document.getElementById("result").value
    document.getElementById("result").value = current.slice(0, -1)
}

function display(value) {
    document.getElementById("result").value += value
}

function calculate1() {
    let v = document.getElementById("result").value
    console.log(v)
    let p = eval(v)
    document.getElementById("result").value = p
}