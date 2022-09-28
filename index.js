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

  function cards(url) {
    loadBtn.style.display = "block";
    class NewsCard {
      constructor(name, urlToImage, title, url) {
        this.name = name;
        this.urlToImage = urlToImage;
        this.title = title;
        this.url = url;
      }
      render() {
        const element = document.createElement("div");
        element.innerHTML = `
              <div class="news-card">
              <img class="news-img" src=${this.urlToImage} alt=${this.name}>
              <h2>${this.name}</h2>
              <p>${this.title.slice(0, 100)}...</p>
              <a href=${this.url} target="_blank">Read more:</a>
              </div>
              `;
        news.append(element);
      }
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.articles.length == 0) {
          news.innerHTML = "";
          news.innerHTML = "There are no articles matching your request";
          loadBtn.style.display = "none";
        }
        data.articles.forEach(({ source, urlToImage, title, url }) => {
          new NewsCard(source.name, urlToImage, title, url).render();
        });
      });
  }
});
