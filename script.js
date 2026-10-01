// Database with 100 Real World Football Stars from Top Clubs across Europe, South America, and Asia
const playerDatabase = [
  // GOALKEEPERS (15)
  { id: 1, name: "Thibaut Courtois", pos: "GK", cost: 42, pac: 68, sho: 15, pas: 74, dri: 72, def: 89, str: 84, posStat: "Real Madrid | Save %: 81.2%" },
  { id: 2, name: "Alisson Becker", pos: "GK", cost: 40, pac: 65, sho: 15, pas: 85, dri: 70, def: 88, str: 82, posStat: "Liverpool | Save %: 79.5%" },
  { id: 3, name: "Ederson", pos: "GK", cost: 35, pac: 64, sho: 18, pas: 91, dri: 78, def: 84, str: 79, posStat: "Man City | Save %: 75.8%" },
  { id: 4, name: "Marc-André ter Stegen", pos: "GK", cost: 32, pac: 62, sho: 12, pas: 86, dri: 72, def: 86, str: 78, posStat: "Barcelona | Save %: 77.4%" },
  { id: 5, name: "Gianluigi Donnarumma", pos: "GK", cost: 30, pac: 60, sho: 10, pas: 72, dri: 64, def: 87, str: 85, posStat: "PSG | Save %: 78.0%" },
  { id: 6, name: "David Raya", pos: "GK", cost: 22, pac: 68, sho: 15, pas: 78, dri: 70, def: 84, str: 72, posStat: "Arsenal | Save %: 78.5%" },
  { id: 7, name: "Jan Oblak", pos: "GK", cost: 28, pac: 58, sho: 12, pas: 66, dri: 60, def: 88, str: 82, posStat: "Atlético Madrid | Save %: 78.9%" },
  { id: 8, name: "Mike Maignan", pos: "GK", cost: 25, pac: 66, sho: 14, pas: 80, dri: 68, def: 85, str: 80, posStat: "AC Milan | Save %: 76.8%" },
  { id: 9, name: "G. Vicario", pos: "GK", cost: 16, pac: 65, sho: 12, pas: 68, dri: 62, def: 81, str: 75, posStat: "Tottenham | Save %: 73.2%" },
  { id: 10, name: "Yassine Bounou", pos: "GK", cost: 18, pac: 60, sho: 12, pas: 70, dri: 64, def: 83, str: 80, posStat: "Al-Hilal | Save %: 76.1%" },
  { id: 11, name: "Manuel Neuer", pos: "GK", cost: 18, pac: 58, sho: 18, pas: 88, dri: 70, def: 84, str: 82, posStat: "Bayern Munich | Save %: 74.5%" },
  { id: 12, name: "Emiliano Martínez", pos: "GK", cost: 20, pac: 62, sho: 12, pas: 74, dri: 65, def: 84, str: 83, posStat: "Aston Villa | Save %: 75.9%" },
  { id: 13, name: "Unai Simón", pos: "GK", cost: 15, pac: 61, sho: 10, pas: 76, dri: 62, def: 82, str: 77, posStat: "Athletic Club | Save %: 74.0%" },
  { id: 14, name: "Gregor Kobel", pos: "GK", cost: 18, pac: 62, sho: 11, pas: 70, dri: 60, def: 84, str: 81, posStat: "Dortmund | Save %: 75.2%" },
  { id: 15, name: "Sentoa Bento", pos: "GK", cost: 10, pac: 62, sho: 10, pas: 65, dri: 58, def: 78, str: 76, posStat: "Al-Nassr | Save %: 72.1%" },

  // DEFENDERS (30)
  { id: 16, name: "Virgil van Dijk", pos: "DEF", cost: 45, pac: 78, sho: 60, pas: 78, dri: 72, def: 90, str: 92, posStat: "Liverpool | Tackles/90: 3.1" },
  { id: 17, name: "Rúben Dias", pos: "DEF", cost: 40, pac: 72, sho: 40, pas: 75, dri: 70, def: 89, str: 88, posStat: "Man City | Tackles/90: 2.8" },
  { id: 18, name: "William Saliba", pos: "DEF", cost: 38, pac: 83, sho: 38, pas: 76, dri: 74, def: 89, str: 86, posStat: "Arsenal | Tackles/90: 2.9" },
  { id: 19, name: "Antonio Rüdiger", pos: "DEF", cost: 35, pac: 82, sho: 52, pas: 71, dri: 68, def: 87, str: 90, posStat: "Real Madrid | Tackles/90: 2.7" },
  { id: 20, name: "Trent Alexander-Arnold", pos: "DEF", cost: 38, pac: 76, sho: 72, pas: 90, dri: 80, def: 74, str: 72, posStat: "Liverpool | Prog Passes: 8.2" },
  { id: 21, name: "Achraf Hakimi", pos: "DEF", cost: 36, pac: 92, sho: 74, pas: 80, dri: 82, def: 76, str: 76, posStat: "PSG | Crosses/90: 4.1" },
  { id: 22, name: "Alphonso Davies", pos: "DEF", cost: 32, pac: 95, sho: 66, pas: 76, dri: 85, def: 74, str: 77, posStat: "Bayern Munich | Dribbles: 3.8" },
  { id: 23, name: "Joško Gvardiol", pos: "DEF", cost: 32, pac: 82, sho: 65, pas: 79, dri: 80, def: 85, str: 84, posStat: "Man City | Tackles/90: 2.1" },
  { id: 24, name: "Gabriel Magalhães", pos: "DEF", cost: 30, pac: 78, sho: 45, pas: 68, dri: 65, def: 87, str: 89, posStat: "Arsenal | Aerials Won: 72%" },
  { id: 25, name: "Jules Koundé", pos: "DEF", cost: 28, pac: 84, sho: 50, pas: 75, dri: 74, def: 85, str: 80, posStat: "Barcelona | Tackles/90: 2.4" },
  { id: 26, name: "Ronald Araújo", pos: "DEF", cost: 30, pac: 85, sho: 48, pas: 65, dri: 66, def: 86, str: 88, posStat: "Barcelona | Sprint Speed: 34.8 km/h" },
  { id: 27, name: "Theo Hernández", pos: "DEF", cost: 32, pac: 93, sho: 72, pas: 76, dri: 82, def: 78, str: 82, posStat: "AC Milan | Prog Runs: 5.4" },
  { id: 28, name: "Marquinhos", pos: "DEF", cost: 26, pac: 78, sho: 55, pas: 74, dri: 72, def: 86, str: 80, posStat: "PSG | Interceptions: 2.1" },
  { id: 29, name: "Federico Dimarco", pos: "DEF", cost: 25, pac: 80, sho: 74, pas: 84, dri: 79, def: 75, str: 70, posStat: "Inter Milan | Key Passes: 2.3" },
  { id: 30, name: "Alessandro Bastoni", pos: "DEF", cost: 30, pac: 74, sho: 42, pas: 82, dri: 75, def: 86, str: 84, posStat: "Inter Milan | Prog Passes: 6.2" },
  { id: 31, name: "Jeremie Frimpong", pos: "DEF", cost: 30, pac: 94, sho: 72, pas: 78, dri: 85, def: 70, str: 68, posStat: "Leverkusen | Goals/90: 0.28" },
  { id: 32, name: "Alejandro Grimaldo", pos: "DEF", cost: 28, pac: 82, sho: 78, pas: 86, dri: 82, def: 74, str: 68, posStat: "Leverkusen | Key Passes: 2.9" },
  { id: 33, name: "Kyle Walker", pos: "DEF", cost: 18, pac: 89, sho: 60, pas: 74, dri: 76, def: 81, str: 82, posStat: "Man City | Recovery Speed: 92" },
  { id: 34, name: "Destiny Udogie", pos: "DEF", cost: 20, pac: 88, sho: 62, pas: 72, dri: 81, def: 78, str: 79, posStat: "Tottenham | Tackles/90: 2.4" },
  { id: 35, name: "Lisandro Martínez", pos: "DEF", cost: 22, pac: 76, sho: 48, pas: 78, dri: 76, def: 84, str: 82, posStat: "Man United | Pass Accuracy: 89%" },
  { id: 36, name: "Kalidou Koulibaly", pos: "DEF", cost: 16, pac: 74, sho: 48, pas: 68, dri: 66, def: 83, str: 88, posStat: "Al-Hilal | Duels Won: 68%" },
  { id: 37, name: "Eder Militão", pos: "DEF", cost: 28, pac: 84, sho: 50, pas: 70, dri: 72, def: 85, str: 84, posStat: "Real Madrid | Interceptions: 1.9" },
  { id: 38, name: "Nuno Mendes", pos: "DEF", cost: 22, pac: 89, sho: 60, pas: 74, dri: 80, def: 76, str: 74, posStat: "PSG | Sprint Speed: 34.1 km/h" },
  { id: 39, name: "Pau Torres", pos: "DEF", cost: 18, pac: 72, sho: 42, pas: 80, dri: 72, def: 82, str: 80, posStat: "Aston Villa | Prog Passes: 5.5" },
  { id: 40, name: "Gleison Bremer", pos: "DEF", cost: 24, pac: 80, sho: 45, pas: 65, dri: 64, def: 85, str: 88, posStat: "Juventus | Aerials Won: 74%" },
  { id: 41, name: "Benjamin Pavard", pos: "DEF", cost: 20, pac: 74, sho: 62, pas: 76, dri: 72, def: 83, str: 80, posStat: "Inter Milan | Tackles/90: 2.2" },
  { id: 42, name: "Marc Cucurella", pos: "DEF", cost: 16, pac: 78, sho: 55, pas: 74, dri: 76, def: 80, str: 75, posStat: "Chelsea | Tackles/90: 3.2" },
  { id: 43, name: "Dan Burn", pos: "DEF", cost: 8, pac: 58, sho: 32, pas: 60, dri: 55, def: 79, str: 88, posStat: "Newcastle | Clearance/90: 4.8" },
  { id: 44, name: "Aymeric Laporte", pos: "DEF", cost: 15, pac: 68, sho: 50, pas: 80, dri: 70, def: 82, str: 80, posStat: "Al-Nassr | Pass Accuracy: 91%" },
  { id: 45, name: "Nacho Fernández", pos: "DEF", cost: 10, pac: 72, sho: 45, pas: 70, dri: 68, def: 80, str: 78, posStat: "Al-Qadsiah | Experience: High" },

  // MIDFIELDERS (30)
  { id: 46, name: "Jude Bellingham", pos: "MID", cost: 55, pac: 85, sho: 86, pas: 85, dri: 88, def: 78, str: 84, posStat: "Real Madrid | Goals/90: 0.52" },
  { id: 47, name: "Kevin De Bruyne", pos: "MID", cost: 50, pac: 72, sho: 88, pas: 94, dri: 86, def: 65, str: 74, posStat: "Man City | Key Passes: 3.8" },
  { id: 48, name: "Rodri", pos: "MID", cost: 52, pac: 70, sho: 78, pas: 91, dri: 82, def: 89, str: 86, posStat: "Man City | Ball Recovery: 8.4" },
  { id: 49, name: "Florian Wirtz", pos: "MID", cost: 48, pac: 82, sho: 82, pas: 89, dri: 90, def: 52, str: 68, posStat: "Leverkusen | Assists/90: 0.44" },
  { id: 50, name: "Jamal Musiala", pos: "MID", cost: 48, pac: 88, sho: 80, pas: 84, dri: 93, def: 60, str: 66, posStat: "Bayern Munich | Dribbles: 4.2" },
  { id: 51, name: "Martin Ødegaard", pos: "MID", cost: 42, pac: 77, sho: 81, pas: 90, dri: 88, def: 62, str: 64, posStat: "Arsenal | Key Passes: 3.2" },
  { id: 52, name: "Declan Rice", pos: "MID", cost: 40, pac: 76, sho: 72, pas: 84, dri: 80, def: 86, str: 85, posStat: "Arsenal | Interceptions: 2.2" },
  { id: 53, name: "Federico Valverde", pos: "MID", cost: 44, pac: 89, sho: 82, pas: 84, dri: 82, def: 78, str: 82, posStat: "Real Madrid | Distance: 11.8 km" },
  { id: 54, name: "Pedri", pos: "MID", cost: 38, pac: 78, sho: 70, pas: 88, dri: 89, def: 68, str: 62, posStat: "Barcelona | Pass Accuracy: 90%" },
  { id: 55, name: "Gavi", pos: "MID", cost: 32, pac: 80, sho: 68, pas: 80, dri: 84, def: 76, str: 74, posStat: "Barcelona | Tackles/90: 2.8" },
  { id: 56, name: "Bruno Fernandes", pos: "MID", cost: 38, pac: 75, sho: 84, pas: 88, dri: 82, def: 68, str: 72, posStat: "Man United | Chances Created: 3.5" },
  { id: 57, name: "Eduardo Camavinga", pos: "MID", cost: 35, pac: 84, sho: 68, pas: 82, dri: 85, def: 81, str: 78, posStat: "Real Madrid | Tackles/90: 3.1" },
  { id: 58, name: "Aurelien Tchouaméni", pos: "MID", cost: 34, pac: 76, sho: 70, pas: 82, dri: 78, def: 85, str: 84, posStat: "Real Madrid | Interceptions: 2.4" },
  { id: 59, name: "Alexis Mac Allister", pos: "MID", cost: 30, pac: 70, sho: 78, pas: 85, dri: 82, def: 78, str: 74, posStat: "Liverpool | Prog Passes: 6.1" },
  { id: 60, name: "Nicolò Barella", pos: "MID", cost: 36, pac: 81, sho: 76, pas: 84, dri: 84, def: 77, str: 75, posStat: "Inter Milan | Key Passes: 2.1" },
  { id: 61, name: "Hakan Çalhanoğlu", pos: "MID", cost: 28, pac: 68, sho: 84, pas: 88, dri: 80, def: 74, str: 70, posStat: "Inter Milan | Long Passes: 7.2" },
  { id: 62, name: "Luka Modrić", pos: "MID", cost: 20, pac: 64, sho: 76, pas: 89, dri: 86, def: 65, str: 62, posStat: "Real Madrid | Pass Accuracy: 92%" },
  { id: 63, name: "Bernardo Silva", pos: "MID", cost: 38, pac: 76, sho: 78, pas: 86, dri: 91, def: 66, str: 64, posStat: "Man City | Pressures/90: 22" },
  { id: 64, name: "Sergej Milinković-Savić", pos: "MID", cost: 24, pac: 70, sho: 80, pas: 82, dri: 80, def: 75, str: 86, posStat: "Al-Hilal | Aerials Won: 3.2" },
  { id: 65, name: "Rúben Neves", pos: "MID", cost: 22, pac: 66, sho: 76, pas: 86, dri: 76, def: 76, str: 75, posStat: "Al-Hilal | Long Balls/90: 6.8" },
  { id: 66, name: "James Maddison", pos: "MID", cost: 25, pac: 74, sho: 80, pas: 86, dri: 84, def: 52, str: 62, posStat: "Tottenham | Key Passes: 2.8" },
  { id: 67, name: "Kobbie Mainoo", pos: "MID", cost: 22, pac: 74, sho: 68, pas: 80, dri: 84, def: 75, str: 72, posStat: "Man United | Dribble Success: 72%" },
  { id: 68, name: "Enzo Fernández", pos: "MID", cost: 28, pac: 72, sho: 74, pas: 85, dri: 80, def: 76, str: 75, posStat: "Chelsea | Prog Passes: 7.0" },
  { id: 69, name: "Moisés Caicedo", pos: "MID", cost: 26, pac: 78, sho: 62, pas: 80, dri: 78, def: 83, str: 82, posStat: "Chelsea | Tackles/90: 3.4" },
  { id: 70, name: "Granit Xhaka", pos: "MID", cost: 20, pac: 62, sho: 75, pas: 86, dri: 72, def: 78, str: 82, posStat: "Leverkusen | Pass Accuracy: 92%" },
  { id: 71, name: "Conor Gallagher", pos: "MID", cost: 16, pac: 79, sho: 74, pas: 76, dri: 78, def: 77, str: 80, posStat: "Atlético Madrid | Pressures: High" },
  { id: 72, name: "Franck Kessié", pos: "MID", cost: 16, pac: 74, sho: 72, pas: 76, dri: 76, def: 80, str: 87, posStat: "Al-Ahli | Duels Won: 65%" },
  { id: 73, name: "Marcelo Brozović", pos: "MID", cost: 15, pac: 68, sho: 72, pas: 84, dri: 78, def: 78, str: 74, posStat: "Al-Nassr | Distance: 12.1 km" },
  { id: 74, name: "Piotr Zieliński", pos: "MID", cost: 18, pac: 74, sho: 76, pas: 82, dri: 83, def: 62, str: 66, posStat: "Inter Milan | Key Passes: 2.0" },
  { id: 75, name: "Lucas Paquetá", pos: "MID", cost: 22, pac: 76, sho: 78, pas: 82, dri: 86, def: 70, str: 78, posStat: "West Ham | Dribbles/90: 2.8" },

  // STRIKERS & WINGERS (25)
  { id: 76, name: "Erling Haaland", pos: "ST", cost: 60, pac: 89, sho: 93, pas: 68, dri: 80, def: 45, str: 91, posStat: "Man City | xG/90: 0.88" },
  { id: 77, name: "Kylian Mbappé", pos: "ST", cost: 62, pac: 97, sho: 90, pas: 80, dri: 92, def: 38, str: 78, posStat: "Real Madrid | xG/90: 0.82" },
  { id: 78, name: "Vinícius Júnior", pos: "ST", cost: 58, pac: 95, sho: 84, pas: 81, dri: 94, def: 30, str: 68, posStat: "Real Madrid | Take-ons: 4.8" },
  { id: 79, name: "Harry Kane", pos: "ST", cost: 52, pac: 70, sho: 93, pas: 85, dri: 82, def: 48, str: 83, posStat: "Bayern Munich | Goals/90: 0.92" },
  { id: 80, name: "Mohamed Salah", pos: "ST", cost: 50, pac: 89, sho: 88, pas: 82, dri: 87, def: 45, str: 75, posStat: "Liverpool | G/A per 90: 1.1" },
  { id: 81, name: "Bukayo Saka", pos: "ST", cost: 45, pac: 87, sho: 84, pas: 83, dri: 88, def: 55, str: 72, posStat: "Arsenal | xG/90: 0.55" },
  { id: 82, name: "Lautaro Martínez", pos: "ST", cost: 42, pac: 82, sho: 87, pas: 74, dri: 84, def: 48, str: 84, posStat: "Inter Milan | Goals/90: 0.71" },
  { id: 83, name: "Cristiano Ronaldo", pos: "ST", cost: 35, pac: 78, sho: 88, pas: 74, dri: 80, def: 34, str: 77, posStat: "Al-Nassr | Goals/90: 0.85" },
  { id: 84, name: "Lionel Messi", pos: "ST", cost: 40, pac: 78, sho: 87, pas: 90, dri: 92, def: 32, str: 64, posStat: "Inter Miami | Key Passes: 3.6" },
  { id: 85, name: "Robert Lewandowski", pos: "ST", cost: 35, pac: 72, sho: 89, pas: 70, dri: 81, def: 42, str: 82, posStat: "Barcelona | xG/90: 0.68" },
  { id: 86, name: "Victor Osimhen", pos: "ST", cost: 42, pac: 90, sho: 85, pas: 66, dri: 78, def: 40, str: 85, posStat: "Galatasaray | Aerials: High" },
  { id: 87, name: "Rodrygo", pos: "ST", cost: 38, pac: 88, sho: 82, pas: 79, dri: 88, def: 42, str: 66, posStat: "Real Madrid | Goals in UCL: High" },
  { id: 88, name: "Lamine Yamal", pos: "ST", cost: 40, pac: 88, sho: 78, pas: 82, dri: 90, def: 35, str: 60, posStat: "Barcelona | Dribbles/90: 3.9" },
  { id: 89, name: "Alexander Isak", pos: "ST", cost: 32, pac: 89, sho: 86, pas: 72, dri: 84, def: 35, str: 71, posStat: "Newcastle | xG/90: 0.58" },
  { id: 90, name: "Ollie Watkins", pos: "ST", cost: 30, pac: 86, sho: 85, pas: 75, dri: 80, def: 42, str: 78, posStat: "Aston Villa | xG/90: 0.62" },
  { id: 91, name: "Rafael Leão", pos: "ST", cost: 36, pac: 93, sho: 80, pas: 76, dri: 89, def: 30, str: 78, posStat: "AC Milan | Sprint Speed: 35 km/h" },
  { id: 92, name: "Khvicha Kvaratskhelia", pos: "ST", cost: 34, pac: 86, sho: 80, pas: 81, dri: 88, def: 40, str: 72, posStat: "Napoli | Take-ons: 4.1" },
  { id: 93, name: "Son Heung-min", pos: "ST", cost: 32, pac: 86, sho: 87, pas: 80, dri: 83, def: 42, str: 68, posStat: "Tottenham | Shot Conversion: 24%" },
  { id: 94, name: "Neymar Jr", pos: "ST", cost: 30, pac: 80, sho: 82, pas: 86, dri: 92, def: 30, str: 60, posStat: "Al-Hilal | Key Passes: 3.1" },
  { id: 95, name: "Raphinha", pos: "ST", cost: 32, pac: 88, sho: 81, pas: 80, dri: 85, def: 50, str: 68, posStat: "Barcelona | Pressures: High" },
  { id: 96, name: "Cole Palmer", pos: "ST", cost: 38, pac: 82, sho: 84, pas: 84, dri: 86, def: 45, str: 68, posStat: "Chelsea | G/A per 90: 0.95" },
  { id: 97, name: "Kai Havertz", pos: "ST", cost: 26, pac: 80, sho: 80, pas: 78, dri: 81, def: 52, str: 78, posStat: "Arsenal | Aerials Won: 3.5" },
  { id: 98, name: "Alejandro Garnacho", pos: "ST", cost: 22, pac: 89, sho: 76, pas: 72, dri: 83, def: 35, str: 62, posStat: "Man United | Shots/90: 3.1" },
  { id: 99, name: "Dominic Solanke", pos: "ST", cost: 18, pac: 81, sho: 80, pas: 68, dri: 74, def: 40, str: 82, posStat: "Tottenham | xG/90: 0.48" },
  { id: 100, name: "Mitrovic", pos: "ST", cost: 18, pac: 70, sho: 83, pas: 65, dri: 72, def: 38, str: 88, posStat: "Al-Hilal | Goals/90: 0.80" }
];

