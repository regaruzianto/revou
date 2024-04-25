function tampilkan (){
  
  var angkainput = document.getElementById("inputCelcius").value ;
 
  if (angkainput == "") { alert ("cek kembali input") }     //validasi input
  else {
    var hasil = angkainput * 1.8 + 32;
    return console.log(angkainput +" "+ hasil),                                               //display hasil kalkulasi
    document.getElementById("inputFahrenheit").value = hasil.toFixed(2),
    document.getElementById("caraKalkulasi").value = angkainput + " *(9/5)+32 = "+ hasil.toFixed(2) + " °F";
  };
}

function resetall (){                                           //reset semua input
    document.getElementById("inputCelcius").value = "";
    document.getElementById("inputFahrenheit").value ="";
    document.getElementById("caraKalkulasi").value ="";
    document.getElementById("inputCelcius2").value = "";
    document.getElementById("inputFahrenheit2").value ="";
}


function tampilkanReverse (){
  
  var angkainput = document.getElementById("inputFahrenheit2").value ;
 
  if (angkainput == "") { alert ("cek kembali input") }
  else {
    var hasil = (angkainput - 32) * 5/ 9;
    
    return console.log(angkainput +" "+ hasil), 
    document.getElementById("inputCelcius2").value = hasil.toFixed(2),
    document.getElementById("caraKalkulasi").value = "(" + angkainput + "-32)*5/9 = "+ hasil.toFixed(2) +" °C";
  };
}
var isReverse = true;

function reverse (){

  var CtoF = document.getElementById("C-to-F");
  var FtoC = document.getElementById("F-to-C");

  if (isReverse) {
    console.log(isReverse);
    FtoC.style.display = "block";
    CtoF.style.display = "none" ;
    isReverse = false;
  }
  else {
    console.log(isReverse);
    FtoC.style.display = "none";
    CtoF.style.display = "block" ;
    isReverse = true;
  }

}

function konversi (){
  if (isReverse == true){
    tampilkan();
  }
  else {
    tampilkanReverse();
  }
}

// document.getElementById("tombolKonversi").addEventListener("click", () => konversi());