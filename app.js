// 🔮 TZOLKIN DATA
const tzolkinSigns = ["Krokodil", "Veter", "Zora", "Kuščar", "Kača", "Smrt", "Jelen", "Zajec", "Voda", "Pes", "Opica", "Cesta", "Trsje", "Jaguar", "Orel","Sova","Zemlja","Ogledalo","Nevihta","Sonce"];


// 🔮 TZOLKIN PODATKI (tukaj samo zamenjaš slike)
const tzolkinSigns = [
  { name: "Imix", img: "images/imix.png" },
  { name: "Ik", img: "images/ik.png" },
  { name: "Akbal", img: "images/akbal.png" },
  { name: "Kan", img: "images/kan.png" },
  { name: "Chicchan", img: "images/chicchan.png" },
  { name: "Cimi", img: "images/cimi.png" },
  { name: "Manik", img: "images/manik.png" },
  { name: "Lamat", img: "images/lamat.png" },
  { name: "Muluc", img: "images/muluc.png" },
  { name: "Oc", img: "images/oc.png" },
  { name: "Chuen", img: "images/chuen.png" },
  { name: "Eb", img: "images/eb.png" },
  { name: "Ben", img: "images/ben.png" },
  { name: "Ix", img: "images/ix.png" },
  { name: "Men", img: "images/men.png" },
  { name: "Cib", img: "images/cib.png" },
  { name: "Caban", img: "images/caban.png" },
  { name: "Etznab", img: "images/etznab.png" },
  { name: "Cauac", img: "images/cauac.png" },
  { name: "Ahau", img: "images/ahau.png" }
];

// 🔢 TONI 1–13
function getTone() {
  return (new Date().getDate() % 13) + 1;
}

// 🧭 anchor (PRAVI TZOLKIN)
const anchorDate = new Date("1800-01-01");
const anchorTone = 10;
const anchorSignIdx = 13;

// 🔮 CALC
function getTzolkinDay() {
  const today = new Date();
  const diffDays = Math.floor((today - anchorDate) / (1000 * 60 * 60 * 24));

  const tone = ((anchorTone + diffDays) % 13 + 13) % 13 || 13;
  const signIndex = (anchorSignIdx + diffDays) % 20;

  return {
    tone,
    sign: tzolkinSigns[signIndex],
    signIndex
  };
}

// 🧠 ELEMENTI
const hook = document.getElementById("hook");
const openDayBtn = document.getElementById("openDay");
const closeDayBtn = document.getElementById("closeDay");
const eveningText = document.getElementById("eveningText");
const streakDisplay = document.getElementById("streak");

const tzolkinImage = document.getElementById("tzolkinImage");
const tzolkinName = document.getElementById("tzolkinName");
const toneDisplay = document.getElementById("tone");

// 🔑 KEY
function getTodayKey() {
  const d = new Date();
  return `day_${d.getFullYear()}_${d.getMonth()}_${d.getDate()}`;
}

// 🌞 OPEN DAY
function openDay() {
  const todayKey = getTodayKey();

  if (localStorage.getItem(todayKey)) {
    hook.innerHTML = `
    Dan si že odprla.<br><br>
    Ne išči več.<br>
    Živi to, kar si že dobila.
    `;
    return;
  }

  const todayData = getTzolkinDay();

  tzolkinImage.src = tzolkinSignImages[todayData.signIndex];
  tzolkinName.innerText = todayData.sign;
  toneDisplay.innerText = "Ton " + todayData.tone;

  hook.innerHTML = `
  Ti nisi izgubljena.<br><br>
  Samo živiš izven ritma.<br><br>

  <strong>${todayData.sign} – Ton ${todayData.tone}</strong><br><br>

  Danes se ne popravljaš.<br>
  Danes se spomniš, kdo si.
  `;

  localStorage.setItem(todayKey, "opened");

  let streak = parseInt(localStorage.getItem("streak")) || 0;
  streak++;
  localStorage.setItem("streak", streak);

  streakDisplay.innerHTML = `
  🔥 ${streak} dni v ritmu<br>
  Vračaš se k sebi.
  `;
}

// 🌙 CLOSE DAY
function closeDay() {
  eveningText.innerHTML = `
  Danes ne rešuješ življenja.<br><br>

  Danes spuščaš.<br><br>

  🌿 Prižgi Palo Santo.<br>
  Zapri oči.<br><br>

  Ne nosi jutri tega, kar ni tvoje.
  `;
}

// EVENTS
openDayBtn.addEventListener("click", openDay);
closeDayBtn.addEventListener("click", closeDay);

// SERVICE WORKER
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");