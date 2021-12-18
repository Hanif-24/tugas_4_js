
  var tinggi_siswa_1 = 170;
  var tinggi_siswa_2 = 172;
  var tinggi_siswa_3 = 182;

  if (tinggi_siswa_1 > tinggi_siswa_2){
    if (tinggi_siswa_1 > tinggi_siswa_3){
      console.log("Urutan tinggi Siswa : Siswa Pertama, Siswa Ketiga, Siswa Kedua");
    }else {
      console.log("Urutan tinggi Siswa : Siswa Ketiga, Siswa Pertama, Siswa Kedua");
    }
  }else {
    if(tinggi_siswa_2 > tinggi_siswa_3) {
      console.log("Urutan tinggi Siswa : Siswa Kedua, Siswa Ketiga, Siswa Pertama");
    }else {
      console.log("Urutan tinggi Siswa : Siswa Ketiga, Siswa Kedua, Siswa Pertama");
    }
}
