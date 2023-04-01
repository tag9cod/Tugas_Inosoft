function sec(nomre) {
    reqem = document.getElementById("tri").innerHTML;
    reqem = reqem + nomre;
    document.getElementById("tri").innerHTML = reqem;

}

function menfi() {
    reqem = document.getElementById("tri").innerHTML;
    reqem = "-" + reqem;
    document.getElementById("tri").innerHTML = reqem;
}

function faiz() {
    reqem = document.getElementById("tri").innerHTML;
    reqem = reqem * 1 / 100;
    document.getElementById("tri").innerHTML = reqem;
}

function noqte() {
    reqem = document.getElementById("tri").innerHTML
    reqem = reqem + "."
    document.getElementById("tri").innerHTML = reqem;
}

function resetIphone() {
    reset = document.getElementById("tri").innerHTML
    reset = "";
    document.getElementById("tri").innerHTML = reset;
}

function azaltReqemi() {
    reqem = document.getElementById("tri").innerHTML
    document.getElementById("tri").innerHTML = reqem.substring(0, reqem.length - 1);


} function vurma() {
    reqem = document.getElementById("tri").innerHTML
    reqem = reqem + "*"
    document.getElementById("tri").innerHTML = reqem;
}

function bolme() {
    reqem = document.getElementById("tri").innerHTML
    reqem = reqem + "/"
    document.getElementById("tri").innerHTML = reqem;
}
function cixma() {
    reqem = document.getElementById("tri").innerHTML
    reqem = reqem + "-"
    document.getElementById("tri").innerHTML = reqem;

}
function toplama() {
    reqem = document.getElementById("tri").innerHTML
    reqem = reqem + "+"
    document.getElementById("tri").innerHTML = reqem;

}



function yoxlama() {
    if (isNaN(eval(neticemiz)) !== false) {
        alert("Səhflik var")
    }
}

function neticeIphone() {
    neticemiz = document.getElementById("tri").innerHTML
    yoxlama();
    document.getElementById("tri").innerHTML = eval(neticemiz)

}