function NamaHari(code) {
    switch (code) {
        case 1:
            console.log("Senin");
            break;
        case 2:
            console.log("Selasa");
            break;
        case 3:
            console.log("Rabu");
            break;
        case 4:
            console.log("Kamis");
            break;
        case 5:
            console.log("Jumat");
            break;
        case 6:
            console.log("Sabtu");
            break;
        case 7:
            console.log("Minggu");
            break;
        default:
            console.log("Kode tidak dikenal");
    }
}

NamaHari(1); // Senin
NamaHari(2); // Selasa
NamaHari(3); // Rabu
NamaHari(4); // Kamis
NamaHari(5); // Jumat
NamaHari(6); // Sabtu
NamaHari(7); // Minggu
NamaHari(8); // Kode tidak dikenal