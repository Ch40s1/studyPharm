const sigCodes = {
  "ac": "before meals",
  "bid": "twice a day",
  "cap": "capsule",
  "d/c": "discontinue",
  "disp": "dispense",
  "gtt": "drop",
  "hs": "at bedtime",
  "od": "right eye",
  "os": "left eye",
  "ou": "both eyes",
  "pc": "after meals",
  "po": "by mouth",
  "prn": "as needed",
  "q": "every",
  "qam": "every morning",
  "qhs": "every night at bedtime",
  "qid": "four times a day",
  "qod": "every other day",
  "qs": "quantity sufficient",
  "sig": "directions",
  "sol": "solution",
  "tab": "tablet",
  "tid": "three times a day",
  "ud": "as directed",
};

// on document load
document.addEventListener("DOMContentLoaded", () => {
  const cardContainer = document.getElementById("card_container");

  for (const [key, value] of Object.entries(sigCodes)) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<div class="sig"><strong>${key}</strong>: ${value}</div>`;
    cardContainer.appendChild(card);
  }
});
