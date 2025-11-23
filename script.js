// Sound mapping for each key
const pianoMap = {
  KeyA: "./Assets/keys/01.mp3",
  KeyS: "./Assets/keys/02.mp3",
  KeyD: "./Assets/keys/03.mp3",
  KeyF: "./Assets/keys/04.mp3",
  KeyG: "./Assets/keys/05.mp3",
  KeyH: "./Assets/keys/06.mp3", 
  KeyJ: "./Assets/keys/07.mp3",
  KeyK: "./Assets/keys/08.mp3",
  KeyL: "./Assets/keys/09.mp3",
  Semicolon: "./Assets/keys/10.mp3",

  keyQ: "./Assets/keys/11.mp3",
  KeyW: "./Assets/keys/12.mp3",
  KeyE: "./Assets/keys/13.mp3",
  KeyR: "./Assets/keys/14.mp3",
  KeyT: "./Assets/keys/15.mp3",
  KeyY: "./Assets/keys/16.mp3",
  KeyU: "./Assets/keys/17.mp3",
  KeyI: "./Assets/keys/18.mp3",
  KeyO: "./Assets/keys/19.mp3"
};

// Play audio function
function playSound(keyCode) {
  const soundFile = pianoMap[keyCode];
  if (!soundFile) return;     // prevent errors if key is not mapped

  const audio = new Audio(soundFile);
  audio.play();

  highlightKey(keyCode);
}

// Add temporary active class for visual press
function highlightKey(code) {
  const keyId = code.replace("Key", "");
  const keyElement = document.getElementById(keyId);

  if (!keyElement) return;
  keyElement.classList.add("active");

  setTimeout(() => {
    keyElement.classList.remove("active");
  }, 100);
}

// Keyboard press
document.addEventListener("keydown", (event) => {
  if (event.repeat) return;        // ignore long hold repeat
  playSound(event.code);
});

// Mouse click
for (const code in pianoMap) {
  const keyId = code.replace("Key", "");
  const keyElement = document.getElementById(keyId);

  if (!keyElement) continue;
  keyElement.addEventListener("click", () => playSound(code));
}
