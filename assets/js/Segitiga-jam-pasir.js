for (let i = 1; i <= 4; i++) {
    let pola = "";

    for (let j = 1; j <= 4 - i; j++) {
        pola += " ";
    }

    for (let j = 1; j <= 2 * i - 1; j++) {
        pola += "*";
    }

    console.log(pola);
}

for (let i = 3; i >= 1; i--) {
    let pola = "";

    for (let j = 1; j <= 4 - i; j++) {
        pola += " ";
    }

    for (let j = 1; j <= 2 * i - 1; j++) {
        pola += "*";
    }

    console.log(pola);
}