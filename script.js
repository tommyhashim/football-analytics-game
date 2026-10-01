// Database with 6 Core Attributes (PAC, SHO, PAS, DRI, DEF, STR) + Positional Metrics
const playerDatabase = [
  // Goalkeepers
  { id: 1, name: "David Raya", pos: "GK", cost: 18, pac: 68, sho: 15, pas: 78, dri: 70, def: 84, str: 72, posStat: "Save %: 78.5% | Clean Sheets: 16" },
  { id: 2, name: "G. Vicario", pos: "GK", cost: 12, pac: 65, sho: 12, pas: 68, dri: 62, def: 81, str: 75, posStat: "Save %: 73.2% | Clean Sheets: 10" },
  
  // Defenders
  { id: 3, name: "W. Saliba", pos: "DEF", cost: 28, pac: 83, sho: 38, pas: 76, dri: 74, def: 89, str: 86, posStat: "Tackles/90: 2.9 | Interceptions: 1.8" },
  { id: 4, name: "Gabriel", pos: "DEF", cost: 22, pac: 78, sho: 45, pas: 68, dri: 65, def: 87, str: 89, posStat: "Tackles/90: 2.6 | Interceptions: 1.5" },
  { id: 5, name: "D. Udogie", pos: "DEF", cost: 15, pac: 88, sho: 62, pas: 72, dri: 81, def: 78, str: 79, posStat: "Tackles/90: 2.4 | Interceptions: 1.2" },
  { id: 6, name: "J. Gvardiol", pos: "DEF", cost: 25, pac: 82, sho: 65, pas: 79, dri: 80, def: 85, str: 84, posStat: "Tackles/90: 2.1 | Interceptions: 1.4" },
  { id: 7, name: "Dan Burn", pos: "DEF", cost: 8, pac: 58, sho: 32, pas: 60, dri: 55, def: 79, str: 88, posStat: "Tackles/90: 1.8 | Interceptions: 1.1" },

  // Midfielders
  { id: 8, name: "Declan Rice", pos: "MID", cost: 32, pac: 76, sho: 72, pas: 84, dri: 80, def: 86, str: 85, posStat: "Prog Passes: 6.8 | Chances Created: 1.8" },
  { id: 9, name: "M. Odegaard", pos: "MID", cost: 35, pac: 77, sho: 81, pas: 90, dri: 88, def: 62, str: 64, posStat: "Prog Passes: 8.9 | Chances Created: 3.2" },
  { id: 10, name: "A. Mac Allister", pos: "MID", cost: 24, pac: 70, sho: 78, pas: 85, dri: 82, def: 78, str: 74, posStat: "Prog Passes: 6.1 | Chances Created: 2.1" },
  { id: 11, name: "K. Mainoo", pos: "MID", cost: 15, pac: 74, sho: 68, pas: 80, dri: 84, def: 75, str: 72, posStat: "Prog Passes: 4.8 | Chances Created: 1.2" },
  { id: 12, name: "C. Gallagher", pos: "MID", cost: 12, pac: 79, sho: 74, pas: 76, dri: 78, def: 77, str: 80, posStat: "Prog Passes: 3.9 | Chances Created: 1.1" },

  // Strikers
  { id: 13, name: "Bukayo Saka", pos: "ST", cost: 38, pac: 87, sho: 84, pas: 83, dri: 88, def: 55, str: 72, posStat: "xG/90: 0.55 | Shots on Target: 62%" },
  { id: 14, name: "Ollie Watkins", pos: "ST", cost: 30, pac: 86, sho: 85, pas: 75, dri: 80, def: 42, str: 78, posStat: "xG/90: 0.62 | Shots on Target: 58%" },
  { id: 15, name: "Alexander Isak", pos: "ST", cost: 28, pac: 89, sho: 86, pas: 72, dri: 84, def: 35, str: 71, posStat: "xG/90: 0.58 | Shots on Target: 64%" },
  { id: 16, name: "Dominic Solanke", pos: "ST", cost: 16, pac: 81, sho: 80, pas: 68, dri: 74, def: 40, str: 82, posStat: "xG/90: 0.48 | Shots on Target: 51%" },
  { id: 17, name: "Anthony Gordon", pos: "ST", cost: 18, pac: 90, sho: 78, pas: 74, dri: 83, def: 45, str: 68, posStat: "xG/90: 0.41 | Shots on Target: 54%" },
  { id: 18, name: "Rodrigo Muniz", pos: "ST", cost: 9, pac: 72, sho: 77, pas: 58, dri: 70, def: 32, str: 80, posStat: "xG/90: 0.44 | Shots on Target: 48%" }
];

