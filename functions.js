const input = document.getElementById("input-text");
const output = document.getElementById("output-text");
const button = document.querySelectorAll("button");

function onlyContainsLowercase(str) {
    return /^[a-z0-9/ /ñ:;,.¿?¡!]+$/.test(str);
}

function encrypt() {
    const chars = {
        e: "bunga",
        i: "unga",
        a: "wryy",
        o: "xd",
        u: "uunga",
        b: "sunga",
        c: "yu",
        d: "jk",
        f: "cv",
        g: "qo",
        h: "zp",
        j: "eb",
        k: "sa",
        l: "fg",
        m: "hi",
        n: "tl",
        p: "ux",
        q: "vd",
        r: "an",
        s: "mo",
        t: "qz",
        v: "ce",
        w: "ib",
        x: "pl",
        y: "ds",
        z: "fh",       
    }

    if (onlyContainsLowercase(input.value)) {
        let encriptedText = input.value.replace(/[aeiou]/g, c => chars[c]);
        document.getElementById("not-found").style.display = "none";
        document.getElementById("result").style.display = "block";
        output.textContent = encriptedText;
    } else {
        alert("Recuerda, sólo letras minúsculas y sin acentos");
    }

    document.getElementById("paste").style.display = "none";
}

function encryptDark() {
    const chars = {
        e: "bunga",
        i: "unga",
        a: "wryy",
        o: "xd",
        u: "uunga",
        b: "sunga",
        c: "yu",
        d: "jk",
        f: "cv",
        g: "qo",
        h: "zp",
        j: "eb",
        k: "sa",
        l: "fg",
        m: "hi",
        n: "tl",
        p: "ux",
        q: "vd",
        r: "an",
        s: "mo",
        t: "qz",
        v: "ce",
        w: "ib",
        x: "pl",
        y: "ds",
        z: "fh",
    }

    if (onlyContainsLowercase(input.value)) {
        let encriptedText = input.value.replace(/[aeiou]/g, c => chars[c]);
        document.getElementById("not-found").style.display = "none";
        document.getElementById("result").style.display = "block";
        output.textContent = encriptedText;
    } else {
        alert("Recuerda, sólo letras minúsculas y sin acentos");
    }

    document.getElementById("paste").style.display = "none";
}

function desencrypt() {
    const chars = {
        e: "bunga",
        i: "unga",
        a: "wryy",
        o: "xd",
        u: "uunga",
        b: "sunga",
        c: "yu",
        d: "jk",
        f: "cv",
        g: "qo",
        h: "zp",
        j: "eb",
        k: "sa",
        l: "fg",
        m: "hi",
        n: "tl",
        p: "ux",
        q: "vd",
        r: "an",
        s: "mo",
        t: "qz",
        v: "ce",
        w: "ib",
        x: "pl",
        y: "ds",
        z: "fh",
        }

    if (onlyContainsLowercase(input.value)) {
        let desencriptedText = input.value.replace(/ai|enter|imes|ober|ufat/g, c => chars[c]);
        document.getElementById("not-found").style.display = "none";
        document.getElementById("result").style.display = "block";
        output.textContent = desencriptedText;
    } else {
        alert("Recuerda, sólo letras minúsculas y sin acentos");
    }

    document.getElementById("paste").style.display = "none";
}

function desencryptDark() {
    const chars = {
        e: "bunga",
        i: "unga",
        a: "wryy",
        o: "xd",
        u: "uunga",
        b: "sunga",
        c: "yu",
        d: "jk",
        f: "cv",
        g: "qo",
        h: "zp",
        j: "eb",
        k: "sa",
        l: "fg",
        m: "hi",
        n: "tl",
        p: "ux",
        q: "vd",
        r: "an",
        s: "mo",
        t: "qz",
        v: "ce",
        w: "ib",
        x: "pl",
        y: "ds",
        z: "fh",
        }

    if (onlyContainsLowercase(input.value)) {
        let desencriptedText = input.value.replace(/[0-9]/g, c => chars[c]);
        document.getElementById("not-found").style.display = "none";
        document.getElementById("result").style.display = "block";
        output.textContent = desencriptedText;
    } else {
        alert("Recuerda, sólo letras minúsculas y sin acentos");
    }

    document.getElementById("paste").style.display = "none";
}

function copy() {
    let copyText = output.innerText;
    navigator.clipboard.writeText(copyText);
    document.getElementById("paste").style.display = "block";
}

function paste() {
    navigator.clipboard
        .readText()
        .then((clipText) => (input.value = clipText));
}

button.forEach(element => element.addEventListener("click", (event) => {
    element.classList.add("pulse");
    setTimeout(function() {
        element.classList.remove("pulse");
    }, 800);
}));
