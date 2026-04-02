// 🔹 DOM ELEMENTI
const openDayBtn = document.getElementById("openDayBtn");
const closeDayBtn = document.getElementById("closeDayBtn");
const tzolkinImage = document.getElementById("tzolkinImage");
const tzolkinName = document.getElementById("tzolkinName");
const toneDisplay = document.getElementById("toneDisplay");
const hook = document.getElementById("hook");
const eveningText = document.getElementById("eveningText");

// 🔮 TZOLKIN DATA
const tzolkinSigns = ["Krokodil","Veter","Zora","Kuščar","Kača","Smrt","Jelen","Zajec","Voda","Pes","Opica","Cesta","Trsje","Jaguar","Orel","Sova","Zemlja","Ogledalo","Nevihta","Sonce"];

const tzolkinNumberImages = [
  "https://static.wixstatic.com/media/7535eb_8128aa403fb34a39a9abf4c539e07d4e~mv2.png",
  "https://static.wixstatic.com/media/7535eb_58d9713024fd44e3b574ed6e66319df3~mv2.png",
  "https://static.wixstatic.com/media/7535eb_fa772de6b389412a874060866aafe0d0~mv2.png",
  "https://static.wixstatic.com/media/7535eb_034123a9c80d497da70e29c529f761ab~mv2.png",
  "https://static.wixstatic.com/media/7535eb_0949be53659a4112b79aeaf88fba4182~mv2.png",
  "https://static.wixstatic.com/media/7535eb_31c0710a2c40451c8be0474fca598690~mv2.png",
  "https://static.wixstatic.com/media/7535eb_abc754938a3c47e5a3b497a802fbbc09~mv2.png",
  "https://static.wixstatic.com/media/7535eb_a195a39082484f0eafd271594204fd99~mv2.png",
  "https://static.wixstatic.com/media/7535eb_62f1b1f66190462faf5af9be6f04e3f3~mv2.png",
  "https://static.wixstatic.com/media/7535eb_630ea6308de14ff089b351e4f1967594~mv2.png",
  "https://static.wixstatic.com/media/7535eb_b098132554904e4d8d689176145249a0~mv2.png",
  "https://static.wixstatic.com/media/7535eb_6cf0d4b4439a46eb952d52e6cd02bb28~mv2.png",
  "https://static.wixstatic.com/media/7535eb_a5b6f5b75b254f1ca65fbe7cafb8086e~mv2.png"
];

const tzolkinSignImages = [
  "https://static.wixstatic.com/media/7535eb_8b15827f3f0749f58b47edf2ec8ff34a~mv2.png",
  "https://static.wixstatic.com/media/7535eb_da5c22d0b20c4650ae78bd78d44bdf90~mv2.png",
  "https://static.wixstatic.com/media/7535eb_1431fb4ee97a418383209553a73974e5~mv2.png",
  "https://static.wixstatic.com/media/7535eb_63fa92348cef45778a33ea8df474f3b8~mv2.png",
  "https://static.wixstatic.com/media/7535eb_b144e80ceccc4304b10027e8d2f1e674~mv2.png",
  "https://static.wixstatic.com/media/7535eb_9eda107ea6ed46e8880d6cd3394b3eca~mv2.png",
  "https://static.wixstatic.com/media/7535eb_498008e2e9fb4c7ebc66e4a2cf25a1d4~mv2.png",
  "https://static.wixstatic.com/media/7535eb_a86c9fe89c5f4f4d8a810c284e40bf13~mv2.png",
  "https://static.wixstatic.com/media/7535eb_b1612f1d298245a483212ca3997b6872~mv2.png",
  "https://static.wixstatic.com/media/7535eb_fcf459036d31451fb913cd556bdf98b1~mv2.png",
  "https://static.wixstatic.com/media/7535eb_c5e4c01f59e74424806a8b82d55ea9c9~mv2.png",
  "https://static.wixstatic.com/media/7535eb_8b1bd5f0bebf4e9e84734d0dd7c18a55~mv2.png",
  "https://static.wixstatic.com/media/7535eb_5a43cbda692c4bff8790b8d4fe769ec5~mv2.png",
  "https://static.wixstatic.com/media/7535eb_891ac2c5109f44c8927f69170b93aa78~mv2.png",
  "https://static.wixstatic.com/media/7535eb_bcc1d28cea634696895554c9f25a2788~mv2.png",
  "https://static.wixstatic.com/media/7535eb_acd453dcd54e4ca29483cb610e3bab2~mv2.png",
  "https://static.wixstatic.com/media/7535eb_d413aa3902864a09a3c2bb1ae2996b53~mv2.png",
  "https://static.wixstatic.com/media/7535eb_57d9eafe0dd249ddb5194e43a629e516~mv2.png",
  "https://static.wixstatic.com/media/7535eb_413ee006283f479dbb46cc737b796bb4~mv2.png",
  "https://static.wixstatic.com/media/7535eb_18fc81a965aa4e69974f11d5bb68dc60~mv2.png"
];

// 🧭 anchor (PRAVI TZOLKIN)
const anchorDate = new Date("1800-01-01");
const anchorTone = 10;
const anchorSignIdx = 13;

// 🔮 CALC
function getTzolkinDay() {
  const today = new Date();
  const diffDays = Math.floor((today - anchorDate) / (1000 * 60 * 60 * 24));
  const tone = ((anchorTone + diffDays - 1) % 13) + 1; // 1–13
  const signIndex = (anchorSignIdx + diffDays - 1) % 20;
  return { tone, signIndex, sign: tzolkinSigns[signIndex] };
}

