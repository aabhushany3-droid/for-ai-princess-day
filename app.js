const truths = [
  ["You are not difficult to love.", "Loving you isn’t a task to get through. Knowing you is one of the sweetest parts of my life."],
  ["You don't have to be productive every second to deserve happiness.", "A quiet afternoon, a slow morning, doing nothing at all—you deserve those things without earning them first."],
  ["Your dreams matter just as much as your responsibilities.", "There’s room in your life for the snow, the aurora, and every little thing that makes your heart feel awake."],
  ["You deserve to be cared for, too.", "You spend so much care on the people around you. I hope you can let a little of it find its way back to you."],
  ["You are allowed to say that you're tired.", "You never have to make a hard day sound smaller to make me comfortable. I can listen."],
  ["You don't have to hide your vulnerable side from me.", "You can be honest with me, even when the honest thing is simply, “I don’t know.”"],
  ["Even on your worst days, you are worthy of love.", "A difficult day cannot change the good, whole person you are. Nothing you do today has to prove that."],
  ["I am proud of the person you are becoming.", "Not only for what you manage to do—for the thoughtful, gentle way you keep being you."],
  ["You deserve a life filled with beautiful memories.", "Not only someday. I hope there are little beautiful moments tucked into the ordinary days, too."],
  ["I hope you never forget how special you are.", "If you forget for a while, borrow my eyes. I see you with so much tenderness."]
];

const reasons = [
  ["Your beautiful heart", "The way you care makes people feel held, even in small moments."],
  ["Your determination", "You keep showing up for the things that matter to you."],
  ["Your gentle spirit", "You bring a quiet kindness into rooms and conversations."],
  ["Your smile", "It has a way of making an ordinary moment feel lighter."],
  ["The way you keep going", "You meet each day as it comes, in your own time."],
  ["Your kindness", "You notice the people around you and make space for them."],
  ["Your devotion to the people you love", "Your care says so much about the generous person you are."],
  ["Your dreams", "I love that there is still so much beautiful sky you want to see."],
  ["Your one-of-a-kind personality", "There is nobody else whose presence feels quite like yours."],
  ["Your way with ordinary moments", "A little time with you can turn a regular day into a favourite memory."],
  ["Your curious mind", "I love hearing what you’re thinking about, big or small."],
  ["Your quiet courage", "You make your way through hard things without needing applause."],
  ["Your soft side", "It isn’t something to protect from me; it’s one of the things I cherish."],
  ["Your beautiful laugh", "I hope life gives you a hundred reasons to let it out."],
  ["How hard you work", "Your effort deserves appreciation—and your rest does, too."],
  ["Your honest feelings", "You never have to tidy them up before sharing them with me."],
  ["Your hopes for what’s ahead", "I’m glad you let me imagine some of those bright places with you."],
  ["The care you put into little things", "Those details don’t go unnoticed by me."],
  ["The way you make me feel lucky", "Even a simple message from you can change the shape of my day."],
  ["Simply being you", "No extra reason required. You are already someone worth celebrating."]
];

const happyThings = [
  ["Sushi", "A little reminder that good food and an unhurried moment belong in your week, too.", "01", "○"],
  ["Pizza", "Comfort food, shared stories, and absolutely no need to rush away afterward.", "02", "◒"],
  ["Noodles", "A warm bowl after a long day sounds like the kind of small kindness you deserve.", "03", "〰"],
  ["Dim sum", "A table full of little favourites, and nowhere else we need to be.", "04", "◌"],
  ["Matcha", "Your favourite green, made slowly, with a moment to breathe beside it.", "05", "⌁"],
  ["Pink flowers", "For a girl who makes the world feel a little more tender just by being in it.", "06", "✳"],
  ["Snow", "One day, fresh snow under our feet and a whole afternoon to take it in.", "07", "✧"],
  ["The Northern Lights", "A sky painted just for you—and the two of us lucky enough to see it.", "08", "☼"]
];

const comfortNotes = [
  "Hey Princess, breathe. You don’t have to figure everything out tonight.",
  "You have made it through hard days before. You don’t have to rush through this one.",
  "Please don’t measure your whole life by one difficult day. Tomorrow can be its own page.",
  "You’re allowed to rest. You’re allowed to cry. You’re allowed to begin again.",
  "If today nobody tells you how wonderful you are, let this little corner remind you.",
  "You can do one small thing, or no thing at all for a while. You are still enough.",
  "Whatever you’re feeling doesn’t make you a disappointment. You don’t need to hide it from me.",
  "You are more than what you managed to finish today. I hope you can be gentle with yourself."
];

