/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");


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

  (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getResource)(url).then((data) => {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);


/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getResource": () => (/* binding */ getResource)
/* harmony export */ });
const getResource=async (url)=>{
    const res=await fetch (url);
    if(!res.ok){
        throw new Error(`couldn't fetch ${url}, status:${res.status}`)
    }

    return await res.json();
};



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");


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
    (0,_modules_cards__WEBPACK_IMPORTED_MODULE_0__["default"])(url);
  }
  allNews();

  function search(e) {
    e.preventDefault();
    news.innerHTML = "";
    limit = 5;
    topic = e.target.value || input.value;
    url = `https://newsapi.org/v2/everything?q=${topic}&pageSize=${limit}&apiKey=${APIKEY}`;
    (0,_modules_cards__WEBPACK_IMPORTED_MODULE_0__["default"])(url);
  }

  function load() {
    limit = limit + 5;
    (0,_modules_cards__WEBPACK_IMPORTED_MODULE_0__["default"])(url);
  }
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map