const parcalar = ["Anakart", "Ram", "Ekran Kartı"];
var degisim = document.getElementsByClassName("degisim")[0];
var ekle = document.getElementById("ekle");
var ekle1 = document.getElementById("ekle1");
var ekle_btn = document.getElementById("ekle_btn");
var ekle_btn1 = document.getElementById("ekle_btn1");
var kaldir = document.getElementById("kaldir");
var kaldir1 = document.getElementById("kaldir1");

parcalar.forEach((eleman, index) => {
  //console.log(`${index} - ${eleman}`);
  degisim.innerHTML += `<div class="alert alert-danger" role="alert">${index}.index: ${eleman}</div>`;
});

ekle_btn.addEventListener("click", function () {
  parcalar.push(ekle.value);
  degisim.innerHTML = "";
  parcalar.forEach((eleman, index) => {
    //console.log(`${index} - ${eleman}`);
    degisim.innerHTML += `<div class="alert alert-danger" role="alert">${index}.index: ${eleman}</div>`;
  });
});

kaldir.addEventListener("click", () => {
  parcalar.pop();
  degisim.innerHTML = "";
  parcalar.forEach((eleman, index) => {
    //console.log(`${index} - ${eleman}`);
    degisim.innerHTML += `<div class="alert alert-danger" role="alert">${index}.index: ${eleman}</div>`;
  });
});

ekle_btn1.addEventListener("click", function () {
  parcalar.unshift(ekle1.value);
  degisim.innerHTML = "";
  parcalar.forEach((eleman, index) => {
    //console.log(`${index} - ${eleman}`);
    degisim.innerHTML += `<div class="alert alert-danger" role="alert">${index}.index: ${eleman}</div>`;
  });
});

kaldir1.addEventListener("click", () => {
  parcalar.shift();
  degisim.innerHTML = "";
  parcalar.forEach((eleman, index) => {
    //console.log(`${index} - ${eleman}`);
    degisim.innerHTML += `<div class="alert alert-danger" role="alert">${index}.index: ${eleman}</div>`;
  });
});

/* Yeni Kodlar */
var sirala = document.getElementsByClassName("sirala")[0];
var degistir = document.getElementsByClassName("degistir")[0];
var kesit = document.getElementsByClassName("kesit")[0];
var birlestir = document.getElementsByClassName("birlestir")[0];
const veriler = ["Mehmet", "Ahmet", "Zeynep", "Murat", "Celal"];
veriler.forEach((element) => {
  degistir.innerHTML += `<div class="alert alert-danger">${element}</div>`;
});

sirala.addEventListener("click", () => {
  degistir.innerHTML = "";
  veriler.sort().reverse().forEach((element) => {
    degistir.innerHTML += `<div class="alert alert-danger">${element}</div>`;
  });
});

kesit.addEventListener("click", () => {
  degistir.innerHTML = "";
  veriler.slice(1,3).forEach((element) => {
    degistir.innerHTML += `<div class="alert alert-danger">${element}</div>`;
  });
});

console.log(parcalar.concat(veriler).join(" - ")); // Join metodu dizileri birleştirdi ve string olarak döndürdü.

birlestir.addEventListener("click", () => {
  degistir.innerHTML = "";
  degistir.innerHTML = parcalar.concat(veriler).join("*");
  parcalar.concat(veriler).forEach((element) => {
    degistir.innerHTML += `<div class="alert alert-danger">${element}</div>`;
  });
});