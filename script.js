
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

function dispense(type) {
  const machine = document.getElementById("machine");
  const screen = document.getElementById("screen");
  const output = document.getElementById("output");

  machine.classList.remove("shake");
  void machine.offsetWidth;
  machine.classList.add("shake");

  screen.innerHTML = `<p>DISPENSING...</p><span>Something lovely is coming ♡</span>`;

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

    screen.innerHTML = `<p>${item.title}</p><span>Surprise delivered! ♡</span>`;

    if (collected.length === 6) {
      screen.innerHTML = `<p>ALL 6 COLLECTED! 💖</p><span>You've unlocked the celebration!</span>`;

      setTimeout(() => {
        showCelebration();
      }, 3500);
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

function showCelebration() {
  const popup = document.getElementById("popup");

  document.getElementById("popupEmoji").textContent = "🎉💗🥂";
  document.getElementById("popupTitle").textContent =
    "Happy Anniversary, Mummy & Papa!";

  document.getElementById("popupMessage").style.display = "block";
  document.getElementById("popupMessage").innerHTML = `
    <div style="font-size:17px; line-height:1.8;">
      You have unlocked every little surprise! ♡<br><br>

      Through every season, every smile and every little moment,
      your love has made our family a beautiful place to belong.<br><br>

      <strong>
        Thank you for being my home, my happiness
        and my favourite people in the world.
      </strong><br><br>

      Here's to many more years of love, laughter,
      adventures and togetherness! 💗<br><br>

      <span style="font-size:24px;">
        I LOVE YOU BOTH FOREVER! ♡
      </span>
    </div>
  `;

  document.getElementById("memoryGallery").style.display = "none";

  document.querySelector(".popup-bottom").textContent =
    "A celebration of your love, made with all my heart ♡";

  document.querySelector(".popup-close").textContent =
    "Happy Anniversary! 💖";

  popup.classList.add("show");

  createConfetti();
}

function createConfetti() {
  const colors = ["#ff69a6", "#ffd166", "#c084fc", "#ff8fab", "#a0e7e5"];

  for (let i = 0; i < 70; i++) {
    const piece = document.createElement("div");

    piece.innerHTML = ["💗", "✨", "🌸", "💕", "🎉"][Math.floor(Math.random() * 5)];

    piece.style.position = "fixed";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.top = "-30px";
    piece.style.fontSize = (Math.random() * 18 + 12) + "px";
    piece.style.zIndex = "9999";
    piece.style.pointerEvents = "none";
    piece.style.animation = `confettiFall ${Math.random() * 3 + 3}s linear forwards`;

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

function closePopup() {
  document.getElementById("popup").classList.remove("show");
}
