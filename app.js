var num1 = document.getElementById("n1");
var num2 = document.getElementById("n2");
var toplama = document.getElementById("toplam");
var cikart = document.getElementById("cikartma");
var bolme = document.getElementById("bolum");
var carpım = document.getElementById("carpma");
var sonuc = document.getElementById("collection");

toplama.onclick = function () {
    var toplam = Number(num1.value) + Number(num2.value);
    collection.innerHTML = toplam;
}
cikart.onclick = function () {
    var cikartma = Number(num1.value) - Number(num2.value);
    collection.innerHTML = cikartma;
}
bolme.onclick = function () {
    var bolum = Number(num1.value) / Number(num2.value);
    collection.innerHTML = bolum;
}
carpım.onclick = function () {
    var carpma = Number(num1.value) * Number(num2.value);
    collection.innerHTML = carpma;
}