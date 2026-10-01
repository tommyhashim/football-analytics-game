:root {
  --primary: #1e3c72;
  --secondary: #2a5298;
  --accent: #ffd700;
  --bg: #eef2f5;
  --card-bg: #ffffff;
  --success: #28a745;
  --danger: #dc3545;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: var(--bg);
  margin: 0;
  padding: 20px;
  color: #333;
}

header {
  text-align: center;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 20px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.card {
  background: var(--card-bg);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.grid-2col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

@media (max-width: 768px) {
  .grid-2col { grid-template-columns: 1fr; }
}

.difficulty-buttons {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

.btn-diff {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 6px;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

.easy { background-color: #28a745; }
.medium { background-color: #ff9800; }
.hard { background-color: #dc3545; }

.highlight {
  color: #1e3c72;
  font-size: 1.4rem;
}

.scroll-list {
  max-height: 420px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.scroll-list-sm {
  max-height: 140px;
  overflow-y: auto;
  background: #f9f9f9;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ddd;
}

.player-card {
  padding: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: #fafafa;
}

.player-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
}

.badge {
  background: #e1ecf4;
  color: #2c5d88;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: bold;
}

.stat-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 4px;
  background: #eef2f5;
  padding: 6px;
  border-radius: 4px;
  font-size: 0.75rem;
  text-align: center;
  margin-bottom: 6px;
}

.pos-stat {
  font-size: 0.8rem;
  color: #555;
}

.btn-primary, .btn-success, .btn-ucl {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 6px;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 15px;
}

.btn-primary { background-color: var(--secondary); }
.btn-primary:disabled { background-color: #ccc; cursor: not-allowed; }
.btn-success { background-color: var(--success); }
.btn-ucl { background: linear-gradient(135deg, #0f2027, #203a43, #2c5364); border: 1px solid var(--accent); color: var(--accent); }

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 15px;
}

th, td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.log-box {
  background: #111;
  color: #00ff66;
  font-family: monospace;
  padding: 15px;
  height: 160px;
  overflow-y: auto;
  border-radius: 6px;
}

.ucl-card {
  background: #0b132b;
  color: white;
  border: 2px solid var(--accent);
}

.hidden { display: none; }
