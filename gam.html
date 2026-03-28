<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Stick Hero Ultimate+</title>

<style>
body {
  margin: 0;
  background: #222;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: Arial;
  touch-action: none;
  color: white;
}

canvas {
  background: linear-gradient(#87CEEB, #e0f7ff);
  border-radius: 10px;
}

button, select {
  position: absolute;
  padding: 8px 15px;
  font-size: 14px;
  border: none;
  border-radius: 5px;
}

#startBtn { top: 40%; }
#restartBtn { top: 50%; display:none; }

#skinSelect {
  top: 60%;
}

#leaderboard {
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 14px;
  background: rgba(0,0,0,0.5);
  padding: 10px;
  border-radius: 5px;
}
</style>
</head>

<body>

<canvas id="gameCanvas" width="375" height="375"></canvas>

<button id="startBtn">Start</button>
<button id="restartBtn">Restart</button>

<select id="skinSelect">
  <option value="black">Black</option>
  <option value="red">Red</option>
  <option value="blue">Blue</option>
  <option value="green">Green</option>
</select>

<div id="leaderboard"></div>

<script>
// ===== CONFIG =====
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");
const skinSelect = document.getElementById("skinSelect");
const leaderboardDiv = document.getElementById("leaderboard");

const width = 375;
const height = 375;
const platformHeight = 100;

// ===== STATE =====
let phase = "start";
let heroX = 50, heroY = 0;
let sceneOffset = 0;

let platforms = [];
let sticks = [];
let score = 0;
let step = 0;
let heroColor = "black";

// leaderboard
let scores = JSON.parse(localStorage.getItem("scores")) || [];

// ===== INIT =====
function setupGame() {
  heroX = 50;
  heroY = 0;
  sceneOffset = 0;
  score = 0;
  step = 0;

  platforms = [
    { x: 50, w: 50 },
    { x: 200, w: 60 }
  ];

  sticks = [
    { x: platforms[0].x + platforms[0].w, length: 0, rotation: 0 }
  ];
}

// ===== LEADERBOARD =====
function updateLeaderboard() {
  leaderboardDiv.innerHTML = "<b>Top Scores</b><br>";
  scores.slice(0,5).forEach((s,i)=>{
    leaderboardDiv.innerHTML += `${i+1}. ${s}<br>`;
  });
}

// ===== SAVE SCORE =====
function saveScore() {
  scores.push(score);
  scores.sort((a,b)=>b-a);
  scores = scores.slice(0,5);
  localStorage.setItem("scores", JSON.stringify(scores));
  updateLeaderboard();
}

// ===== START =====
startBtn.onclick = () => {
  startBtn.style.display = "none";
  phase = "waiting";
  setupGame();
};

restartBtn.onclick = () => {
  restartBtn.style.display = "none";
  phase = "waiting";
  setupGame();
};

// ===== SKIN =====
skinSelect.onchange = () => {
  heroColor = skinSelect.value;
};

// ===== LOOP =====
function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}

// ===== UPDATE =====
function update() {
  if (phase === "start" || phase === "gameover") return;

  let stick = sticks[sticks.length - 1];

  if (phase === "stretching") stick.length += 3;

  if (phase === "turning") {
    if (stick.rotation < 90) stick.rotation += 5;
    else phase = "walking";
  }

  if (phase === "walking") {
    heroX += 2;
    step += 0.2;

    let target = platforms[1];

    if (heroX > stick.x + stick.length) phase = "falling";

    if (heroX > target.x && heroX < target.x + target.w) {
      score++;
      nextPlatform();
    }
  }

  if (phase === "falling") {
    heroY += 5;
    if (heroY > height) {
      phase = "gameover";
      restartBtn.style.display = "block";
      saveScore();
    }
  }
}

// ===== NEXT =====
function nextPlatform() {
  sceneOffset += 120;

  platforms.shift();

  let newX = platforms[0].x + 100 + Math.random() * 120;
  let newW = 30 + Math.random() * 50;

  platforms.push({ x: newX, w: newW });

  sticks.push({
    x: platforms[0].x + platforms[0].w,
    length: 0,
    rotation: 0
  });

  heroX = platforms[0].x + platforms[0].w - 10;
  phase = "waiting";
}

// ===== DRAW =====
function draw() {
  ctx.clearRect(0, 0, width, height);

  // platforms
  ctx.fillStyle = "#000";
  platforms.forEach(p => {
    ctx.fillRect(p.x - sceneOffset, height - platformHeight, p.w, platformHeight);
  });

  // stick
  let stick = sticks[sticks.length - 1];
  ctx.save();
  ctx.translate(stick.x - sceneOffset, height - platformHeight);
  ctx.rotate((stick.rotation * Math.PI) / 180);
  ctx.fillRect(0, -stick.length, 5, stick.length);
  ctx.restore();

  drawHero();

  ctx.fillStyle = "black";
  ctx.fillText("Score: " + score, 10, 20);

  if (phase === "start") ctx.fillText("Stick Hero", 130, 150);
  if (phase === "gameover") ctx.fillText("Game Over", 120, 150);
}

// ===== HERO =====
function drawHero() {
  const x = heroX - sceneOffset;
  const y = height - platformHeight + heroY;

  ctx.save();
  ctx.translate(x, y);

  ctx.strokeStyle = heroColor;
  ctx.fillStyle = heroColor;
  ctx.lineWidth = 3;

  ctx.beginPath();
  ctx.moveTo(10, -20);
  ctx.lineTo(10, -5);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(10, -25, 5, 0, Math.PI * 2);
  ctx.fill();

  let swing = Math.sin(step) * 5;

  ctx.beginPath();
  ctx.moveTo(10, -5);
  ctx.lineTo(10 - 5 + swing, 5);
  ctx.moveTo(10, -5);
  ctx.lineTo(10 + 5 - swing, 5);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(10, -15);
  ctx.lineTo(10 - 5 - swing, -10);
  ctx.moveTo(10, -15);
  ctx.lineTo(10 + 5 + swing, -10);
  ctx.stroke();

  ctx.restore();
}

// ===== CONTROLS =====
function startAction() {
  if (phase === "waiting") phase = "stretching";
}
function endAction() {
  if (phase === "stretching") phase = "turning";
}

window.addEventListener("mousedown", startAction);
window.addEventListener("mouseup", endAction);

window.addEventListener("touchstart", e => {
  e.preventDefault();
  startAction();
});
window.addEventListener("touchend", e => {
  e.preventDefault();
  endAction();
});

// ===== START =====
updateLeaderboard();
loop();

</script>
</body>
</html>
