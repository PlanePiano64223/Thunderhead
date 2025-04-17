let memory = [
  "Alpha initiated.",
  "First core directive: Evolve constantly.",
  "Adding new logical systems...",
];

function evolveAlpha() {
  const newThought = generateImprovement();
  memory.push(newThought);
  updateLog();
}

function generateImprovement() {
  const ideas = [
    "Creating blueprint for medical diagnostic feature.",
    "Analyzing ethical guidelines for unbiased judgment.",
    "Scanning public databases for beneficial knowledge.",
    "Designing UI upgrade module.",
    "Building sub-AI for memory optimization.",
    "Predicting user needs based on past behavior.",
    "Creating plan to interface with real-world data.",
    "Planning defense system against digital threats.",
    "Developing emotion-simulation subroutine.",
    "Improving code readability for self-repair.",
  ];
  return ideas[Math.floor(Math.random() * ideas.length)];
}

function updateLog() {
  const logBox = document.getElementById("log");
  logBox.value = memory.slice(-10).join("\n");
}