let budget = 300;
let squad = [];
let currentMatch = 1;
let uclStage = 0; // 0 = Semi Final, 1 = Final

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

  squad.push({ ...player, goals: 0, assists: 0, gp: 0 });
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
        <button onclick="sellPlayer(${index})" style="background:none; border:none; color:#ef4444; cursor:pointer;">[Sell]</button>
      </div>
      <div class="pos-stat"><small>OVR: ${calculateOVR(p)}</small></div>
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
  document.getElementById("setup-phase").classList.add("hidden");
  document.getElementById("simulation-phase").classList.remove("hidden");
  
  // Reset match simulation button state
  document.getElementById("sim-match-btn").disabled = false;
  document.getElementById("match-num").innerText = currentMatch;

  renderLeagueTable();
  logMatch("League Season Started! 10 matches ahead. Click 'Play Next Match' to simulate.");
}

function playNextLeagueMatch() {
  if (currentMatch > 10) return;

  // Increment Games Played for all 11 squad players
  squad.forEach(p => p.gp += 1);

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

  currentMatch++;
  if (currentMatch <= 10) {
    document.getElementById("match-num").innerText = currentMatch;
  } else {
    document.getElementById("sim-match-btn").disabled = true;
    checkUCLQualification();
  }
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

  if (myPos <= 4) {
    document.getElementById("ucl-section").classList.remove("hidden");
    document.getElementById("ucl-status").innerText = `🎉 You finished #${myPos} in the league! Qualified for the Champions League!`;
    document.getElementById("ucl-btn").innerText = "Play UCL Semi-Final";
  } else {
    logMatch(`Finished #${myPos}. Missed Champions League qualification.`);
    showFinalSummary();
  }
}

