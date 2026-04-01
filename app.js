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

// 🔮 IZBIRA ZNAKA
function getTodaySign() {
  return tzolkinSigns[new Date().getDate() % tzolkinSigns.length];
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

// 🔑 DAN KEY
function getTodayKey() {
  const d = new Date();
  return `day_${d.getFullYear()}_${d.getMonth()}_${d.getDate()}`;
}

// 🌞 ODPRE DAN
function openDay() {
  const todayKey = getTodayKey();

  if (!localStorage.getItem(todayKey)) {
    const sign = getTodaySign();
    const tone = getTone();

    tzolkinImage.src = sign.img;
    tzolkinName.innerText = sign.name;
    toneDisplay.innerText = "Ton " + tone;

    hook.innerHTML = `
      Danes ni problem v tebi.<br><br>
      Problem je, da živiš v napačnem ritmu.<br><br>
      <strong>${sign.name} – Ton ${tone}</strong><br><br>
      Danes je tvoj reset.
    `;

    localStorage.setItem(todayKey, "opened");

    // streak
    let streak = parseInt(localStorage.getItem("streak")) || 0;
    streak++;
    localStorage.setItem("streak", streak);
    streakDisplay.innerText = "🔥 " + streak + " dni zapored";
  }
}

// 🌙 ZAPRI DAN
function closeDay() {
  eveningText.innerHTML = `
    Danes ne rešuješ življenja.<br><br>
    Danes spuščaš.<br><br>
    🌿 Prižgi Palo Santo.<br>
    Zapri oči za 60 sekund.<br>
    Spusti vse, kar ni tvoje.
  `;
}

// 🛍️ SHOP
function openShop() {
  window.open("https://blinkita.si/shop/portal13", "_blank");
}

// EVENTS
openDayBtn.addEventListener("click", openDay);
closeDayBtn.addEventListener("click", closeDay);

// SERVICE WORKER
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}