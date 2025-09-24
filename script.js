function clearScreen() {
    document.getElementById("result").value = "";
}

function insert(value) {
    document.getElementById("result").value += value;
}

function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}

function deleteLast() {
    var p = document.getElementById("result").value;
    document.getElementById("result").value = p.slice(0, -1);
}