function playUCLStage() {
  squad.forEach(p => p.gp += 1);
  const totalOVR = squad.reduce((sum, p) => sum + calculateOVR(p), 0) / 11;
  const uclLog = document.getElementById("ucl-log");
  const strikers = squad.filter(p => p.pos === "ST");
  const mids = squad.filter(p => p.pos === "MID");

  const myGoals = Math.floor((totalOVR / 28) + (Math.random() * 2));
  const oppGoals = Math.floor(Math.random() * 3);

  for (let i = 0; i < myGoals; i++) {
    if (strikers.length > 0) strikers[Math.floor(Math.random() * strikers.length)].goals += 1;
    if (mids.length > 0) mids[Math.floor(Math.random() * mids.length)].assists += 1;
  }

  if (uclStage === 0) {
    if (myGoals >= oppGoals) {
      uclLog.innerHTML += `<div style="color: #4ade80;">✅ SEMI-FINAL WIN! Advanced to the UCL Final (${myGoals}-${oppGoals}).</div>`;
      uclStage = 1;
      document.getElementById("ucl-btn").innerText = "Play Champions League Final";
    } else {
      uclLog.innerHTML += `<div style="color: #ef4444;">❌ ELIMINATED in Semi-Final (${myGoals}-${oppGoals}).</div>`;
      document.getElementById("ucl-btn").disabled = true;
      setTimeout(showFinalSummary, 2000);
    }
  } else if (uclStage === 1) {
    if (myGoals >= oppGoals) {
      uclLog.innerHTML += `<div style="color: #fbbf24; font-weight: bold;">🏆 CHAMPIONS LEAGUE WINNERS! Won the Final ${myGoals}-${oppGoals}!</div>`;
    } else {
      uclLog.innerHTML += `<div style="color: #ef4444;">💔 LOST IN THE FINAL (${myGoals}-${oppGoals}). Runner-up!</div>`;
    }
    document.getElementById("ucl-btn").disabled = true;
    setTimeout(showFinalSummary, 2000);
  }
}

