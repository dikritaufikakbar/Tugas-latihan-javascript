for (let i = 1; i <= 4; i++) {
    let pola = "";

    for (let j = 1; j <= 4 - i; j++) {
        pola += " ";
    }

    for (let j = 1; j <= i; j++) {
        pola += i;
    }

    console.log(pola);
}