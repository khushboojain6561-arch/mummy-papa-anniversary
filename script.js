
const surprises = {
  note: {
    emoji: "💌",
    title: "A Letter From My Heart",
    message: "Dear Mummy & Papa, thank you for filling my life with love, warmth, laughter and countless beautiful moments. I may not say it every day, but I love you both more than words can express. ♡"
  },
  memory: {
    emoji: "📸",
    title: "Our Beautiful Memories",
    message: "Every memory with you is a treasure. ♡"
  },
  star: {
    emoji: "⭐",
    title: "My Two Shining Stars",
    message: "If I had to choose two stars to guide me through life, I would choose you both every single time. Thank you for being my light, my strength and my home. ✨"
  },
  cupcake: {
    emoji: "🧁",
    title: "A Little Sweetness",
    message: "Life is sweeter because of you! May your days be filled with as much sweetness, laughter and happiness as you have given me. ♡"
  },
  gift: {
    emoji: "🎁",
    title: "My Greatest Gift",
    message: "The greatest gift I have ever received isn't something wrapped in a box. It's having you both as my parents. I wouldn't exchange that for anything in the world. ♡"
  },
  wish: {
    emoji: "✨",
    title: "My Wish For You",
    message: "I wish you endless happiness, peaceful days, good health, countless smiles and many more years of making beautiful memories together. Happy Anniversary! ♡"
  }
};

const photos = [
  {
    src: "WhatsApp Image 2026-11-22 at 8.57.23 PM.jpeg",
    caption: "A beautiful moment, forever treasured ♡"
  },
  {
    src: "WhatsApp Image 2026-11-22 at 8.59.47 PM.jpeg",
    caption: "The moments that make life beautiful ♡"
  },
  {
    src: "Golden Hour Beach Getaway.png",
    caption: "A memory worth keeping forever ♡"
  }
];

let currentPhoto = 0;
let collected = [];
let finalLetterShown = false;

function dispense(type) {
  const machine = document.getElementById("machine");
  const screen = document.getElementById("screen");
  const output = document.getElementById("output");

  machine.classList.remove("shake");
  void machine.offsetWidth;
  machine.classList.add("shake");

  screen.innerHTML = `
    <p>DISPENSING...</p>
    <span>Something lovely is coming ♡</span>
  `;

  setTimeout(() => {
    const item = surprises[type];
    if (!item) return;

    output.innerHTML = `<span class="dropped-item">${item.emoji}</span>`;

    if (!collected.includes(type)) {
      collected.push(type);
    }

    updateCollection();

    if (type === "memory") {
      openGallery();
    } else {
      openPopup(item);
    }

    screen.innerHTML = `
      <p>${item.title}</p>
      <span>Surprise delivered! ♡</span>
    `;

    if (collected.length === 6) {
      screen.innerHTML = `
        <p>ALL 6 COLLECTED! 💖</p>
        <span>Your final surprise awaits! ♡</span>
      `;
    }

  }, 400);
}

function openPopup(item) {
  document.getElementById("popupEmoji").textContent = item.emoji;
  document.getElementById("popupTitle").textContent = item.title;

  const message = document.getElementById("popupMessage");
  message.style.display = "block";
  message.textContent = item.message;

  document.getElementById("memoryGallery").style.display = "none";

  document.querySelector(".popup-bottom").textContent =
    "With love, always ♡";

  document.querySelector(".popup-close").textContent =
    "Aww, thank you ♡";

  document.getElementById("popup").classList.add("show");
}

function openGallery() {
  const item = surprises.memory;

  document.getElementById("popupEmoji").textContent = item.emoji;
  document.getElementById("popupTitle").textContent = item.title;

  const message = document.getElementById("popupMessage");
  message.style.display = "block";
  message.textContent = item.message;

  document.getElementById("memoryGallery").style.display = "block";

  document.querySelector(".popup-bottom").textContent =
    "With love, always ♡";

  document.querySelector(".popup-close").textContent =
    "Aww, thank you ♡";

  currentPhoto = 0;
  showPhoto();

  document.getElementById("popup").classList.add("show");
}