function showFinalSummary() {
  document.getElementById("summary-section").classList.remove("hidden");

  const sortedByGoals = [...squad].sort((a, b) => b.goals - a.goals);
  const sortedByAssists = [...squad].sort((a, b) => b.assists - a.assists);
  const sortedByMVP = [...squad].sort((a, b) => ((b.goals * 2) + b.assists + calculateOVR(b)) - ((a.goals * 2) + a.assists + calculateOVR(a)));

  const topScorer = sortedByGoals[0];
  const topAssister = sortedByAssists[0];
  const mvp = sortedByMVP[0];

  document.getElementById("top-scorer").innerText = `${topScorer.name} (${topScorer.goals} Goals)`;
  document.getElementById("top-assister").innerText = `${topAssister.name} (${topAssister.assists} Assists)`;
  document.getElementById("mvp-player").innerText = `${mvp.name} (${calculateOVR(mvp)} OVR, ${mvp.goals + mvp.assists} G/A)`;

  const summaryBody = document.getElementById("summary-body");
  summaryBody.innerHTML = squad.map(p => `
    <tr>
      <td><strong>${p.name}</strong></td>
      <td>${p.pos}</td>
      <td>${calculateOVR(p)}</td>
      <td>${p.gp}</td>
      <td>⚽ ${p.goals}</td>
      <td>🅰️ ${p.assists}</td>
      <td><strong>${p.goals + p.assists}</strong></td>
    </tr>
  `).join("");
}

renderMarket();