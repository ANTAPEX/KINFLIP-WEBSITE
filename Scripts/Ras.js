"use strict";

const day1 = document.querySelector("#day--1");
const day2 = document.querySelector("#day--2");
const hour1 = document.querySelector("#hour--1");
const hour2 = document.querySelector("#hour--2");
const minute1 = document.querySelector("#minute--1");
const minute2 = document.querySelector("#minute--2");

const future = Date.parse("March 21, 2023 00:00:00");
console.log(future);

const updateTimer = function (fut) {
  fut = future;
  const now = new Date();
  const timeRem = fut - now;

  const days = Math.floor(timeRem / (1000 * 60 * 60 * 24));
  const hours = Math.floor(timeRem / (1000 * 60 * 60));
  const hour = hours - days * 24;
  const mins = Math.floor(timeRem / (1000 * 60)) - hours * 60;

  const d = days.toString();
  const h = hour.toString();
  const m = mins.toString();

  day1.textContent = d.length === 1 ? 0 : d[0];
  day2.textContent = d.length === 1 ? d[0] : d[1];
  hour1.textContent = h.length === 1 ? 0 : h[0];
  hour2.textContent = h.length === 1 ? h[0] : h[1];
  minute1.textContent = m.length === 1 ? 0 : m[0];
  minute2.textContent = m.length === 1 ? m[0] : m[1];
};

setInterval(updateTimer, 1000);
