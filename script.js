function angka(number) {
    document.getElementById("input").value =
        document.getElementById("input").value + number;
}

function samaDengan() {
    if (document.getElementById("input").value == "") {
        document.getElementById("input").value = "Masukkan Angkanya";
    } else {
        let hasil = document.getElementById("input").value;
        document.getElementById("input").value = "Hello World!!";
    }
}

function hapus() {
    let result = document.getElementById("input").value;
    document.getElementById("input").value = result.substring(
        0,
        result.length - 1
    );
}

function reset() {
    document.getElementById("input").value = "";
}
