const quotes = [
  "Great teachers inspire.",
  "Learning never stops.",
  "Stay curious."
];

let index = 0;

setInterval(() => {
  index = (index + 1) % quotes.length;
  document.getElementById("quote").textContent = quotes[index];
}, 3000);

const facts = ["Loves coding", "Enjoys teaching", "Passionate"];

function showFact() {
  const random = Math.floor(Math.random() * facts.length);
  document.getElementById("fact").textContent = facts[random];
}
