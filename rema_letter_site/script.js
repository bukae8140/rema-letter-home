
const quotes = [
  "당신은 충분히 잘하고 있어요.",
  "이 순간도 곧 지나갑니다.",
  "당신의 마음은 소중해요.",
  "지금 울어도 괜찮아요.",
  "작은 용기들이 모여 큰 사랑이 됩니다."
];

function getRandomQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("daily-quote").innerText = `"${quote}"`;
}

function respond() {
  const input = document.getElementById("userInput").value.trim();
  const responseBox = document.getElementById("response");

  if (input === "") {
    responseBox.innerText = "무엇이든 편하게 적어주세요. 레마는 당신의 이야기를 듣고 싶어요.";
    return;
  }

  responseBox.innerText = `레마: "${input}"라는 마음, 참 고맙고 소중해요. 당신은 혼자가 아니에요.`;
}

window.onload = getRandomQuote;
