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

// Photo gallery
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
let isGalleryOpen = false;

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

  isGalleryOpen = false;

  setTimeout(() => {

    const item = surprises[type];

    if (!item) return;

    output.innerHTML = `
      <span class="dropped-item">${item.emoji}</span>
    `;

    screen.innerHTML = `
      <p>${item.title}</p>
      <span>Surprise delivered! ♡</span>
    `;

    if (!collected.includes(type)) {
      collected.push(type);
    }

    updateCollection();

    if (type === "memory") {
      openGallery();
    } else {
      openPopup(item);
    }

  }, 400);
}

// Opens regular surprise popup
function openPopup(item) {

  document.getElementById("popupEmoji").textContent = item.emoji;
  document.getElementById("popupTitle").textContent = item.title;

  const message = document.getElementById("popupMessage");

  message.style.display = "block";
  message.textContent = item.message;

  document.getElementById("memoryGallery").style.display = "none";

  document.getElementById("popup").classList.add("show");
}

// Opens photo gallery
function openGallery() {

  isGalleryOpen = true;

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

// Display selected photo
function showPhoto() {

  const photo = photos[currentPhoto];

  document.getElementById("memoryPhoto").src = photo.src;
  document.getElementById("memoryPhoto").alt = photo.caption;

  document.getElementById("memoryCaption").textContent = photo.caption;

  document.getElementById("photoCounter").textContent =
    `${currentPhoto + 1} / ${photos.length}`;
}

// Next photo
function nextPhoto() {

  currentPhoto++;

  if (currentPhoto >= photos.length) {
    currentPhoto = 0;
  }

  showPhoto();
}

// Previous photo
function previousPhoto() {

  currentPhoto--;

  if (currentPhoto < 0) {
    currentPhoto = photos.length - 1;
  }

  showPhoto();
}

// Updates collected surprises
function updateCollection() {

  document.getElementById("count").textContent = collected.length;

  const icons = document.getElementById("collectionIcons");

  const allTypes = ["note", "memory", "star", "cupcake", "gift", "wish"];

  icons.innerHTML = allTypes.map(type => {

    const emoji = surprises[type].emoji;

    if (collected.includes(type)) {
      return `<span class="collected">${emoji}</span>`;
    }

    return `<span class="not-collected">♡</span>`;

  }).join("");

  if (collected.length === 6) {

    document.getElementById("screen").innerHTML = `
      <p>ALL SURPRISES COLLECTED!</p>
      <span>Sending you endless love ♡</span>
    `;
  }
}

// Close popup
function closePopup() {

  document.getElementById("popup").classList.remove("show");

  isGalleryOpen = false;
}
