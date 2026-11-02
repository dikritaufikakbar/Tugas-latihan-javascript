function balikString(teks) {
  let hasil = "";

  for (let i = teks.length - 1; i >= 0; i--) {
    hasil = hasil + teks[i];
  }

  return hasil;
}

console.log(balikString("halo")); // olah
console.log(balikString("kasur")); // rusak
console.log(balikString("a"));     // a
console.log(balikString(""));      // (kosong)