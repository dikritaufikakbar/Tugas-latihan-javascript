function StatusNilaiSiswa (nilai){
    if (nilai >= 75){
        console.log("Siswa lulus ujian");
    } else {
        console.log("Siswa remedial ujian");
    }
}

StatusNilaiSiswa(90); // Lulus
StatusNilaiSiswa(50); // Remedial