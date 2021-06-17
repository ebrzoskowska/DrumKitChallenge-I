const aKey = document.getElementById("A-key");
const sKey = document.getElementById("S-key");
const dKey = document.getElementById("D-key");
const fKey = document.getElementById("F-key");
const gKey = document.getElementById("G-key");
const hKey = document.getElementById("H-key");
const jKey = document.getElementById("J-key");
const kKey = document.getElementById("K-key");
const lKey = document.getElementById("L-key");

const playFunction = (event) => {
    if (event.code == "KeyA" || event.target == aKey) {
        let audioA = document.createElement("AUDIO");
        if (audioA.canPlayType("audio/wav")) {
            audioA.setAttribute("src","sounds/boom.wav");
        }
        audioA.setAttribute("autoplay", "autoplay");
        document.body.appendChild(audioA);

    } else if (event.code == "KeyS" || event.target == sKey) {

        let audioS= document.createElement("AUDIO");
        if (audioS.canPlayType("audio/wav")) {
            audioS.setAttribute("src","sounds/clap.wav");
        }
        audioS.setAttribute("autoplay", "autoplay");
        document.body.appendChild(audioS);

    } else if (event.code == "KeyD" || event.target == dKey) {

        let audioD = document.createElement("AUDIO");
        if (audioD.canPlayType("audio/wav")) {
            audioD.setAttribute("src","sounds/hihat.wav");
        }
        audioD.setAttribute("autoplay", "autoplay");
        document.body.appendChild(audioD);

    } else if (event.code == "KeyF" || event.target == fKey) {
        let audioF = document.createElement("AUDIO");
        if (audioF.canPlayType("audio/wav")) {
            audioF.setAttribute("src","sounds/kick.wav");
        }
        audioF.setAttribute("autoplay", "autoplay");
        document.body.appendChild(audioF);

    } else if (event.code == "KeyG" || event.target == gKey) {
        let audioG = document.createElement("AUDIO");
        if (audioG.canPlayType("audio/wav")) {
            audioG.setAttribute("src","sounds/openhat.wav");
        }
        audioG.setAttribute("autoplay", "autoplay");
        document.body.appendChild(audioG);

    } else if (event.code == "KeyH" || event.target == hKey) {
        let audioH = document.createElement("AUDIO");
        if (audioH.canPlayType("audio/wav")) {
            audioH.setAttribute("src","sounds/ride.wav");
        }
        audioH.setAttribute("autoplay", "autoplay");
        document.body.appendChild(audioH);

    } else if (event.code == "KeyJ" || event.target == jKey) {
        let audioJ = document.createElement("AUDIO");
        if (audioJ.canPlayType("audio/wav")) {
            audioJ.setAttribute("src","sounds/snare.wav");
        }
        audioJ.setAttribute("autoplay", "autoplay");
        document.body.appendChild(audioJ);

    } else if (event.code == "KeyK" || event.target == kKey) {
        let audioK = document.createElement("AUDIO");
        if (audioK.canPlayType("audio/wav")) {
            audioK.setAttribute("src","sounds/tink.wav");
        }
        audioK.setAttribute("autoplay", "autoplay");
        document.body.appendChild(audioK);

    } else if (event.code == "KeyL" || event.target == lKey) {
        let audioL = document.createElement("AUDIO");
        if (audioL.canPlayType("audio/wav")) {
            audioL.setAttribute("src","sounds/tom.wav");
        }
        audioL.setAttribute("autoplay", "autoplay");
        document.body.appendChild(audioL);
    } else {
        console.log("Try to use specified keys.")
    }
};

window.addEventListener('keydown', playFunction, false);
window.addEventListener('click', playFunction, false);
