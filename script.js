const MAX_FRIENDS_URL = "https://www.max.com/shows/friends";
const TVMAZE_SHOW_SEARCH = "https://api.tvmaze.com/singlesearch/shows?q=friends";
const TVMAZE_EPISODE_BY_NUMBER = (showId, season, number) =>
  `https://api.tvmaze.com/shows/${showId}/episodebynumber?season=${season}&number=${number}`;

const episodes = [
  // Season 1
  [1, 1,  "The Pilot"],
  [1, 2,  "The One with the Sonogram at the End"],
  [1, 3,  "The One with the Thumb"],
  [1, 4,  "The One with George Stephanopoulos"],
  [1, 5,  "The One with the East German Laundry Detergent"],
  [1, 6,  "The One with the Butt"],
  [1, 7,  "The One with the Blackout"],
  [1, 8,  "The One Where Nana Dies Twice"],
  [1, 9,  "The One Where Underdog Gets Away"],
  [1, 10, "The One with the Monkey"],
  [1, 11, "The One with Mrs. Bing"],
  [1, 12, "The One with the Dozen Lasagnas"],
  [1, 13, "The One with the Boobies"],
  [1, 14, "The One with the Candy Hearts"],
  [1, 15, "The One with the Stoned Guy"],
  [1, 16, "The One with Two Parts (Part 1)"],
  [1, 17, "The One with Two Parts (Part 2)"],
  [1, 18, "The One with All the Poker"],
  [1, 19, "The One Where the Monkey Gets Away"],
  [1, 20, "The One with the Evil Orthodontist"],
  [1, 21, "The One with the Fake Monica"],
  [1, 22, "The One with the Ick Factor"],
  [1, 23, "The One with the Birth"],
  [1, 24, "The One Where Rachel Finds Out"],

  // Season 2
  [2, 1,  "The One with Ross's New Girlfriend"],
  [2, 2,  "The One with the Breast Milk"],
  [2, 3,  "The One Where Heckles Dies"],
  [2, 4,  "The One with Phoebe's Husband"],
  [2, 5,  "The One with Five Steaks and an Eggplant"],
  [2, 6,  "The One with the Baby on the Bus"],
  [2, 7,  "The One Where Ross Finds Out"],
  [2, 8,  "The One with the List"],
  [2, 9,  "The One with Phoebe's Dad"],
  [2, 10, "The One with Russ"],
  [2, 11, "The One with the Lesbian Wedding"],
  [2, 12, "The One After the Superbowl (Part 1)"],
  [2, 13, "The One After the Superbowl (Part 2)"],
  [2, 14, "The One with the Prom Video"],
  [2, 15, "The One Where Ross and Rachel... You Know"],
  [2, 16, "The One Where Joey Moves Out"],
  [2, 17, "The One Where Eddie Moves In"],
  [2, 18, "The One Where Dr. Ramoray Dies"],
  [2, 19, "The One Where Eddie Won't Go"],
  [2, 20, "The One Where Old Yeller Dies"],
  [2, 21, "The One with the Bullies"],
  [2, 22, "The One with the Two Parties"],
  [2, 23, "The One with the Chicken Pox"],
  [2, 24, "The One with Barry and Mindy's Wedding"],

  // Season 3
  [3, 1,  "The One with the Princess Leia Fantasy"],
  [3, 2,  "The One Where No One's Ready"],
  [3, 3,  "The One with the Jam"],
  [3, 4,  "The One with the Metaphorical Tunnel"],
  [3, 5,  "The One with Frank Jr."],
  [3, 6,  "The One with the Flashback"],
  [3, 7,  "The One with the Race Car Bed"],
  [3, 8,  "The One with the Giant Poking Device"],
  [3, 9,  "The One with the Football"],
  [3, 10, "The One Where Rachel Quits"],
  [3, 11, "The One Where Chandler Can't Remember Which Sister"],
  [3, 12, "The One with All the Jealousy"],
  [3, 13, "The One Where Monica and Richard Are Just Friends"],
  [3, 14, "The One with Phoebe's Ex-Partner"],
  [3, 15, "The One Where Ross and Rachel Take a Break"],
  [3, 16, "The One the Morning After"],
  [3, 17, "The One Without the Ski Trip"],
  [3, 18, "The One with the Hypnosis Tape"],
  [3, 19, "The One with the Tiny T-Shirt"],
  [3, 20, "The One with the Dollhouse"],
  [3, 21, "The One with a Chick and a Duck"],
  [3, 22, "The One with the Screamer"],
  [3, 23, "The One with Ross's Thing"],
  [3, 24, "The One with the Ultimate Fighting Champion"],
  [3, 25, "The One at the Beach"],

  // Season 4
  [4, 1,  "The One with the Jellyfish"],
  [4, 2,  "The One with the Cat"],
  [4, 3,  "The One with the 'Cuffs"],
  [4, 4,  "The One with the Ballroom Dancing"],
  [4, 5,  "The One with Joey's New Girlfriend"],
  [4, 6,  "The One with the Dirty Girl"],
  [4, 7,  "The One Where Chandler Crosses the Line"],
  [4, 8,  "The One with Chandler in a Box"],
  [4, 9,  "The One Where They're Going to Party!"],
  [4, 10, "The One with the Girl from Poughkeepsie"],
  [4, 11, "The One with Phoebe's Uterus"],
  [4, 12, "The One with the Embryos"],
  [4, 13, "The One with Rachel's Crush"],
  [4, 14, "The One with Joey's Dirty Day"],
  [4, 15, "The One with All the Rugby"],
  [4, 16, "The One with the Fake Party"],
  [4, 17, "The One with the Free Porn"],
  [4, 18, "The One with Rachel's New Dress"],
  [4, 19, "The One with All the Haste"],
  [4, 20, "The One with All the Wedding Dresses"],
  [4, 21, "The One with the Invitation"],
  [4, 22, "The One with the Worst Best Man Ever"],
  [4, 23, "The One with Ross's Wedding (Part 1)"],
  [4, 24, "The One with Ross's Wedding (Part 2)"],

  // Season 5
  [5, 1,  "The One After Ross Says Rachel"],
  [5, 2,  "The One with All the Kissing"],
  [5, 3,  "The One Hundredth"],
  [5, 4,  "The One Where Phoebe Hates PBS"],
  [5, 5,  "The One with the Kips"],
  [5, 6,  "The One with the Yeti"],
  [5, 7,  "The One Where Ross Moves In"],
  [5, 8,  "The One with the Thanksgiving Flashbacks"],
  [5, 9,  "The One with Ross's Sandwich"],
  [5, 10, "The One with the Inappropriate Sister"],
  [5, 11, "The One with All the Resolutions"],
  [5, 12, "The One with Chandler's Work Laugh"],
  [5, 13, "The One with Joey's Bag"],
  [5, 14, "The One Where Everybody Finds Out"],
  [5, 15, "The One with the Girl Who Hits Joey"],
  [5, 16, "The One with the Cop"],
  [5, 17, "The One with Rachel's Inadvertent Kiss"],
  [5, 18, "The One Where Rachel Smokes"],
  [5, 19, "The One Where Ross Can't Flirt"],
  [5, 20, "The One with the Ride-Along"],
  [5, 21, "The One with the Ball"],
  [5, 22, "The One with Joey's Big Break"],
  [5, 23, "The One in Vegas (Part 1)"],
  [5, 24, "The One in Vegas (Part 2)"],

  // Season 6
  [6, 1,  "The One After Vegas"],
  [6, 2,  "The One Where Ross Hugs Rachel"],
  [6, 3,  "The One with Ross's Denial"],
  [6, 4,  "The One Where Joey Loses His Insurance"],
  [6, 5,  "The One with Joey's Porsche"],
  [6, 6,  "The One on the Last Night"],
  [6, 7,  "The One Where Phoebe Runs"],
  [6, 8,  "The One with Ross's Teeth"],
  [6, 9,  "The One Where Ross Got High"],
  [6, 10, "The One with the Routine"],
  [6, 11, "The One with the Apothecary Table"],
  [6, 12, "The One with the Joke"],
  [6, 13, "The One with Rachel's Sister"],
  [6, 14, "The One Where Chandler Can't Cry"],
  [6, 15, "The One That Could Have Been (Part 1)"],
  [6, 16, "The One That Could Have Been (Part 2)"],
  [6, 17, "The One with Unagi"],
  [6, 18, "The One Where Ross Dates a Student"],
  [6, 19, "The One with Joey's Fridge"],
  [6, 20, "The One with Mac and C.H.E.E.S.E."],
  [6, 21, "The One Where Ross Meets Elizabeth's Dad"],
  [6, 22, "The One Where Paul's the Man"],
  [6, 23, "The One with the Ring"],
  [6, 24, "The One with the Proposal (Part 1)"],
  [6, 25, "The One with the Proposal (Part 2)"],

  // Season 7
  [7, 1,  "The One with Monica's Thunder"],
  [7, 2,  "The One with Rachel's Book"],
  [7, 3,  "The One with Phoebe's Cookies"],
  [7, 4,  "The One with Rachel's Assistant"],
  [7, 5,  "The One with the Engagement Picture"],
  [7, 6,  "The One with the Nap Partners"],
  [7, 7,  "The One with Ross's Library Book"],
  [7, 8,  "The One Where Chandler Doesn't Like Dogs"],
  [7, 9,  "The One with All the Candy"],
  [7, 10, "The One with the Holiday Armadillo"],
  [7, 11, "The One with All the Cheesecakes"],
  [7, 12, "The One Where They're Up All Night"],
  [7, 13, "The One Where Rosita Dies"],
  [7, 14, "The One Where They All Turn Thirty"],
  [7, 15, "The One with Joey's New Brain"],
  [7, 16, "The One with the Truth About London"],
  [7, 17, "The One with the Cheap Wedding Dress"],
  [7, 18, "The One with Joey's Award"],
  [7, 19, "The One with Ross and Monica's Cousin"],
  [7, 20, "The One with Rachel's Big Kiss"],
  [7, 21, "The One with the Vows"],
  [7, 22, "The One with Chandler's Dad"],
  [7, 23, "The One with Monica and Chandler's Wedding (Part 1)"],
  [7, 24, "The One with Monica and Chandler's Wedding (Part 2)"],

  // Season 8
  [8, 1,  "The One After 'I Do'"],
  [8, 2,  "The One with the Red Sweater"],
  [8, 3,  "The One Where Rachel Tells..."],
  [8, 4,  "The One with the Videotape"],
  [8, 5,  "The One with Rachel's Date"],
  [8, 6,  "The One with the Halloween Party"],
  [8, 7,  "The One with the Stain"],
  [8, 8,  "The One with the Stripper"],
  [8, 9,  "The One with the Rumor"],
  [8, 10, "The One with Monica's Boots"],
  [8, 11, "The One with Ross's Step Forward"],
  [8, 12, "The One Where Joey Dates Rachel"],
  [8, 13, "The One Where Chandler Takes a Bath"],
  [8, 14, "The One with the Secret Closet"],
  [8, 15, "The One with the Birthing Video"],
  [8, 16, "The One Where Joey Tells Rachel"],
  [8, 17, "The One with the Tea Leaves"],
  [8, 18, "The One in Massapequa"],
  [8, 19, "The One with Joey's Interview"],
  [8, 20, "The One with the Baby Shower"],
  [8, 21, "The One with the Cooking Class"],
  [8, 22, "The One Where Rachel Is Late"],
  [8, 23, "The One Where Rachel Has a Baby (Part 1)"],
  [8, 24, "The One Where Rachel Has a Baby (Part 2)"],

  // Season 9
  [9, 1,  "The One Where No One Proposes"],
  [9, 2,  "The One Where Emma Cries"],
  [9, 3,  "The One with the Pediatrician"],
  [9, 4,  "The One with the Sharks"],
  [9, 5,  "The One with Phoebe's Birthday Dinner"],
  [9, 6,  "The One with the Male Nanny"],
  [9, 7,  "The One with Ross's Inappropriate Song"],
  [9, 8,  "The One with Rachel's Other Sister"],
  [9, 9,  "The One with Christmas in Tulsa"],
  [9, 10, "The One Where Rachel Goes Back to Work"],
  [9, 11, "The One with Phoebe's Rats"],
  [9, 12, "The One Where Monica Sings"],
  [9, 13, "The One with the Blind Dates"],
  [9, 14, "The One with the Mugging"],
  [9, 15, "The One with the Boob Job"],
  [9, 16, "The One with the Memorial Service"],
  [9, 17, "The One with the Lottery"],
  [9, 18, "The One with Rachel's Dream"],
  [9, 19, "The One with the Soap Opera Party"],
  [9, 20, "The One with the Fertility Test"],
  [9, 21, "The One with the Donor"],
  [9, 22, "The One in Barbados (Part 1)"],
  [9, 23, "The One in Barbados (Part 2)"],

  // Season 10
  [10, 1,  "The One After Joey and Rachel Kiss"],
  [10, 2,  "The One Where Ross Is Fine"],
  [10, 3,  "The One with Ross's Tan"],
  [10, 4,  "The One with the Cake"],
  [10, 5,  "The One Where Rachel's Sister Babysits"],
  [10, 6,  "The One with Ross's Grant"],
  [10, 7,  "The One with the Home Study"],
  [10, 8,  "The One with the Late Thanksgiving"],
  [10, 9,  "The One with the Birth Mother"],
  [10, 10, "The One Where Chandler Gets Caught"],
  [10, 11, "The One Where the Stripper Cries"],
  [10, 12, "The One with Phoebe's Wedding"],
  [10, 13, "The One Where Joey Speaks French"],
  [10, 14, "The One with Princess Consuela"],
  [10, 15, "The One Where Estelle Dies"],
  [10, 16, "The One with Rachel's Going Away Party"],
  [10, 17, "The Last One (Part 1)"],
  [10, 18, "The Last One (Part 2)"],
];

