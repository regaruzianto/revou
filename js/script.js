function tampilkan (){
  
   var angkainput = document.getElementById("inputCelcius").value ;
 
   if (angkainput == "") { alert ("cek kembali input") }
  else {
        var hasil = angkainput * 1.8 + 32;
        return console.log(angkainput +" "+ hasil), 
        document.getElementById("inputFahrenheit").value = hasil,
        document.getElementById("caraKalkulasi").value = angkainput + " *(9/5)+32 = "+ hasil;
  };
}

function resetall (){
    document.getElementById("inputCelcius").value = "";
    document.getElementById("inputFahrenheit").value ="";
    document.getElementById("caraKalkulasi").value ="";
}