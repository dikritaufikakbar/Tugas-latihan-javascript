const display = document.getElementById("display");
const history = document.getElementById("history");
const buttons = document.querySelector(".buttons");

let current = "0";        // angka yang sedang diketik
let previous = null;      // angka pertama
let operator = null;      // operator yang dipilih
let justEvaluated = false;
let hasError = false;

// Simbol ditulis dengan kode unicode supaya tetap tampil walau encoding file berbeda
const symbols = {
  "+": "+",
  "-": "\u2212", // −
  "*": "\u00D7", // ×
  "/": "\u00F7"  // ÷
};

/* ---------- Fungsi operasi matematika ---------- */
function add(a, b)      { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b)   { return b === 0 ? null : a / b; }

function calculate(a, b, op) {
  switch (op) {
    case "+": return add(a, b);
    case "-": return subtract(a, b);
    case "*": return multiply(a, b);
    case "/": return divide(a, b);
    default:  return b;
  }
}

/* ---------- Tampilan ---------- */
function formatResult(value) {
  // Buang selisih floating point, misal 0.1 + 0.2 = 0.30000000000000004
  return String(parseFloat(value.toPrecision(12)));
}

function updateDisplay(historyText) {
  display.textContent = current;
  if (historyText !== undefined) {
    history.textContent = historyText;
  } else if (operator !== null) {
    history.textContent = previous + " " + symbols[operator];
  } else {
    history.textContent = "";
  }

  // Tandai operator yang sedang aktif
  document.querySelectorAll(".btn.operator[data-operator]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.operator === operator);
  });
}

function showError() {
  current = "Error";
  previous = null;
  operator = null;
  hasError = true;
  updateDisplay("");
}

function resetIfError() {
  if (hasError) clearAll();
}

/* ---------- Aksi tombol ---------- */
function startNewNumberIfNeeded() {
  if (justEvaluated) {
    current = "0";
    justEvaluated = false;
  }
}

function inputNumber(digit) {
  resetIfError();
  startNewNumberIfNeeded();
  if (current.replace("-", "").replace(".", "").length >= 15) return;
  current = current === "0" ? digit : current + digit;
  updateDisplay();
}

function inputDecimal() {
  resetIfError();
  startNewNumberIfNeeded();
  if (!current.includes(".")) current += ".";
  updateDisplay();
}

function chooseOperator(op) {
  resetIfError();

  // Sudah ada operator dan angka kedua sudah diketik: hitung dulu (3 + 4 + ...)
  if (operator !== null && current !== "0") {
    const result = calculate(parseFloat(previous), parseFloat(current), operator);
    if (result === null) return showError();
    previous = formatResult(result);
  } else if (operator === null) {
    previous = current;
  }
  // Jika operator ditekan dua kali berturut-turut, operator diganti saja

  operator = op;
  justEvaluated = false;
  current = "0";
  updateDisplay();
}

function evaluate() {
  resetIfError();
  if (operator === null || previous === null) return;

  const a = previous;
  const b = current;
  const op = operator;
  const result = calculate(parseFloat(a), parseFloat(b), op);
  if (result === null) return showError();

  current = formatResult(result);
  previous = null;
  operator = null;
  justEvaluated = true;
  updateDisplay(a + " " + symbols[op] + " " + b + " =");
}

function percent() {
  resetIfError();
  current = formatResult(parseFloat(current) / 100);
  updateDisplay();
}

function backspace() {
  resetIfError();
  if (justEvaluated) return;
  const isSingleDigit = current.length === 1 || (current.length === 2 && current.startsWith("-"));
  current = isSingleDigit ? "0" : current.slice(0, -1);
  updateDisplay();
}

function clearAll() {
  current = "0";
  previous = null;
  operator = null;
  justEvaluated = false;
  hasError = false;
  updateDisplay();
}

/* ---------- Event klik (event delegation) ---------- */
buttons.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;

  if (btn.dataset.number !== undefined) return inputNumber(btn.dataset.number);
  if (btn.dataset.operator) return chooseOperator(btn.dataset.operator);

  switch (btn.dataset.action) {
    case "decimal":   return inputDecimal();
    case "equals":    return evaluate();
    case "percent":   return percent();
    case "backspace": return backspace();
    case "clear":     return clearAll();
  }
});

/* ---------- Dukungan keyboard ---------- */
document.addEventListener("keydown", (e) => {
  if (/^[0-9]$/.test(e.key)) inputNumber(e.key);
  else if (e.key === "." || e.key === ",") inputDecimal();
  else if (["+", "-", "*", "/"].includes(e.key)) { e.preventDefault(); chooseOperator(e.key); }
  else if (e.key === "Enter" || e.key === "=") { e.preventDefault(); evaluate(); }
  else if (e.key === "%") percent();
  else if (e.key === "Backspace") backspace();
  else if (e.key === "Escape" || e.key.toLowerCase() === "c") clearAll();
});

updateDisplay();