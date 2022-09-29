import cards from "./modules/cards";

window.addEventListener("DOMContentLoaded", function () {
  const searchForm = document.querySelector(".search");
  const input = document.querySelector(".input");
  let news = document.querySelector(".news-flex-container");
  const loadBtn = document.getElementById("load");
  const mainBtn = document.getElementById("main-btn");
  const bbcBtn = document.getElementById("bbc-btn");
  const covidBtn = document.getElementById("covid-btn");
  let limit = 5;
  const APIKEY = "89da1b965a9a4f5680eb618fcad309e4";
  let url;
  let topic;

  searchForm.addEventListener("submit", search);
  loadBtn.addEventListener("click", load);
  mainBtn.addEventListener("click", allNews);
  covidBtn.addEventListener("click", search);
  bbcBtn.addEventListener("click", search);

  function allNews() {
    news.innerHTML = "";
    limit = 5;
    url = `https://newsapi.org/v2/top-headlines?country=ru&pageSize=${limit}&apiKey=${APIKEY}`;
    cards(url);
  }
  allNews();

  function search(e) {
    e.preventDefault();
    news.innerHTML = "";
    limit = 5;
    topic = e.target.value || input.value;
    url = `https://newsapi.org/v2/everything?q=${topic}&pageSize=${limit}&apiKey=${APIKEY}`;
    cards(url);
  }

  function load() {
    limit = limit + 5;
    cards(url);
  }
});
