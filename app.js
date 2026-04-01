// 🔮 TZOLKIN DATA
const tzolkinSigns = ["Krokodil", "Veter", "Zora", "Kuščar", "Kača", "Smrt", "Jelen", "Zajec", "Voda", "Pes", "Opica", "Cesta", "Trsje", "Jaguar", "Orel","Sova","Zemlja","Ogledalo","Nevihta","Sonce"];

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
  "https://static.wixstatic.com/media/7535eb_acd453dcd54e4ca29483cb610e3bab2e~mv2.png",
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

// Preprosto dnevno odklepanje
const hookText = [
  "Danes se cikli ponavljajo ali je čas za nov začetek?",
  "Čas je, da pretrgaš vzorec, ki te zadržuje.",
  "Ponovitev preteklosti? Odkleni svoj dan."
];

const tzolkinEnergy = [
  "Muluc (Voda) – čiščenje, reset, spuščanje",
  "Oc (Pes) – zvestoba, vodstvo, povezava",
  "Chuen (Opica) – igrivost, kreativnost, sprostitev"
];

const dailyContent = document.getElementById('dailyContent');
const hook = document.getElementById('hook');
const openPortal = document.getElementById('openPortal');
const streakDisplay = document.getElementById('streak');

function getTodayKey() {
  const today = new Date();
  return `portal13_${today.getFullYear()}_${today.getMonth()}_${today.getDate()}`;
}

function unlockDay() {
  const todayKey = getTodayKey();
  if(!localStorage.getItem(todayKey)) {
    // Naključno sporočilo
    const hookMessage = hookText[Math.floor(Math.random()*hookText.length)];
    const energyMessage = tzolkinEnergy[Math.floor(Math.random()*tzolkinEnergy.length)];
    hook.innerHTML = `<strong>${hookMessage}</strong><br>${energyMessage}<br><br>
      <a href="https://www.blinkita.si" target="_blank">
        Odkrij svoj ritual na Blinkita.si
      </a>`;
    localStorage.setItem(todayKey, "unlocked");

    // Update streak
    let streak = parseInt(localStorage.getItem('streak')) || 0;
    streak++;
    localStorage.setItem('streak', streak);
    streakDisplay.innerText = `Tvoj streak: ${streak} dni zapored`;
  }
}

openPortal.addEventListener('click', unlockDay);

// Service Worker registration
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('service-worker.js')
    .then(()=> console.log('Service Worker registered'))
    .catch(err => console.log('SW registration failed:', err));
}

// Push Notification (zjutraj in zvečer)
function scheduleNotifications() {
  if('Notification' in window && Notification.permission !== 'denied'){
    Notification.requestPermission().then(permission => {
      if(permission === 'granted'){
        // Simplified scheduling (uporabnik mora imeti stran odprto)
        setInterval(()=>{
          new Notification("PORTAL 13 – TI SI ČAS", {
            body: "Odpri svoj dan – čas je za reset.",
            icon: "icon-192.png"
          });
        }, 24*60*60*1000); // enkrat dnevno
      }
    });
  }
}

scheduleNotifications();