let budget = 300;
let squad = [];
let currentMatch = 1;

let leagueTable = [
  { name: "Your Club", pts: 0, gd: 0 },
  { name: "City Rivals", pts: 0, gd: 0 },
  { name: "Red Devils", pts: 0, gd: 0 },
  { name: "North Lions", pts: 0, gd: 0 },
  { name: "Coast FC", pts: 0, gd: 0 }
];

function setDifficulty(mode) {
  if (squad.length > 0) {
    if (!confirm("Changing difficulty resets squad! Continue?")) return;
  }
  squad = [];
  if (mode === 'easy') budget = 500;
  if (mode === 'medium') budget = 300;
  if (mode === 'hard') budget = 180;
  updateUI();
  renderMarket();
}

function calculateOVR(p) {
  return Math.round((p.pac + p.sho + p.pas + p.dri + p.def + p.str) / 6);
}

function renderMarket() {
  const list = document.getElementById("player-list");
  list.innerHTML = "";

  playerDatabase.forEach(p => {
    const ovr = calculateOVR(p);
    const card = document.createElement("div");
    card.className = "player-card";
    card.innerHTML = `
      <div class="player-header">
        <div><strong>${p.name}</strong> <span class="badge">${p.pos}</span></div>
        <button onclick="buyPlayer(${p.id})">Buy €${p.cost}M</button>
      </div>
      <div class="stat-grid">
        <div>PAC<br><strong>${p.pac}</strong></div>
        <div>SHO<br><strong>${p.sho}</strong></div>
        <div>PAS<br><strong>${p.pas}</strong></div>
        <div>DRI<br><strong>${p.dri}</strong></div>
        <div>DEF<br><strong>${p.def}</strong></div>
        <div>STR<br><strong>${p.str}</strong></div>
      </div>
      <div class="pos-stat"><small>${p.posStat} | OVR: <strong>${ovr}</strong></small></div>
    `;
    list.appendChild(card);
  });
}

function buyPlayer(id) {
  const player = playerDatabase.find(p => p.id === id);
  if (squad.length >= 11) return alert("Squad full! Maximum 11 players.");
  if (squad.some(p => p.id === player.id)) return alert("Already in squad!");
  if (budget < player.cost) return alert("Insufficient budget!");

  squad.push({ ...player, goals: 0, assists: 0 });
  budget -= player.cost;
  updateUI();
}

function updateUI() {
  document.getElementById("budget").innerText = budget;
  document.getElementById("squad-count").innerText = squad.length;

  const squadList = document.getElementById("my-squad");
  squadList.innerHTML = squad.map((p, index) => `
    <li class="player-card">
      <div class="player-header">
        <strong>${p.name} (${p.pos})</strong>
        <button onclick="sellPlayer(${index})" style="background:none; border:none; color:red; cursor:pointer;">[Sell]</button>
      </div>
      <div class="pos-stat"><small>G: ${p.goals} | A: ${p.assists} | OVR: ${calculateOVR(p)}</small></div>
    </li>
  `).join("");

  const gks = squad.filter(p => p.pos === "GK").length;
  const defs = squad.filter(p => p.pos === "DEF").length;
  const mids = squad.filter(p => p.pos === "MID").length;
  const sts = squad.filter(p => p.pos === "ST").length;

  const isValid = (squad.length === 11 && gks === 1 && defs === 4 && mids === 4 && sts === 2);
  document.getElementById("start-season-btn").disabled = !isValid;
}

function sellPlayer(index) {
  budget += squad[index].cost;
  squad.splice(index, 1);
  updateUI();
}

