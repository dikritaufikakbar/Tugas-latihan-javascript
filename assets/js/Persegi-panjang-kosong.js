for (let i = 1; i <= 5; i++) {
    let pola = "";

    for (let j = 1; j <= 8; j++) {
        if (i == 1 || i == 5 || j == 1 || j == 8) {
            pola += "*";
        } else {
            pola += " ";
        }
    }

    console.log(pola);
}