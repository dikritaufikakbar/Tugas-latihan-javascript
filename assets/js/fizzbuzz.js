function Anjaygaming(n) {
  if (n % 12 === 0) {
    console.log("Anjaygaming");
  } else if (n % 6 === 0) {
    console.log("Anjay");
  } else if (n % 4 === 0) {
    console.log("gaming");
  } else {
    console.log(n);
  }
}

for (let i = 1; i <= 12; i++) {
  Anjaygaming(i);
}