function startSeason() {
  document.getElementById("season-section").classList.remove("hidden");
  document.getElementById("start-season-btn").disabled = true;
  renderLeagueTable();
  logMatch("Season Started! Build match momentum across 10 games.");
}

function playNextLeagueMatch() {
  if (currentMatch > 10) return;

  const totalOVR = squad.reduce((sum, p) => sum + calculateOVR(p), 0) / 11;
  const strikers = squad.filter(p => p.pos === "ST");
  const mids = squad.filter(p => p.pos === "MID");

  let teamGoals = 0;
  if (totalOVR + (Math.random() * 15) > 75) {
    teamGoals = Math.floor(Math.random() * 3) + 1;
  }

  for (let i = 0; i < teamGoals; i++) {
    if (strikers.length > 0) {
      const scorer = strikers[Math.floor(Math.random() * strikers.length)];
      scorer.goals += 1;
    }
    if (mids.length > 0) {
      const assister = mids[Math.floor(Math.random() * mids.length)];
      assister.assists += 1;
    }
  }

  leagueTable.forEach(team => {
    let score = (team.name === "Your Club") ? teamGoals : Math.floor(Math.random() * 3);
    let oppScore = Math.floor(Math.random() * 3);

    if (score > oppScore) team.pts += 3;
    else if (score === oppScore) team.pts += 1;

    team.gd += (score - oppScore);

    if (team.name === "Your Club") {
      logMatch(`Match ${currentMatch}: Your Club ${score} - ${oppScore} Opponent`);
    }
  });

  leagueTable.sort((a, b) => b.pts - a.pts || b.gd - a.gd);
  renderLeagueTable();
  renderSquadStats();

  currentMatch++;
  if (currentMatch <= 10) {
    document.getElementById("match-num").innerText = currentMatch;
  } else {
    document.getElementById("sim-match-btn").disabled = true;
    checkUCLQualification();
  }

  updateUI();
}

function renderSquadStats() {
  const leadList = document.getElementById("squad-stats-lead");
  const sorted = [...squad].sort((a, b) => (b.goals + b.assists) - (a.goals + a.assists));
  leadList.innerHTML = sorted.map(p => `
    <li><strong>${p.name}</strong>: ⚽ ${p.goals} Goals | 🅰️ ${p.assists} Assists</li>
  `).join("");
}

function renderLeagueTable() {
  const body = document.getElementById("league-body");
  body.innerHTML = leagueTable.map((t, i) => `
    <tr>
      <td>${i + 1}</td>
      <td><strong>${t.name}</strong></td>
      <td>${t.pts}</td>
      <td>${t.gd}</td>
    </tr>
  `).join("");
}

function logMatch(text) {
  const log = document.getElementById("match-log");
  log.innerHTML += `<div>> ${text}</div>`;
  log.scrollTop = log.scrollHeight;
}

function checkUCLQualification() {
  const myPos = leagueTable.findIndex(t => t.name === "Your Club") + 1;
  const uclSection = document.getElementById("ucl-section");
  uclSection.classList.remove("hidden");

  if (myPos <= 4) {
    document.getElementById("ucl-status").innerText = `🎉 You finished #${myPos}! Qualified for the Champions League!`;
  } else {
    document.getElementById("ucl-status").innerText = `❌ You finished #${myPos}. Missed Champions League qualification.`;
    document.getElementById("ucl-btn").disabled = true;
  }
}

function playUCLSemiFinal() {
  const totalOVR = squad.reduce((sum, p) => sum + calculateOVR(p), 0) / 11;
  const uclLog = document.getElementById("ucl-log");
  
  const myGoals = Math.floor((totalOVR / 25) + (Math.random() * 2));
  const oppGoals = Math.floor(Math.random() * 3) + 1;

  if (myGoals >= oppGoals) {
    uclLog.innerHTML = `<div style="color: #00ff66;">🏆 CHAMPIONS LEAGUE VICTORY! You won the Final ${myGoals}-${oppGoals}!</div>`;
  } else {
    uclLog.innerHTML = `<div style="color: #ff3333;">💔 ELIMINATED! Defeated ${myGoals}-${oppGoals} in the Champions League Final.</div>`;
  }
}

renderMarket();