const sampleBtn = document.getElementById("sampleBtn");
const result = document.getElementById("result");
const seasonEl = document.getElementById("season");
const episodeEl = document.getElementById("episode");
const titleEl = document.getElementById("title");
const episodeImage = document.getElementById("episodeImage");
const imageFallback = document.getElementById("imageFallback");
const maxLink = document.getElementById("maxLink");
const swipeArea = document.getElementById("swipeArea");
const themeToggle = document.getElementById("themeToggle");
const installBtn = document.getElementById("installBtn");

let cachedShowId = null;
let deferredPrompt = null;

function sampleEpisode() {
  const index = Math.floor(Math.random() * episodes.length);
  return episodes[index];
}

async function getFriendsShowId() {
  if (cachedShowId !== null) return cachedShowId;

  const res = await fetch(TVMAZE_SHOW_SEARCH);
  if (!res.ok) throw new Error("Failed to fetch show data.");

  const show = await res.json();
  cachedShowId = show.id;
  return cachedShowId;
}

function stripHtml(html) {
  if (!html) return "";
  const tmp = document.createElement("div");
  tmp.innerHTML = html;
  return (tmp.textContent || tmp.innerText || "").trim();
}

async function getEpisodeDetails(season, episodeNumber) {
  const showId = await getFriendsShowId();
  const res = await fetch(TVMAZE_EPISODE_BY_NUMBER(showId, season, episodeNumber));

  if (!res.ok) throw new Error("Failed to fetch episode data.");

  const data = await res.json();
  return {
    imageUrl: data?.image?.original || data?.image?.medium || null,
    summary: stripHtml(data?.summary) || "No summary available."
  };
}

