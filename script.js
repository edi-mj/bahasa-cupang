function toCupang(letter) {
  const kamus = [
    ["A", "BLUK"],
    ["B", "BUL"],
    ["C", "BULK"],
    ["D", "BLUB"],
    ["E", "BLUKBLUK"],
    ["F", "BLUKBUL"],
    ["G", "BLUKBULK"],
    ["H", "BLUKBLUB"],
    ["I", "BULBLUK"],
    ["J", "BULBUL"],
    ["K", "BULBULK"],
    ["L", "BULBLUB"],
    ["M", "BULKBLUK"],
    ["N", "BULKBUL"],
    ["O", "BULKBULK"],
    ["P", "BULKBLUB"],
    ["Q", "BLUBBLUK"],
    ["R", "BLUBBUL"],
    ["S", "BLUBBULK"],
    ["T", "BLUBBLUB"],
    ["U", "BLUKBLUKBLUK"],
    ["V", "BLUKBLUKBUL"],
    ["W", "BLUKBLUKBULK"],
    ["X", "BLUKBLUKBLUB"],
    ["Y", "BLUKBULBLUK"],
    ["Z", "BLUKBULBUL"],
  ];

  for (let i = 0; i < kamus.length; i++) {
    if (letter == kamus[i][0]) {
      return kamus[i][1];
    }
  }
  return letter;
}

const kolomIndo = document.getElementById("b-indo");

const kolomCupang = document.getElementById("b-cupang");

kolomIndo.addEventListener("input", function () {
  const bIndo = kolomIndo.value.toUpperCase();
  const bCupang = bIndo.split("");
  const result = bCupang.map(function (huruf) {
    return toCupang(huruf);
  });

  kolomCupang.value = result.join("");
  console.log("berhasil sih");
});
