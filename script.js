const surprises = {
  note: {
    emoji: "💌",
    title: "A Love Note",
    message: "Dear Mummy & Papa,\n\nThank you for making my world beautiful in a million little ways. Every sacrifice, every smile, every hug and every little thing you do means more than words can ever explain.\n\nI may not say it every day, but I love you both endlessly. ❤️"
  },

  memory: {
    emoji: "📸",
    title: "Our Beautiful Memories",
    message: "Every ordinary day with you both becomes a memory I treasure.\n\nFrom little laughs to big moments, from your advice to your silly jokes, my favourite memories will always have you two in them.\n\nHere's to a lifetime more of memories! 💗"
  },

  star: {
    emoji: "⭐",
    title: "My Two Stars",
    message: "If I could give you both a star for every little thing you've done for me, the sky would never have enough space.\n\nYou are my guiding stars, my greatest support and two of the most special people in my life.\n\nYou deserve the entire universe! ✨"
  },

  cupcake: {
    emoji: "🧁",
    title: "A Little Sweetness",
    message: "You two make life sweeter than all the chocolates, cakes and desserts in the world!\n\nMay your life always be filled with sweetness, laughter, little surprises and countless reasons to smile.\n\nHappy Anniversary! 🧁"
  },

  gift: {
    emoji: "🎁",
    title: "The Greatest Gift",
    message: "The greatest gift I've ever received isn't something wrapped in paper.\n\nIt's having you both as my parents. Your love, your care, your guidance and your presence are gifts I will cherish forever.\n\nI am so lucky to have you. 🎁❤️"
  },

  wish: {
    emoji: "✨",
    title: "My Anniversary Wish",
    message: "My wish for you both is simple...\n\nMay you always keep laughing together, supporting one another, making beautiful memories and finding happiness in the smallest things.\n\nMay the love you share grow stronger with every passing year.\n\nHappy Anniversary Mummy & Papa! 💖"
  }
};

const collected = [];

function dispense(type) {
  const machine = document.getElementById("machine");
  const screen = document.getElementById("screen");
  const output = document.getElementById("output");

  const surprise = surprises[type];

  if (!surprise) return;

  machine.classList.remove("shake");

  void machine.offsetWidth;

  machine.classList.add("shake");

  screen.innerHTML = `
    <p>DISPENSING...</p>
    <span>A little love is on its way ♡</span>
  `;

  output.innerHTML = `
    <span class="dropped-item">${surprise.emoji}</span>
  `;

  if (!collected.includes(type)) {
    collected.push(type);
  }

  updateCollection();

  setTimeout(() => {
    document.getElementById("popupEmoji").textContent =
      surprise.emoji;

    document.getElementById("popupTitle").textContent =
      surprise.title;

    document.getElementById("popupMessage").textContent =
      surprise.message;

    document.getElementById("popup").classList.add("show");

    if (collected.length === 6) {
      screen.innerHTML = `
        <p>ALL 6 COLLECTED! 💖</p>
        <span>You unlocked all the love!</span>
      `;
    } else {
      screen.innerHTML = `
        <p>${surprise.title.toUpperCase()}</p>
        <span>Another little surprise for you ♡</span>
      `;
    }

  }, 450);
}

function updateCollection() {
  document.getElementById("count").textContent =
    collected.length;

  const icons = document.querySelectorAll(
    "#collectionIcons span"
  );

  const types = [
    "note",
    "memory",
    "star",
    "cupcake",
    "gift",
    "wish"
  ];

  icons.forEach((icon, index) => {
    if (collected.includes(types[index])) {
      icon.textContent = "♥";
      icon.classList.add("collected");
    } else {
      icon.textContent = "♡";
      icon.classList.remove("collected");
    }
  });
}

function closePopup() {
  document.getElementById("popup").classList.remove("show");
}