function showImage(url) {
  episodeImage.classList.remove("loaded");
  episodeImage.src = "";
  imageFallback.classList.add("hidden");

  if (!url) {
    episodeImage.classList.add("hidden");
    imageFallback.classList.remove("hidden");
    return;
  }

  episodeImage.classList.remove("hidden");
  episodeImage.onload = () => episodeImage.classList.add("loaded");
  episodeImage.onerror = () => {
    episodeImage.classList.add("hidden");
    imageFallback.classList.remove("hidden");
  };
  episodeImage.src = url;
}

async function renderSample() {
  const [season, episodeNumber, title] = sampleEpisode();

  seasonEl.textContent = season;
  episodeEl.textContent = episodeNumber;
  titleEl.textContent = title;
  summaryEl.textContent = "Loading summary...";
  maxLink.href = MAX_FRIENDS_URL;

  result.classList.remove("hidden");
  result.style.animation = "none";
  void result.offsetHeight;
  result.style.animation = "fadeIn 0.45s ease";

  imageFallback.textContent = "Loading image...";
  imageFallback.classList.remove("hidden");
  episodeImage.classList.add("hidden");

  try {
    const { imageUrl, summary } = await getEpisodeDetails(season, episodeNumber);
    summaryEl.textContent = summary;
    imageFallback.textContent = "No episode image found";
    showImage(imageUrl);
  } catch {
    imageFallback.textContent = "Could not load episode image";
    summaryEl.textContent = "Could not load episode summary.";
    episodeImage.classList.add("hidden");
    imageFallback.classList.remove("hidden");
  }
}