const byId = (id) => document.getElementById(id);

function renderTruthCards() {
  const grid = byId("truthGrid");
  grid.innerHTML = truths.map(([message, detail], index) => `
    <article class="truth-card" data-reveal>
      <div class="truth-card__inner">
        <div class="truth-card__face truth-card__front">
          <span class="truth-card__number">A NOTE FOR YOU · ${String(index + 1).padStart(2, "0")}</span>
          <p class="truth-card__message">${message}</p>
          <button class="truth-card__action" type="button" aria-label="Read more: ${message}" aria-expanded="false">Read this one <span aria-hidden="true">↗</span></button>
        </div>
        <div class="truth-card__face truth-card__back" aria-hidden="true">
          <span class="truth-card__number">JUST BETWEEN US · ${String(index + 1).padStart(2, "0")}</span>
          <p class="truth-card__message">${detail}</p>
          <button class="truth-card__action" type="button" aria-label="Close this note" aria-expanded="true" tabindex="-1">Keep this one <span aria-hidden="true">↙</span></button>
        </div>
      </div>
    </article>`).join("");

  grid.querySelectorAll(".truth-card__action").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".truth-card");
      const flipped = card.classList.toggle("is-flipped");
      const front = card.querySelector(".truth-card__front");
      const back = card.querySelector(".truth-card__back");
      front.setAttribute("aria-hidden", String(flipped));
      back.setAttribute("aria-hidden", String(!flipped));
      card.querySelectorAll(".truth-card__action").forEach((control) => control.setAttribute("tabindex", control === button ? "-1" : "0"));
      const nextButton = card.querySelector(flipped ? ".truth-card__back .truth-card__action" : ".truth-card__front .truth-card__action");
      nextButton.focus({ preventScroll: true });
    });
  });
}

function renderReasons() {
  byId("reasonsGrid").innerHTML = reasons.map(([title, detail], index) => `
    <article class="reason" data-reveal>
      <span class="reason__number">${String(index + 1).padStart(2, "0")}</span>
      <p class="reason__text">${title}</p>
      <span class="reason__detail">${detail}</span>
    </article>`).join("");
}

function renderHappiness() {
  const grid = byId("happinessGrid");
  grid.innerHTML = happyThings.map(([name, detail, number, symbol]) => `
    <article class="joy-card" data-reveal>
      <span class="joy-card__number">A LITTLE THING · ${number}</span>
      <span class="joy-card__symbol" aria-hidden="true">${symbol}</span>
      <h3>${name}</h3>
      <p>A small thing I remember you love.</p>
      <button class="joy-card__button" type="button" aria-expanded="false" aria-label="Show a little note about ${name}">Show a little note about ${name}</button>
      <span class="joy-card__detail" aria-hidden="true">${detail}</span>
    </article>`).join("");

  grid.querySelectorAll(".joy-card__button").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".joy-card");
      const isOpen = card.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
      button.setAttribute("aria-label", `${isOpen ? "Hide" : "Show"} a little note about ${card.querySelector("h3").textContent}`);
      card.querySelector(".joy-card__detail").setAttribute("aria-hidden", String(!isOpen));
    });
  });
}

function setupRevealMotion() {
  const elements = document.querySelectorAll("[data-reveal]");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-revealed"));
    return;
  }
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -26px 0px" });
  elements.forEach((element) => observer.observe(element));
}

function setupSnow() {
  const snowfall = byId("snowfall");
  if (!snowfall || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const count = window.matchMedia("(max-width: 700px)").matches ? 22 : 38;
  const flakes = document.createDocumentFragment();
  for (let index = 0; index < count; index += 1) {
    const flake = document.createElement("span");
    flake.className = "snowflake";
    flake.style.setProperty("--left", `${Math.random() * 100}%`);
    flake.style.setProperty("--size", `${1.5 + Math.random() * 4}px`);
    flake.style.setProperty("--duration", `${11 + Math.random() * 14}s`);
    flake.style.setProperty("--delay", `${-Math.random() * 24}s`);
    flake.style.setProperty("--opacity", `${0.25 + Math.random() * 0.55}`);
    flakes.append(flake);
  }
  snowfall.append(flakes);
}

function setupNavigation() {
  const navLinks = [...document.querySelectorAll(".main-nav a")];
  const sections = navLinks.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);
  const setCurrent = (id) => navLinks.forEach((link) => {
    if (link.getAttribute("href") === `#${id}`) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
  if (!("IntersectionObserver" in window)) return;
  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible) setCurrent(visible.target.id);
  }, { rootMargin: "-28% 0px -58% 0px", threshold: [0, .2, .5] });
  sections.forEach((section) => observer.observe(section));
}

