let timers = [];

let playerLeads = true;
let board = null;
const getTimers = window.setInterval(() => {
  timers = document.querySelectorAll("span[data-cy=clock-time]");
  board = document.querySelector("#board-layout-main");
}, 10000);

const stripTimer = (value) => {
  const [min, sec] = value.split(":");
  return min * 60 + sec * 1;
};

const notifySlower = window.setInterval(() => {
  if (timers.length > 1) {
    const newPlayerLeads =
      stripTimer(timers[1].innerText) >= stripTimer(timers[0].innerText);
    if (playerLeads != newPlayerLeads) {
      playerLeads = newPlayerLeads;
      switchBGcolor(newPlayerLeads);
    }
  }
}, 50);

const switchBGcolor = (ifPlayerleads) => {
  if (ifPlayerleads) {
    board.style.backgroundColor = "inherit";
  } else {
    board.style.backgroundColor = "red";
  }
};