function showPhoto() {
  const photo = photos[currentPhoto];

  document.getElementById("memoryPhoto").src = photo.src;
  document.getElementById("memoryPhoto").alt = photo.caption;
  document.getElementById("memoryCaption").textContent = photo.caption;

  document.getElementById("photoCounter").textContent =
    `${currentPhoto + 1} / ${photos.length}`;
}

function nextPhoto() {
  currentPhoto++;

  if (currentPhoto >= photos.length) {
    currentPhoto = 0;
  }

  showPhoto();
}

function previousPhoto() {
  currentPhoto--;

  if (currentPhoto < 0) {
    currentPhoto = photos.length - 1;
  }

  showPhoto();
}

function updateCollection() {
  document.getElementById("count").textContent = collected.length;

  const icons = document.getElementById("collectionIcons");
  const allTypes = ["note", "memory", "star", "cupcake", "gift", "wish"];

  icons.innerHTML = allTypes.map(type => {
    if (collected.includes(type)) {
      return `<span class="collected">${surprises[type].emoji}</span>`;
    }

    return `<span class="not-collected">♡</span>`;
  }).join("");
}

function closePopup() {
  document.getElementById("popup").classList.remove("show");

  if (collected.length === 6 && !finalLetterShown) {
    finalLetterShown = true;

    setTimeout(() => {
      showFinalLetter();
    }, 800);
  }
}

function showFinalLetter() {
  document.getElementById("popupEmoji").textContent = "💌✨";
  document.getElementById("popupTitle").textContent =
    "One Last Surprise...";

  document.getElementById("popupMessage").style.display = "block";

  document.getElementById("popupMessage").innerHTML = `
    <div style="font-family:Georgia,serif; line-height:1.9; text-align:center; padding:8px;">
      <div style="font-size:24px; margin-bottom:15px;">
        To Mummy & Papa,
      </div>

      If love could be wrapped into a gift,
      I would give you the whole world.
      But today, I can only give you these little surprises
      and a piece of my heart.

      <br><br>

      Thank you for every sacrifice, every encouragement,
      every hug, every smile and every moment
      you made me feel loved.

      <br><br>

      You taught me what love looks like,
      not through words alone, but through
      everything you do every single day.

      <br><br>

      I don't know what the future holds,
      but I know that wherever life takes me,
      a part of my heart will always belong to you both.

      <br><br>

      I hope you keep choosing each other,
      laughing together, dreaming together
      and creating beautiful memories together.

      <br><br>

      <strong>
        Happy Anniversary to the two people
        who mean the world to me.
      </strong>

      <br><br>

      <div style="font-size:24px;">
        I love you endlessly. ♡
      </div>

      <br>

      <div style="font-size:17px;">
        — Your daughter 💗
      </div>
    </div>
  `;

  document.getElementById("memoryGallery").style.display = "none";

  document.querySelector(".popup-bottom").textContent =
    "This little website was made with all my love ♡";

  document.querySelector(".popup-close").textContent =
    "I love you both! 💗";

  document.getElementById("popup").classList.add("show");

  createConfetti();
}

function createConfetti() {
  const emojis = ["💗", "✨", "🌸", "💕", "🎉"];

  for (let i = 0; i < 70; i++) {
    const piece = document.createElement("div");

    piece.textContent =
      emojis[Math.floor(Math.random() * emojis.length)];

    piece.style.position = "fixed";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.top = "-30px";
    piece.style.fontSize = (Math.random() * 18 + 12) + "px";
    piece.style.zIndex = "9999";
    piece.style.pointerEvents = "none";
    piece.style.animation =
      `confettiFall ${Math.random() * 3 + 3}s linear forwards`;

    document.body.appendChild(piece);

    setTimeout(() => {
      piece.remove();
    }, 6000);
  }

  if (!document.getElementById("confettiStyle")) {
    const style = document.createElement("style");
    style.id = "confettiStyle";

    style.textContent = `
      @keyframes confettiFall {
        0% {
          transform: translateY(-10vh) rotate(0deg);
          opacity: 1;
        }
        100% {
          transform: translateY(110vh) rotate(720deg);
          opacity: 0;
        }
      }
    `;

    document.head.appendChild(style);
  }
}
