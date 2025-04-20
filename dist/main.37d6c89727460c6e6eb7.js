/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!****************!*\
  !*** ./app.js ***!
  \****************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./style.css");

const volumeControl = document.getElementById('volume')
const buttons = document.querySelectorAll('button')
let currentAudio = null
let isPlaying = false;
volumeControl.addEventListener('input', (e) => {
    if (currentAudio) {
      currentAudio.volume = e.target.value;
    }
});
  
buttons.forEach(button => {
    button.addEventListener('click', () => {
      const soundName = button.dataset.sound;
      if (button.classList.contains('active')) {
        togglePlayback();
        return;
      }
      stopCurrentAudio();
      playSound(soundName);
    });
  });
  
  function playSound(soundName) {
    currentAudio = new Audio(`../public/static/sounds/${soundName}.mp3`);
    currentAudio.volume = volumeControl.value;
    currentAudio.loop = true;
    currentAudio.play();
    isPlaying = true;
  }
  
  function stopCurrentAudio() {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    isPlaying = false;
  }
  
  function togglePlayback() {
    if (isPlaying) {
      currentAudio.pause();
      isPlaying = false;
    } else {
      currentAudio.play();
      isPlaying = true;
    }
  }
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zN2Q2Yzg5NzI3NDYwYzZlNmViNy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBLHdEQUF3RCxVQUFVO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3R5bGUuY3NzP2IyNTkiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcclxuY29uc3Qgdm9sdW1lQ29udHJvbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2b2x1bWUnKVxyXG5jb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJylcclxubGV0IGN1cnJlbnRBdWRpbyA9IG51bGxcclxubGV0IGlzUGxheWluZyA9IGZhbHNlO1xyXG52b2x1bWVDb250cm9sLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcclxuICAgIGlmIChjdXJyZW50QXVkaW8pIHtcclxuICAgICAgY3VycmVudEF1ZGlvLnZvbHVtZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgfVxyXG59KTtcclxuICBcclxuYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNvdW5kTmFtZSA9IGJ1dHRvbi5kYXRhc2V0LnNvdW5kO1xyXG4gICAgICBpZiAoYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuICAgICAgICB0b2dnbGVQbGF5YmFjaygpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBzdG9wQ3VycmVudEF1ZGlvKCk7XHJcbiAgICAgIHBsYXlTb3VuZChzb3VuZE5hbWUpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgXHJcbiAgZnVuY3Rpb24gcGxheVNvdW5kKHNvdW5kTmFtZSkge1xyXG4gICAgY3VycmVudEF1ZGlvID0gbmV3IEF1ZGlvKGAuLi9wdWJsaWMvc3RhdGljL3NvdW5kcy8ke3NvdW5kTmFtZX0ubXAzYCk7XHJcbiAgICBjdXJyZW50QXVkaW8udm9sdW1lID0gdm9sdW1lQ29udHJvbC52YWx1ZTtcclxuICAgIGN1cnJlbnRBdWRpby5sb29wID0gdHJ1ZTtcclxuICAgIGN1cnJlbnRBdWRpby5wbGF5KCk7XHJcbiAgICBpc1BsYXlpbmcgPSB0cnVlO1xyXG4gIH1cclxuICBcclxuICBmdW5jdGlvbiBzdG9wQ3VycmVudEF1ZGlvKCkge1xyXG4gICAgaWYgKGN1cnJlbnRBdWRpbykge1xyXG4gICAgICBjdXJyZW50QXVkaW8ucGF1c2UoKTtcclxuICAgICAgY3VycmVudEF1ZGlvLmN1cnJlbnRUaW1lID0gMDtcclxuICAgIH1cclxuICAgIGlzUGxheWluZyA9IGZhbHNlO1xyXG4gIH1cclxuICBcclxuICBmdW5jdGlvbiB0b2dnbGVQbGF5YmFjaygpIHtcclxuICAgIGlmIChpc1BsYXlpbmcpIHtcclxuICAgICAgY3VycmVudEF1ZGlvLnBhdXNlKCk7XHJcbiAgICAgIGlzUGxheWluZyA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY3VycmVudEF1ZGlvLnBsYXkoKTtcclxuICAgICAgaXNQbGF5aW5nID0gdHJ1ZTtcclxuICAgIH1cclxuICB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9