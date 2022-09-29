import { getResource } from "../services/services";

function cards(url) {
  const loadBtn = document.getElementById("load");
  let news = document.querySelector(".news-flex-container");
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

  getResource(url).then((data) => {
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
export default cards;
