console.log("script.js wurde geladen");

// ⏱️ Zeitanzeige beim Seitenaufruf
window.onload = function () {
  const now = new Date();
  const formatted = now.toLocaleString("de-DE");
  const zeile = document.getElementById("timestamp");
  if (zeile) {
    zeile.innerText = "Seitenaufruf: " + formatted;
  }
};

// 🔍 Live-Suche für Glossar-Tabelle
function sucheGlossar() {
  const input = document.getElementById("suchfeld").value.toLowerCase();
  const zeilen = document.querySelectorAll("#begriffstabelle tbody tr");

  zeilen.forEach(tr => {
    const text = tr.textContent.toLowerCase();
    tr.style.display = text.includes(input) ? "" : "none";
  });
}

// ➕ Begriffe hinzufügen (für später erweiterbar)
let begriffCounter = 0;
const maxBegriffe = 10;

function hinzufuegen(e) {
  e.preventDefault();

  if (begriffCounter >= maxBegriffe) {
    alert("Maximal 10 Begriffe erlaubt.");
    return;
  }

 const begriff = document.getElementById("neuerBegriff").value.trim();
const abteilung = document.getElementById("abteilung").value.trim();
const bedeutung = document.getElementById("bedeutung").value.trim();


  if (begriff && abteilung && bedeutung) {
    const tabelle = document.querySelector("#begriffstabelle tbody");

    const neueZeile = document.createElement("tr");
    neueZeile.style.cursor = "pointer";
    neueZeile.onclick = () => alert("Dies ist ein neu hinzugefügter Begriff – keine Detailseite verlinkt.");

    neueZeile.innerHTML = `
      <td>${begriff}</td>
      <td>${abteilung}</td>
      <td>${bedeutung}</td>
    `;

    tabelle.appendChild(neueZeile);
    begriffCounter++;

    // Felder leeren
    document.getElementById("neuerBegriff").value = "";
    document.getElementById("abteilung").value = "";
    document.getElementById("bedeutung").value = "";

    // Button sperren, wenn Limit erreicht
    if (begriffCounter >= maxBegriffe) {
      document.getElementById("addButton").disabled = true;
    }
  }
}
