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