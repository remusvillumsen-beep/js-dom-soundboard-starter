"use strict";

// Husk fra dag 1: skriv "use strict" herunder


// Skriv selv: hent lion-knappen ved hjælp af dens id. Variablen skal hedde getLionBtn
const getLionBtn = document.getElementById (`lion`);
// kan bruge document.querySelector hvis det er class eller html tag man vil fange.

// Nyt i dag: new Audio() opretter et lyd-objekt. src angiver, hvilken lydfil objektet skal afspille.
const soundLion = new Audio();
soundLion.src = "sound/lion.wav";

// Eksempel: vi lytter efter klik på lion-knappen og afspiller lyden med .play()
getLionBtn.addEventListener("click", () => {
    stopAllSounds();
    soundLion.play();
});


// Skriv sammen med underviseren: gentag samme mønster for "dog"
// 1. Hent dog-knappen ved hjælp af dens id. Variablen skal hedde getDogBtn
// 2. Opret et Audio-objekt til dog-lyden ("sound/dog.wav"). Variablen skal hedde soundDog
// 3. Tilføj en event listener til getDogBtn, der stopper alle lyde og afspiller soundDog

const getDogBtn= document.getElementById (`dog`);

const soundDog = new Audio ();
soundDog.src = "sound/dog.wav";

getDogBtn.addEventListener ("click", () => {
    stopAllSounds();
    soundDog.play();
});

/* =========================================================
   EKSTRAOPGAVE: elephant og monkey
   Lav først E1 og E2 i index.html, så knapperne er på siden.
========================================================= */

// E3. Elephant
// Skriv selv: gentag samme mønster som for lion og dog.
// 1. Hent elephant-knappen ved hjælp af dens id. Variablen skal hedde getElephantBtn
// 2. Opret et Audio-objekt til elephant-lyden ("sound/elephant.wav"). Variablen skal hedde soundElephant
// 3. Tilføj en event listener til getElephantBtn, der stopper alle lyde og afspiller soundElephant

const getElephantBtn= document.getElementById (`elephant`);

const soundElephant = new Audio ();
soundElephant.src = "sound/elephant.wav";

getElephantBtn.addEventListener ("click", () => {
    stopAllSounds();
    soundElephant.play();
});

const getMonkeyBtn= document.getElementById (`monkey`);

const soundMonkey = new Audio ();
soundMonkey.src = "sound/monkey.wav";

getMonkeyBtn.addEventListener ("click", () => {
    stopAllSounds();
    soundMonkey.play();
});


// E4. Monkey
// Skriv selv: gør det samme for monkey.
// 1. Hent monkey-knappen. Variablen skal hedde getMonkeyBtn
// 2. Opret et Audio-objekt til monkey-lyden ("sound/monkey.wav"). Variablen skal hedde soundMonkey
// 3. Tilføj en event listener til getMonkeyBtn, der stopper alle lyde og afspiller soundMonkey



// Eksempel: denne funktion stopper og nulstiller lion-lyden, så den er klar til at blive afspillet igen.
// Nyt i dag: .pause() stopper afspilningen. .currentTime = 0 spoler lyden tilbage til starten,
// så den starter fra begyndelsen, næste gang den afspilles.
function stopAllSounds() {
    soundLion.pause();
    soundLion.currentTime = 0;

    // Skriv selv: gør det samme for soundDog, når du har oprettet den ovenfor


    // E5. Skriv selv: gør det samme for soundElephant og soundMonkey
    // Undersøg selv: hvad sker der, hvis du glemmer dette trin og klikker
    // på elephant og derefter på lion?

}

/* ---------------------------------------------------------
   E6. Test
--------------------------------------------------------- */
// Gem og genindlæs siden. Klik på alle fire knapper.
//   - Spiller hver knap den rigtige lyd?
//   - Stopper den forrige lyd, når du klikker på en ny knap?
//
// Virker det ikke? Åbn konsollen (F12). Står der
// "Cannot read properties of null", passer id'et i script.js ikke med id'et i index.html.
