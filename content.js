let timers = [];

let playerLeads = true;
let board = null;
const getTimers = window.setInterval(() => {
  //   timers = document.querySelectorAll(".move-time-content");
  timers = document.querySelectorAll(".player-clock");
  board = document.querySelector("#board-layout-main");
  if (timers.length > 1) console.log(timers);
}, 10000);

const stripTimer = (value) => {
  const [min, sec] = value.split(":");
  return min * 60 + sec * 1;
};

const notifySlower = window.setInterval(() => {
  if (timers.length > 1) {
    // const newPlayerLeads =
    //   stripTimer(timers[1].innerText) > stripTimer(timers[0].innerText);
    console.log("works");

    const newPlayerLeads =
      stripTimer(timers[1].children[2].innerText) >=
      stripTimer(timers[0].children[2].innerText);
    if (playerLeads != newPlayerLeads) {
      playerLeads = newPlayerLeads;
      switchBGcolor(newPlayerLeads);
      console.log("switch");
    }
  }
}, 50);

const switchBGcolor = (ifPlayerleads) => {
  if (ifPlayerleads) {
    console.log("inherit");
    board.style.backgroundColor = "inherit";
  } else {
    console.log("red");
    board.style.backgroundColor = "red";
  }
};