// --------------------------
// OPEN DAY z daily streak in OpenAI sporočili
// --------------------------
async function openDay() {
  const todayKey = getTodayKey();
  const signIdx = new Date().getDate() % tzolkinSigns.length;
  const sign = tzolkinSigns[signIdx];
  const tone = getTone();

  // Prikažemo slike in tekst
  tzolkinImage.src = tzolkinSignImages[signIdx] || "";
  tzolkinName.innerText = sign;
  toneDisplay.innerText = "Ton " + tone;
  hook.innerHTML = `<strong>${sign} – Ton ${tone}</strong><br>Danes je tvoj reset.`;

  // --------------------------
  // STREAK – šteje 1x na dan
  // --------------------------
  const lastOpened = localStorage.getItem(todayKey + "_streakCounted");
  let streak = parseInt(localStorage.getItem("streak")) || 0;

  if (!lastOpened) {
    streak++;
    if(streak > 13) streak = 1; // reset po 13 dneh
    localStorage.setItem("streak", streak);
    localStorage.setItem(todayKey + "_streakCounted", "true");
  }

  streakDisplay.innerText = `🔥 ${streak} dni zapored`;
  streakBar.style.width = (streak / 13 * 100) + "%";

  // --------------------------
  // OpenAI sporočila
  // --------------------------
  // ločimo free in premium
  const isPremium = localStorage.getItem("premiumActive") === "true";
  const message = await getDailyMessage(sign, tone, isPremium);
  const messageContainer = document.getElementById("dailyMessage");
  if(messageContainer){
    messageContainer.innerHTML = message;
  } else {
    const p = document.createElement("p");
    p.id = "dailyMessage";
    p.style.marginTop = "20px";
    p.innerHTML = message;
    hook.appendChild(p);
  }
}

// --------------------------
// FUNKCIJA ZA GENERIRANJE SPOROČILA PREKO OPENAI
// --------------------------
async function getDailyMessage(sign, tone, isPremium){
  // to bo kasneje API call ali lokalni prompt
  if(isPremium){
    return `<em>Premium sporočilo:</em> Energija dneva (${sign} – Ton ${tone}) te vodi v globoko transformacijo.`;
  } else {
    return `<em>Free sporočilo:</em> Danes opazuj energijo (${sign} – Ton ${tone}) in prisluhni svoji notranji resnici.`;
  }
}

// --------------------------
// PREMIUM MODAL submit
// --------------------------
document.getElementById('proButtonSubmit').addEventListener('click', ()=>{
  const email = document.getElementById('proEmail').value;
  const dob = document.getElementById('partner1Dob').value;

  if(email && dob){
    localStorage.setItem("premiumActive", "true"); // shrani premium status
    alert("Premium aktiviran! Email: "+email+" | Rojstni datum: "+dob);
    proModal.style.display = 'none';
  } else {
    alert("Prosimo, izpolnite oba podatka.");
  }
});

// 🌙 CLOSE DAY
function closeDay() {
  const todayKey = getTodayKey();
  localStorage.setItem(todayKey + "_closed", true);

  eveningText.innerHTML = `
    Danes spuščaš.<br>
    Tvoji zapiski so shranjeni.<br>
    🌿 Prižgi Palo Santo in počivaj.
  `;
}

// 💾 SAVE DAILY NOTES
function saveDailyNotes(dayKey) {
  const notes = document.getElementById("dailyNotes").value;
  localStorage.setItem(dayKey + "_notes", notes);
  alert("Zapiski shranjeni!");
}

// 📥 PDF LINK PLACEHOLDER
function generatePDFLink(dayKey) {
  return `https://www.blinkita.si/portal13/download/${dayKey}.pdf`;
}

// 🧑‍💻 PERSONAL ENERGY
function getKinFromDate(date) {
  const diffDays = Math.floor((date - anchorDate) / (1000*60*60*24));
  const tone = ((anchorTone + diffDays - 1) % 13) + 1;
  const signIndex = (anchorSignIdx + diffDays - 1) % 20;
  return { tone, signIndex };
}

function calculatePersonalEnergy() {
  const birthDate = new Date(document.getElementById("birthDate").value);
  if (!birthDate || isNaN(birthDate)) return;

  const birthKin = getKinFromDate(birthDate);
  const today = getTzolkinDay();
  const combinedTone = ((birthKin.tone + today.tone - 1) % 13) + 1;
  const combinedSignIndex = (birthKin.signIndex + today.signIndex) % 20;

  document.getElementById("personalResult").innerHTML = `
    Tvoja energija danes:<br><br>
    <strong>${tzolkinSigns[combinedSignIndex]} – Ton ${combinedTone}</strong><br><br>
    To je tvoje ogledalo danes.<br>
    🔒 Globlja razlaga je zaklenjena.
    <button onclick="openBlinkita()">ODKLENI</button>
  `;
}

// 🌐 OPEN BLINKITA SHOP
function openBlinkita() {
  window.open("https://www.blinkita.si/category/portal-13-ti-si-%C4%8Das", "_blank");
}

// 📊 PROGRESS BAR
function updateProgress() {
  let progress = parseInt(localStorage.getItem("progress")) || 0;
  progress++;
  if (progress > 13) progress = 1;
  localStorage.setItem("progress", progress);

  const percent = (progress / 13) * 100;
  document.getElementById("progressBar").style.width = percent + "%";
}

// 🔑 HELPERS
function getTodayKey() {
  const d = new Date();
  return `day_${d.getFullYear()}_${d.getMonth()+1}_${d.getDate()}`;
}

// EVENTS
openDayBtn.addEventListener("click", openDay);
closeDayBtn.addEventListener("click", closeDay);

// SERVICE WORKER
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");

// prikaz napredka ob nalaganju
document.addEventListener("DOMContentLoaded", () => {
  updateProgress();
});
}