let turkceDogru , turkceYanlis = 0;
let matematikDogru , matematikYanlis = 0;
let sosyalDogru , sosyalYanlis = 0;
let fenDogru , fenYanlis = 0;
let puan = 0;
let okulPuani = 0;

let yeniSatir = "\r\n";
let mesaj = "Tyt puan hesaplama uygulamasına hoşgeldiniz" +yeniSatir
+"1-Puan hesapla" +yeniSatir
+"2-Çıkış yap";

let secim = prompt(mesaj);
switch(secim){
    case "1":

    okulPuani = Number(prompt("Okul puanınızı giriniz"));
    turkceDogru = Number(prompt("Türkçe doğru sayısı"));
    turkceYanlis = Number(prompt("Türkçe yanlış sayısı"));

    matematikDogru = Number(prompt("Matematik doğru sayısı"));
    matematikYanlis = Number(prompt("Matematik yanlış sayısı"));

    sosyalDogru = Number(prompt("Sosyal doğru sayısı"));
    sosyalYanlis = Number(prompt("Sosyal yanlış sayısı"));

    fenDogru = Number(prompt("Fen doğru sayısı"));
    fenYanlis = Number(prompt("Fen yanlış sayısı"));


    let doğruSayisi = turkceDogru+matematikDogru+sosyalDogru+fenDogru;
    let yanlısSayisi = turkceYanlis+matematikYanlis+sosyalYanlis+fenYanlis;
    let kalanDogruSayisi = doğruSayisi - (yanlısSayisi/4);
    puan = (kalanDogruSayisi*4)+100 + okulPuani;
    alert("Tyt puanınız : " + puan);
    break;

    case "2":
        alert("Uygulamadan çıkış yapıldı");
        break;
    default :
    alert("Lütfen geçerli aralıkta değer giriniz");
    break;
}