function disp(val) {
    document.getElementById("dispIN").value += val;
}

function ans(val) {
    var x = document.getElementById("dispIN").value;
    var y = eval(x);
    document.getElementById("dispHIST").value = x;
    document.getElementById("dispIN").value = y;
}

function resc(val) {
    document.getElementById("dispHIST").value = "";
    var z = document.getElementById("dispIN").value;
    document.getElementById("dispIN").value = z.substr(0, z.length - 1);
}

function res(val) {
    document.getElementById("dispHIST").value = "";
    document.getElementById("dispIN").value = "";
}