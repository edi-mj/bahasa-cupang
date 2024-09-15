function translate(letter) {
  const kamus = [
    ["A", "BLUK_"],
    ["B", "BUL_"],
    ["C", "BULK_"],
    ["D", "BLUB_"],
    ["E", "BLUKBLUK_"],
    ["F", "BLUKBUL_"],
    ["G", "BLUKBULK_"],
    ["H", "BLUKBLUB_"],
    ["I", "BULBLUK_"],
    ["J", "BULBUL_"],
    ["K", "BULBULK_"],
    ["L", "BULBLUB_"],
    ["M", "BULKBLUK_"],
    ["N", "BULKBUL_"],
    ["O", "BULKBULK_"],
    ["P", "BULKBLUB_"],
    ["Q", "BLUBBLUK_"],
    ["R", "BLUBBUL_"],
    ["S", "BLUBBULK_"],
    ["T", "BLUBBLUB_"],
    ["U", "BLUKBLUKBLUK_"],
    ["V", "BLUKBLUKBUL_"],
    ["W", "BLUKBLUKBULK_"],
    ["X", "BLUKBLUKBLUB_"],
    ["Y", "BLUKBULBLUK_"],
    ["Z", "BLUKBULBUL_"],
  ];

  for (let i = 0; i < kamus.length; i++) {
    if (letter == kamus[i][0]) {
      return kamus[i][1];
    } else if (letter == "_") {
      return "";
    }
  }
  return letter;
}

// Select element input & output
const inputEl = document.getElementById("input-text");
const ouputEl = document.getElementById("output-text");

inputEl.addEventListener("input", function () {
  const inputText = inputEl.value.toUpperCase();
  const arrInput = inputText.split("");
  const ouputText = arrInput.map(function (huruf) {
    return translate(huruf);
  });
  ouputEl.textContent = ouputText.join("");
});
