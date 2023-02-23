const threadThickness = 10;
const threadGap = 2 * 3;
const endCount = 37;
const weftThreadCount = 50;

const margin = 2;
const endColors = [];
let pattern = patterns.plain;

let isDiagram = true;

// =======================================
let weaveWidth;
let weaveHeight;

function setup() {
  weaveWidth = endCount * threadThickness + (endCount - 1) * threadGap;
  weaveHeight =
    weftThreadCount * threadThickness + (weftThreadCount - 1) * threadGap;

  createCanvas(
    weaveWidth + margin * threadThickness * 2,
    weaveHeight + margin * threadThickness * 2
  ).parent('sketch');

  for (let i = 0; i < endCount; i++) {
    endColors[i] = 200; //random(190);
  }
  updateInfo();

  const ul = document.getElementById("patterns");
  Object.keys(patterns).forEach((p) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerHTML = patterns[p].name;
    li.appendChild(btn);
    btn.onclick = () => {
      selectPattern(p);
    }
    ul.appendChild(li);
  });
}

function updateInfo() {
  const pat = pattern.pattern.map((row) => {
    return row.map((col) => col === 1 ? 'X' : 'O').join(' ')
  }).join('<br>');

  document.getElementById("name").textContent = pattern.name;
  document.getElementById("pattern").innerHTML = pat;
}

function draw() {
  background(255);
  noStroke();
  translate(margin * threadThickness, margin * threadThickness);
  drawEdgesAndGaps();

  for (let col = 0; col < endCount; col++) {
    for (let row = 0; row < weftThreadCount; row++) {
      const { x, y } = coordsForColAndRow(col, row);

      if (warpIsUp(col, row)) {
        fill(getWarpThreadColor(col));
        if (isDiagram) {
          warpOutline(x, y, threadThickness, threadThickness);
        } else {
          rect(x, y, threadThickness, threadThickness);
        }
      } else {
        fill(getWeftThreadColor(row));
        rect(x, y, threadThickness, threadThickness);
      }
    }
  }
}

function mousePressedz() {
  const patternNames = Object.keys(patterns);
  const k = Math.floor(Math.random() * patternNames.length);
  const key = patternNames[k];
  selectPattern(key);
}

function selectPattern(key) {
  pattern = patterns[key];
  updateInfo();
}

function drawEdgesAndGaps() {
  const warpDrawFunc = isDiagram ? warpOutline : rect;

  for (let i = 0; i < endCount; i++) {
    const { x, y } = coordsForColAndRow(i, weftThreadCount);
    fill(getWarpThreadColor(i));
    warpDrawFunc(
      x,
      -(threadThickness + threadGap),
      threadThickness,
      threadThickness + threadGap
    );

    warpDrawFunc(
      x,
      y - threadGap,
      threadThickness,
      threadThickness + threadGap
    );

    for (let j = 0; j < weftThreadCount - 1; j++) {
      const { x, y } = coordsForColAndRow(i, j);
      fill(getWarpThreadColor(i));
      warpDrawFunc(x, y + threadThickness, threadThickness, threadGap);
    }
  }

  for (let j = 0; j < weftThreadCount; j++) {
    const { x, y } = coordsForColAndRow(endCount, j);
    fill(getWeftThreadColor(j));
    rect(
      -(threadThickness + threadGap),
      y,
      threadThickness + threadGap,
      threadThickness
    );

    rect(x - threadGap, y, threadThickness + threadGap, threadThickness);

    for (let i = 0; i < endCount - 1; i++) {
      const { x, y } = coordsForColAndRow(i, j);
      fill(getWeftThreadColor(i));
      rect(x + threadThickness, y, threadGap, threadThickness);
    }
  }
}

function warpOutline(x, y, w, h) {
  push();
  stroke(0);
  strokeWeight(1);
  line(x, y, x, y + h);
  line(x + w, y, x + w, y + h);
  pop();
}

function warpIsUp(col, row) {
  const pat = pattern.pattern;
  const r = row % pat.length;
  const c = col % pat[r].length;
  return pat[r][c] === 1;
}

function getWeftThreadColor(num) {
  return color(0);
}

function getWarpThreadColor(num) {
  return endColors[num];
}

function coordsForColAndRow(col, row = 0) {
  return {
    x: col * threadThickness + col * threadGap,
    y: row * threadThickness + row * threadGap,
  };
}
