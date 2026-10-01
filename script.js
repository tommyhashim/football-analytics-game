// Local database (Free, offline)
const playerDatabase = [
  { id: 1, name: "Haaland", pos: "ST", cost: 60, xG: 0.85, progPasses: 1.2, tackles: 0.2 },
  { id: 2, name: "Kane", pos: "ST", cost: 45, xG: 0.70, progPasses: 3.8, tackles: 0.5 },
  { id: 3, name: "Rodri", pos: "MID", cost: 40, xG: 0.15, progPasses: 8.5, tackles: 2.8 },
  { id: 4, name: "Bellingham", pos: "MID", cost: 50, xG: 0.45, progPasses: 5.1, tackles: 1.9 },
  { id: 5, name: "Van Dijk", pos: "DEF", cost: 30, xG: 0.08, progPasses: 4.0, tackles: 3.2 }
];

let budget = 100;
let squad = [];

// Calculate custom Player Impact Score
function calculateImpact(p) {
  return ((p.xG * 30) + (p.progPasses * 5) + (p.tackles * 10)).toFixed(1);
}

function renderMarket() {
  const list = document.getElementById("player-list");
  list.innerHTML = "";
  
  playerDatabase.forEach(p => {
    const impact = calculateImpact(p);
    const card = document.createElement("div");
    card.className = "player-card";
    card.innerHTML = `
      <div>
        <strong>${p.name}</strong> (${p.pos}) <br>
        <small>xG/90: ${p.xG} | ProgPasses: ${p.progPasses} | Impact Score: <strong>${impact}</strong></small>
      </div>
      <button onclick="buyPlayer(${p.id})">€${p.cost}M</button>
    `;
    list.appendChild(card);
  });
}

function buyPlayer(id) {
  const player = playerDatabase.find(p => p.id === id);
  if (squad.length >= 3) return alert("Squad full!");
  if (squad.includes(player)) return alert("Already bought!");
  if (budget < player.cost) return alert("Insufficient budget!");

  squad.push(player);
  budget -= player.cost;

  updateUI();
}

function updateUI() {
  document.getElementById("budget").innerText = budget;
  document.getElementById("squad-count").innerText = squad.length;
  
  const squadList = document.getElementById("my-squad");
  squadList.innerHTML = squad.map(p => `<li>${p.name} - Impact: ${calculateImpact(p)}</li>`).join("");

  document.getElementById("sim-btn").disabled = squad.length < 3;
}

function simulateMatch() {
  const totalImpact = squad.reduce((sum, p) => sum + parseFloat(calculateImpact(p)), 0);
  const opponentImpact = 100;

  const resultDiv = document.getElementById("match-result");
  if (totalImpact + (Math.random() * 20) > opponentImpact) {
    resultDiv.innerText = `Victory! Your squad rating (${totalImpact.toFixed(1)}) defeated the opposition!`;
    resultDiv.style.color = "green";
  } else {
    resultDiv.innerText = `Defeat. Your squad rating (${totalImpact.toFixed(1)}) fell short against the opposition.`;
    resultDiv.style.color = "red";
  }
}

renderMarket();