function applyTheme(theme) {
  const isLight = theme === "light";
  document.body.classList.toggle("light-mode", isLight);
  themeToggle.textContent = isLight ? "☀️ Light mode" : "🌙 Dark mode";
  localStorage.setItem("theme", theme);

  const metaTheme = document.querySelector('meta[name="theme-color"]');
  metaTheme.setAttribute("content", isLight ? "#fdf6e3" : "#1a0533");
}

function initTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light" || savedTheme === "dark") {
    applyTheme(savedTheme);
    return;
  }

  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  applyTheme(prefersLight ? "light" : "dark");
}

themeToggle.addEventListener("click", () => {
  const isCurrentlyLight = document.body.classList.contains("light-mode");
  applyTheme(isCurrentlyLight ? "dark" : "light");
});

sampleBtn.addEventListener("click", renderSample);

let startX = 0;
let endX = 0;

swipeArea.addEventListener("touchstart", (e) => {
  startX = e.changedTouches[0].clientX;
}, { passive: true });

swipeArea.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;
  const delta = endX - startX;

  if (Math.abs(delta) > 50) {
    renderSample();
  }
}, { passive: true });

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.classList.remove("hidden");
});

installBtn.addEventListener("click", async () => {
  if (!deferredPrompt) return;

  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
  installBtn.classList.add("hidden");
});

window.addEventListener("appinstalled", () => {
  installBtn.classList.add("hidden");
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js");
  });
}

const summaryEl = document.getElementById("summary");

initTheme();