function setupOpening() {
  const open = byId("openUniverse");
  const cover = byId("cover");
  const header = byId("siteHeader");
  open.addEventListener("click", () => {
    document.body.classList.remove("is-locked");
    cover.classList.add("cover--opened");
    header.classList.add("is-visible");
    header.inert = false;
    byId("main").inert = false;
    document.querySelector(".site-footer").inert = false;
    window.setTimeout(() => {
      cover.setAttribute("aria-hidden", "true");
      byId("welcome-title").focus({ preventScroll: true });
      byId("welcome").scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
    }, 420);
  });
}

function setupComfortNotes() {
  let current = 0;
  const button = byId("comfortButton");
  button.addEventListener("click", () => {
    current = (current + 1) % comfortNotes.length;
    const message = byId("comfortMessage");
    message.style.opacity = "0";
    window.setTimeout(() => {
      message.textContent = comfortNotes[current];
      byId("comfortNumber").textContent = `A SMALL REMINDER · ${String(current + 1).padStart(2, "0")}`;
      message.style.opacity = "1";
    }, 180);
  });
}

function setupFinalLetter() {
  const button = byId("openFinalLetter");
  const letter = byId("finalLetter");
  button.addEventListener("click", () => {
    const open = letter.hidden;
    letter.hidden = !open;
    button.setAttribute("aria-expanded", String(open));
    button.querySelector("span").textContent = open ? "Keep this letter close" : "Open the last little letter";
    if (open) {
      letter.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "nearest" });
      byId("toast").textContent = "A little place to come back to, whenever you need it.";
      showToast();
    }
  });
}

function showToast() {
  const toast = byId("toast");
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove("is-visible"), 3600);
}

function setupSound() {
  const button = byId("soundButton");
  const label = button.querySelector(".sound-button__label");
  let context;
  let master;
  let oscillators = [];
  let isPlaying = false;
  let stopTimer;

  const addTones = () => {
    [174.61, 220, 261.63, 329.63].forEach((frequency, index) => {
      const oscillator = context.createOscillator();
      const tone = context.createGain();
      oscillator.type = "sine";
      oscillator.frequency.value = frequency;
      tone.gain.value = index === 0 ? .24 : .105;
      oscillator.connect(tone).connect(master);
      oscillator.start();
      oscillators.push(oscillator);
    });
  };

  const stop = () => {
    if (!context || !isPlaying) return;
    window.clearTimeout(stopTimer);
    master.gain.setTargetAtTime(0, context.currentTime, .35);
    stopTimer = window.setTimeout(() => {
      oscillators.forEach((oscillator) => { try { oscillator.stop(); } catch {} });
      oscillators = [];
      isPlaying = false;
      context.suspend();
    }, 1400);
    isPlaying = false;
  };

  const start = async () => {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) {
      label.textContent = "Sound unavailable";
      button.disabled = true;
      return;
    }
    if (!context) {
      context = new AudioContextClass();
      master = context.createGain();
      master.gain.value = 0;
      master.connect(context.destination);
    }
    window.clearTimeout(stopTimer);
    await context.resume();
    if (!oscillators.length) addTones();
    master.gain.cancelScheduledValues(context.currentTime);
    master.gain.setTargetAtTime(.027, context.currentTime, .9);
    isPlaying = true;
  };

  button.addEventListener("click", async () => {
    if (isPlaying) {
      stop();
      label.textContent = "Sound off";
      button.setAttribute("aria-label", "Play a soft ambient sound");
      button.setAttribute("aria-pressed", "false");
    } else {
      try {
        await start();
        label.textContent = "Sound on";
        button.setAttribute("aria-label", "Pause the soft ambient sound");
        button.setAttribute("aria-pressed", "true");
      } catch {
        label.textContent = "Sound unavailable";
        button.disabled = true;
      }
    }
  });
}

renderTruthCards();
renderReasons();
renderHappiness();
setupRevealMotion();
setupSnow();
setupNavigation();
setupOpening();
setupComfortNotes();
setupFinalLetter();
setupSound();
