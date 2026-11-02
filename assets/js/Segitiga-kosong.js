for (let i = 1; i <= 5; i++) {
    let pola = "";

    for (let j = 1; j <= 5 - i; j++) {
        pola += " ";
    }

    for (let j = 1; j <= 2 * i - 1; j++) {
        if (i == 1 || i == 5 || j == 1 || j == 2 * i - 1) {
            pola += "*";
        } else {
            pola += " ";
        }
    }

    console.log(pola);
}